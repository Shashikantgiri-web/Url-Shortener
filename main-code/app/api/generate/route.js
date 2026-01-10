import clientPromise from "@/lib/mongodb"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function POST(request) {
  try {
    const body = await request.json()

    const client = await clientPromise
    const db = client.db("bitlines")

    await db.collection("urls").insertOne({
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
  return Response.json({ message: "Use POST method" })
}
