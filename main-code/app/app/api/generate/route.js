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
    const db = client.db("bitlines")
    const collection = db.collection("urls")
    const doc = await collection.findOne({shorturl: body.shorturl})
    if(doc){
        return Response.json({success: false, error: true,  message: 'URL already exists!' })
    }

    await collection.insertOne({
      url: body.url,
      shortUrl: body.shortUrl,
    })

    // deploy again 
    return Response.json({ success: true })
  } catch (error) {
    console.error(error)
    return Response.json({ success: false }, { status: 500 })
  }
}

export async function GET() {
  return Response.json({ message: "POST method Successfully" })
}
