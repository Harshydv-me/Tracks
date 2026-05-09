import pool from "./index.js";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { createCustomTasksTable } from "./custom_tasks_migration.js";
import { addDailyGoalColumn } from "./user_goals_migration.js";
import { runQuizMigration } from "./quiz_migration.js";
import { createPregeneratedQuizTable } from "./pregenerated_quiz_migration.js";
import { insertManualQuizDataBatch1 } from "./manual_quiz_data.js";
import { insertManualQuizDataBatch2 } from "./manual_quiz_data_batch2.js";
import { insertManualQuizDataBatch3 } from "./manual_quiz_data_batch3.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const runSql = async (filename) => {
  const sqlPath = path.join(__dirname, filename);
  const sql = await fs.readFile(sqlPath, "utf8");
  await pool.query(sql);
  console.log(`✅ Loaded ${filename}`);
};

const setup = async () => {
  try {
    console.log("🚀 Starting database setup...");
    
    // 1. Core Schema
    await runSql("schema.sql");
    
    // 2. Seed Data
    await runSql("seed.sql");
    
    // 3. Modular Migrations
    await createCustomTasksTable();
    await addDailyGoalColumn();
    await runQuizMigration();
    await createPregeneratedQuizTable();
    
    // 4. Seed Quiz Data
    await insertManualQuizDataBatch1();
    await insertManualQuizDataBatch2();
    await insertManualQuizDataBatch3();
    
    console.log("🎉 Database setup completed successfully.");
  } catch (err) {
    console.error("❌ Database setup failed:", err);
    process.exit(1);
  } finally {
    await pool.end();
  }
};

setup();
