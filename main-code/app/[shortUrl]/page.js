import { redirect } from "next/navigation"

export default async function Page({ params }) {
  const { shortUrl } = await params
  return <>
  <div>My Post: {shortUrl}</div>
  <button>Go Back</button>
  </> 
}