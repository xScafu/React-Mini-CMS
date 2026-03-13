import { getDb } from "../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const { id } = req.query;

  const db = await getDb();
  const collection = db.collection("categories");

  if (req.method === "GET") {
    const item = await collection.findOne({ _id: new ObjectId(id) });
    return res.status(200).json(item);
  }

  if (req.method === "PUT") {
    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: req.body }
    );

    return res.status(200).json(result);
  }

  if (req.method === "DELETE") {
    await collection.deleteOne({ _id: new ObjectId(id) });
    return res.status(200).json({ success: true });
  }
}
