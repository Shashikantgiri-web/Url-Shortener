import clientPromise from "@/lib/mongodb"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function POST(request) {
  try {
    const body = await request.json()

    const client = await clientPromise
    if (!client) {
      return Response.json({ success: false, error: "Database not connected" }, { status: 500 })
    }
    const db = client.db("bitlinks")
    const collection = db.collection("url")

    // Check if the short url exists
    const doc = await collection.findOne({ shortUrl: body.shortUrl })
    if (doc) {
      return Response.json({ success: false, error: true, message: 'URL already exists!' })
    }

    const result = await collection.insertOne({
      url: body.url,
      shortUrl: body.shortUrl
    })

    return Response.json({ success: true, error: false, message: 'URL Generated Successfully' })
  } catch (error) {
    console.error(error)
    return Response.json({ success: false, message: 'Internal Server Error' }, { status: 500 })
  }
}

export async function GET() {
  return Response.json({ message: "POST method Successfully" })
}
