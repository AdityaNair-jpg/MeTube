import 'dotenv/config';
import postgres from 'postgres';

const sql = postgres(process.env.DATABASE_URL!, {
  ssl: 'require',
});

async function testConnection() {
  try {
    const result = await sql`SELECT NOW()`;
    console.log("✅ Connected to Neon:", result);
  } catch (err) {
    console.error("❌ Failed to connect:", err);
  }
}

testConnection();
