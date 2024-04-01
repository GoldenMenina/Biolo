import { hashPassword } from "../../../lib/auth";
import clientPromise from "../../../lib/mongodb";
import makeid from "../../../lib/random";
import { sendEmailAndAppend } from "../email/em";
import { ObjectId } from "bson";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  const client = await clientPromise;

  const db = client.db("anje");
  const now = new Date();


  const existingUser = await db
  .collection("usuarios")
  .findOne({ email: req.body.email });

if (existingUser) {
  res.status(200).json({ message: "Email já existe" });
  console.log(existingUser)
  return;
}
try {
  await db.collection("usuarios").insertOne(req.body);
  res.status(200).json({ message: "success" });
} catch (error) {
  console.log(error);
  res.status(422).json({ message: "Houve um erro!" });
}
  

}

export default handler;
