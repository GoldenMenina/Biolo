import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  const cliente = await clientPromise;

  const db = cliente.db("anje");

  var resul = await db.collection("colecao").find({}).toArray();

  res.json(resul);
}
