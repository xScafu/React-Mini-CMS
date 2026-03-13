import { getDb } from "../../lib/mongodb.js";

export default async function handler(req, res) {
  const db = await getDb();
  const collection = db.collection("budget");

  if (req.method === "GET") {
    const balance = await collection.find().toArray();
    return res.status(200).json(balance);
  }
}
