// src/db/index.ts
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres'; // This is required

const queryClient = postgres(process.env.DATABASE_URL!); // initialize the SQL client
export const db = drizzle(queryClient); // pass client to drizzle
