import pool from "./index.js";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { createCustomTasksTable } from "./custom_tasks_migration.js";
import { addDailyGoalColumn } from "./user_goals_migration.js";
import { runQuizMigration } from "./quiz_migration.js";
import { createPregeneratedQuizTable } from "./pregenerated_quiz_migration.js";
import { runCurriculumSetup } from "./run_curriculum.js";
import { insertManualQuizDataBatch1 } from "./manual_quiz_data.js";
import { insertManualQuizDataBatch2 } from "./manual_quiz_data_batch2.js";
import { insertManualQuizDataBatch3 } from "./manual_quiz_data_batch3.js";
import { insertManualQuizDataBatch4 } from "./manual_quiz_data_batch4.js";
import { insertManualQuizDataBatch5 } from "./manual_quiz_data_batch5.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const runSql = async (client, filename) => {
  const sqlPath = path.join(__dirname, filename);
  const sql = await fs.readFile(sqlPath, "utf8");
  await client.query(sql);
  console.log(`✅ Loaded ${filename}`);
};

const setup = async () => {
  const client = await pool.connect();
  try {
    console.log("🚀 Starting database setup...");
    
    // We run the basic schema and seed first to ensure tables exist
    await client.query("BEGIN");
    
    console.log("1/5 Running core schema...");
    const schemaSql = await fs.readFile(path.join(__dirname, "schema.sql"), "utf8");
    await client.query(schemaSql);
    
    console.log("2/5 Running initial seed...");
    const seedSql = await fs.readFile(path.join(__dirname, "seed.sql"), "utf8");
    await client.query(seedSql);

    console.log("3/5 Running modular migrations...");
    // These use the shared pool, but for setup we'll just let them run
    // Note: Migrations like createTable already handle IF NOT EXISTS
    await createCustomTasksTable();
    await addDailyGoalColumn();
    await runQuizMigration();
    await createPregeneratedQuizTable();
    
    console.log("4/5 Loading full curriculum...");
    await runCurriculumSetup();
    
    console.log("5/5 Seeding manual quiz data batches...");
    await insertManualQuizDataBatch1();
    await insertManualQuizDataBatch2();
    await insertManualQuizDataBatch3();
    await insertManualQuizDataBatch4();
    await insertManualQuizDataBatch5();
    
    await client.query("COMMIT");
    console.log("🎉 Database setup completed successfully.");
  } catch (err) {
    await client.query("ROLLBACK");
    console.error("❌ Database setup failed!");
    console.error("Error details:", err.message);
    if (err.detail) console.error("Constraint detail:", err.detail);
    if (err.where) console.error("Error location:", err.where);
    process.exit(1);
  } finally {
    client.release();
    await pool.end();
  }
};

setup();
