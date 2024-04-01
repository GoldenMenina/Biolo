import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  const cliente = await clientPromise;

  const data = req.body;
  const { page, info } = data;
  const perPage = 9;
  const currentPage = page || 1;

  const db = cliente.db("anje");

  try {
    const pipeline = [];

    // Match stage for your filter criteria
    if (info) {
      pipeline.push({ $match: info });
    }

    // Sort by email in ascending order (modify if you want descending order)
    pipeline.push({ $sort: { email: 1 } });

    // Skip and limit based on pagination
    pipeline.push({ $skip: (currentPage - 1) * perPage });
    pipeline.push({ $limit: perPage });

    // Execute the aggregation pipeline
    const results = await db
      .collection("usuarios")
      .aggregate(pipeline)
      .toArray();

    // Get the total count without pagination
    const total = await db.collection("usuarios").countDocuments(info);



    // Calculate the total number of pages
    const totalPages = Math.ceil(total / perPage);

    res.json({ pages: totalPages, usuarios: results, inscritos: total });
  } catch (error) {
    console.error("Error in pagination:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
