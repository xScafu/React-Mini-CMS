import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("MONGODB_URI non definita");
}

const client = new MongoClient(uri);

export async function getDb() {
  await client.connect();
  return client.db;
}
