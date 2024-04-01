import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "bson";

async function handler(req, res) {
  const { id } = req.body;

  var data = req.body;
  delete data.id;
  delete data.avatar;

  const client = await clientPromise;
  const db = client.db("anje");

  try {
    // Update the post's comments array
    const su = await db.collection("posts").updateOne(
      { _id: new ObjectId(id) },
      {
        $push: {
          comments: data,
        },
      }
    );
    console.log(su);
    res.status(200).json({ message: "Comment added successfully" });
  } catch (error) {
    console.log(error);
    res.status(422).json({ message: "Houve um erro! " + error });
  }
}

export default handler;
