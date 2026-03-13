import { getDb } from "../../lib/mongodb";
import { ObjectId } from "mongodb";

import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { id } = req.query;

  const db = await getDb();
  const collection = db.collection("categories");

  if (req.method === "GET") {
    const item = await collection.findOne({ _id: new ObjectId(id as string) });
    return res.status(200).json(item);
  }

  if (req.method === "PUT") {
    const result = await collection.updateOne(
      { _id: new ObjectId(id as string) },
      { $set: req.body }
    );

    return res.status(200).json(result);
  }

  if (req.method === "DELETE") {
    await collection.deleteOne({ _id: new ObjectId(id as string) });
    return res.status(200).json({ success: true });
  }
}
