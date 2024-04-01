import clientPromise from "../../../lib/mongodb";
import { hashPassword } from "../../../lib/auth";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  var data = req.body;
  const client = await clientPromise;

 
  const newpassword = await hashPassword(data.password);
  data.password = newpassword
  const db = client.db("anje");
  const existingUser = await db
    .collection("usuarios")
    .findOne({ email: data.email });

  if (existingUser) {
    res.status(422).json({ message: "Email já existe" });
    return;
  }
  try {
    await db.collection("usuarios").insertOne(data);
    res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
    res.status(422).json({ message: "Houve um erro!" });
  }
}

export default handler;
