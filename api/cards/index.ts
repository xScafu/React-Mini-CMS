import { getDb } from "../../lib/mongodb.js";

export default async function handler(req, res) {
  const db = await getDb();
  const collection = db.collection("cards");

  if (req.method === "GET") {
    const cards = await collection.find().toArray();
    return res.status(200).json(cards);
  }
}
