import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
   <main>
    <h1>Landing Page</h1>

    <nav className="p-4">
      <ul className="p-4">
        <Link href = "/" className="border border-purple-400 rounded-md p-5 hover:bg-purple-300 hover:text-black">Create Account</Link>
        <Link href = "/" className="border border-purple-400 rounded-md p-5 hover:bg-purple-300 hover:text-black">Login</Link>
      </ul>
    </nav>


    <Link href="/users" className="flex" >Users</Link>


    </main>
  )
}
