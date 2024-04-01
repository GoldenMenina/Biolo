import clientPromise from "../../../lib/mongodb";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  var data = req.body;
  const client = await clientPromise;

  const db = client.db("anje");
  const existingcolecao = await db
    .collection("colecao")
    .findOne({ nome: data.nome });

  if (existingcolecao) {
    res.status(422).json({ message: "Coleção já existe" });
    return;
  }
  try {
    await db.collection("colecao").insertOne(data);
    res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
    res.status(422).json({ message: "Houve um erro!" });
  }
}

export default handler;
