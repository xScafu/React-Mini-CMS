import { getDb } from "../../lib/mongodb.js";
import { ObjectId } from "mongodb";
export default async function handler(req, res) {
    const { id } = req.query;
    const db = await getDb();
    const collection = db.collection("products");
    if (req.method === "GET") {
        const product = await collection.findOne({
            _id: new ObjectId(id),
        });
        return res.status(200).json(product);
    }
    if (req.method === "PUT") {
        const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: req.body });
        return res.status(200).json(result);
    }
    if (req.method === "DELETE") {
        await collection.deleteOne({ _id: new ObjectId(id) });
        return res.status(200).json({ success: true });
    }
    res.status(405).json({ message: "Method not allowed" });
}
