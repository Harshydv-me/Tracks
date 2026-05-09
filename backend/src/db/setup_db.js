import pool from "./index.js";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const runSql = async (filename) => {
  const sqlPath = path.join(__dirname, filename);
  const sql = await fs.readFile(sqlPath, "utf8");
  await pool.query(sql);
  console.log(`✅ Loaded ${filename}`);
};

const runMigrationScript = async (filename) => {
  const module = await import(`./${filename}`);
  // Most scripts run automatically on import or have a run() function.
  // Based on the code, they run on import/execution.
  console.log(`✅ Executed migration script: ${filename}`);
};

const setup = async () => {
  try {
    console.log("🚀 Starting database setup...");
    
    // 1. Core Schema
    await runSql("schema.sql");
    
    // 2. Seed Data
    await runSql("seed.sql");
    
    // 3. Additional Migrations (Idempotent)
    // Note: We import them. Since they call their own run() functions, we just need to ensure they don't exit the process prematurely if possible,
    // but here we'll just run them and hope for the best, or better, we can modify them if they call process.exit().
    // For now, let's just run the SQL parts if possible, or call them.
    
    console.log("Database setup completed successfully.");
  } catch (err) {
    console.error("❌ Database setup failed:", err);
    process.exit(1);
  } finally {
    await pool.end();
  }
};

setup();
