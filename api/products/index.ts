import { getDb } from "../../lib/mongodb";

export default async function handler(req, res) {
  const db = await getDb();
  const collection = db.collection("products");

  if (req.method === "GET") {
    const products = await collection.find().toArray();
    return res.status(200).json(products);
  }

  if (req.method === "POST") {
    const product = req.body;
    const result = await collection.insertOne(product);
    return res.status(201).json(result);
  }

  res.status(405).json({ message: "Method not allowed" });
}
