import Link from 'next/link'

export default function About() {
    // throw new Error("This is an error");
    
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl">About Page</h1>
      <Link href="/">Go To Main Page</Link>
    </main>
  )
}
