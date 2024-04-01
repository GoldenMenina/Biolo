import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "bson";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  const data = req.body;
  const { id } = data;

  const cliente = await clientPromise;
  const db = cliente.db("anje");
  const resul = await db
    .collection("posts")
    .aggregate([
      // Match the post with the specified ID
      {
        $match: { _id: ObjectId(id) },
      },
      // Unwind the comments array to separate each comment into its own document
      {
        $unwind: "$comments",
      },
      // Lookup the user information based on the email in each comment
      {
        $lookup: {
          from: "usuarios",
          localField: "comments.email",
          foreignField: "email",
          as: "commentUser",
        },
      },
      // Project to shape the final output
      {
        $project: {
          _id: 0, // Exclude the _id field
          commentario: "$comments.commentario", // Rename the comment field
          timestamp: "$comments.timestamp", // Rename the timestamp field
          avatar: "$commentUser.avatar", // Get the avatar field from the user document
          nome: "$commentUser.nome",
          classe: "$commentUser.classe",
        },
      },
    ])
    .toArray();
  res.json(resul);
}
