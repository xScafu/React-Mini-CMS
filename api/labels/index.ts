import { getDb } from "../../lib/mongodb.js";

import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const db = await getDb();
  const collection = db.collection("labels");

  if (req.method === "GET") {
    const labels = await collection.find().toArray();
    return res.status(200).json(labels);
  }
}
