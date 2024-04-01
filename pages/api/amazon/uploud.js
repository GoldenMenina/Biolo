import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const formData = await req.formData();
      const file = formData.get("file");

      const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `${Date.now()}-${file.name}`, // Customize file path as needed
        Body: await file.arrayBuffer(),
        ContentType: file.type,
      };

      const command = new PutObjectCommand(params);
      await s3Client.send(command);

      const publicUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/${params.Key}`;
      res.status(200).json({ publicUrl });
    } else {
      res.setHeader("Allow", "POST");
      res.status(405).end("Method Not Allowed");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to upload file" });
  }
}
