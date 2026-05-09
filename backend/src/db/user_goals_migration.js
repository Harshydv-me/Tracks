import { fileURLToPath } from "url";
import pool from "./index.js";

export const addDailyGoalColumn = async () => {
  const query = `
    ALTER TABLE users
    ADD COLUMN IF NOT EXISTS daily_goal INTEGER DEFAULT 3;
  `;

  try {
    await pool.query(query);
    console.log("✅ Daily goal column added to users table");
  } catch (error) {
    console.error("❌ Error adding daily goal column:", error);
    throw error;
  }
};

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  addDailyGoalColumn()
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
}