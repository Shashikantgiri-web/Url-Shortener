import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"

export default async function ShortUrlPage({ params }) {
  const { shorturl } = await params

  const client = await clientPromise
  const db = client.db("bitlinks")
  const collection = db.collection("url")

  const doc = await collection.findOne({ shortUrl: shorturl })

  if (doc) {
    redirect(doc.url)
  }

  redirect("/")
}
