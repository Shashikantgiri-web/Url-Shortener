import clientPromise from "@/lib/mongodb"

export async function POST(request) {
  // const body = await request.json()
  // const client = await clientPromise
  // const db = client.db("bitlines")
  // const collection = db.collection("url")

  // collection.insertOne({
  //    url: body.url,
  //    shortUrl: body.shortUrl,
  //   })

    //did it update?
  return Response.json({ success: true, error:false, message: "URL generated successfully" })
}