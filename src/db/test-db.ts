import postgres from 'postgres';

const sql = postgres(process.env.DATABASE_URL!, { ssl: 'require' });

sql`SELECT 1`.then(() => {
  console.log("✅ Connected to NeonDB!");
}).catch((err) => {
  console.error("❌ Connection failed:", err);
});
