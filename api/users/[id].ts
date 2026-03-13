import { getDb } from "../../lib/mongodb.ts";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const { id } = req.query;

  const db = await getDb();
  const collection = db.collection("users");

  if (req.method === "GET") {
    const user = await collection.findOne({ _id: new ObjectId(id) });
    return res.status(200).json(user);
  }
}
