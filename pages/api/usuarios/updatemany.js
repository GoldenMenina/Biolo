import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  try {
    const cliente = await clientPromise;
    const db = cliente.db("anje");

    // Add "avatar" field with empty string to all documents in "user" collection
    await db.collection("usuarios").updateMany({}, { $set: { avatar: "" } });

    res.status(200).json({
      message: "Avatar field added to all documents in user collection.",
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
