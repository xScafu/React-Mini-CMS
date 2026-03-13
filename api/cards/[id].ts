import { getDb } from "../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const { id } = req.query;

  const db = await getDb();
  const collection = db.collection("cards");

  if (req.method === "GET") {
    const card = await collection.findOne({ _id: new ObjectId(id) });
    return res.status(200).json(card);
  }
}
