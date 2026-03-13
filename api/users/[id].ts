import { getDb } from "../../lib/mongodb.js";
import { ObjectId } from "mongodb";

import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { id } = req.query;

  const db = await getDb();
  const collection = db.collection("users");

  if (req.method === "GET") {
    const user = await collection.findOne({ _id: new ObjectId(id as string) });
    return res.status(200).json(user);
  }
}
