import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"


export default async function Page({ params }) {
    const shorturl = (await params)

    // const client = await clientPromise;
    // const db = client.db("bitlinks")
    // const collection = db.collection("url")

    // const doc = await collection.findOne({shorturl: shorturl})
    // console.log(doc)
    // if(doc){
    //      redirect(doc.url)
    // }
    // else{
    //     redirect(`${process.env.NEXT_PUBLIC_BASE_URL}`)
    // }

    return <>
        <div>
            My Post: {shorturl}
            <button onClick={console.log(`${shorturl}`)} className="bg-blue-500 text-white px-4 py-2 rounded">
                {shorturl}
            </button>
        </div>
    </>
}