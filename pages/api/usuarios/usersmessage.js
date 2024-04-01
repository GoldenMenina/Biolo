import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }
  const cliente = await clientPromise;
  const data = req.body;
  const { page, info } = data;

  const db = cliente.db("anje");

try{
    const users = await db.collection("usuarios").find(info).toArray();
    res.json({users:users });
  } catch (error) {
    console.error("Error in pagination:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
