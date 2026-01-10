import clientPromise from "@/lib/mongodb"

export async function GET() {
  const client = await clientPromise
  const db = client.db("bitlines")
  const collection = db.collection("urls")

  return Response.json({ message: 'Hello World' })
}