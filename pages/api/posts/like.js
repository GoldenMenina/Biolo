import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "bson";

async function handler(req, res) {
  const { email, id } = req.body;

  const client = await clientPromise;
  const db = client.db("anje");

  try {
    // Check if the email is already in the likes array
    const post = await db
      .collection("posts")
      .findOne({ _id: new ObjectId(id) });
    if (post.likes && post.likes.includes(email)) {
      return res
        .status(200)
        .json({ message: "Email already in the likes array" });
    }

    // Update the post's likes array
    const result = await db.collection("posts").updateOne(
      { _id: new ObjectId(id) },
      {
        $addToSet: {
          likes: email,
        },
      }
    );

    console.log(result);
    res
      .status(200)
      .json({ message: "Email added to likes array successfully" });
  } catch (error) {
    console.log(error);
    res.status(422).json({ message: "Error: " + error });
  }
}

export default handler;
