import { redirect } from "next/navigation"

export default async function Page({ params }) {
  const { url } = await params.url
  return <div>My Post: {url}</div>
}