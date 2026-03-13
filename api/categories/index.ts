import { getDb } from "../../lib/mongodb.js";

export default async function handler(req, res) {
  const db = await getDb();
  const collection = db.collection("categories");

  if (req.method === "GET") {
    const data = await collection.find().toArray();
    return res.status(200).json(data);
  }

  if (req.method === "POST") {
    const result = await collection.insertOne(req.body);
    return res.status(201).json(result);
  }

  res.status(405).json({ message: "Method not allowed" });
}
