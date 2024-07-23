import Link from 'next/link';

export default function Header() {
  return(         
  <div>
    <div className ="flex items-center text-xl bg-gray-700 text-white max-w-lg mx-auto mt-6">
      <Link href ='/'>
        <h1 className=""> A.Minaev's Very First, Independent Front-End Application</h1>
      </Link>
    </div>
    <div className="flex space-x-64 max-w-sm mx-auto">
      <Link href='/about' className="hover:bg-yellow-400"> About </Link>
      <Link href='/visualization' className="hover:bg-yellow-400"> Visualization </Link>
    </div>
  </div>)
}