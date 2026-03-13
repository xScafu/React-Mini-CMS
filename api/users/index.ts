import { getDb } from "../../lib/mongodb.js";

export default async function handler(req, res) {
  const db = await getDb();
  const collection = db.collection("users");

  if (req.method === "GET") {
    const users = await collection.find().toArray();
    return res.status(200).json(users);
  }

  if (req.method === "POST") {
    const result = await collection.insertOne(req.body);
    return res.status(201).json(result);
  }
}
