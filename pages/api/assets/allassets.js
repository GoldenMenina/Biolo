import clientPromise from "../../../lib/mongodb";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  var data = req.body;
  const client = await clientPromise;

  const db = client.db("anje");

  try {
    const response = await db.collection("assets").find(data).toArray();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(422).json({ message: "Houve um erro!" });
  }
}

export default handler;
