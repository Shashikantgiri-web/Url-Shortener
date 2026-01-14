import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"


export default async function Page({ params }) {
    const shorturl = params.shorturl
    const client = await clientPromise
    if (!client) {
      return Response.json({ success: false, error: "Database not connected" }, { status: 500 })
    }
    const db = client.db("bitlinks")
    const collection = db.collection("url")

    // Check if the short url exists
    const doc = await collection.findOne({ shortUrl: shorturl })
    if (doc) {
      redirect(doc.url)
    }
    else {
        redirect(`${process.env.NEXT_PUBLIC_BASE_URL}`)
    }

    
    return <div>my post : {shorturl}</div>
}