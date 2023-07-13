import Link from "next/link"

export default function Navbar() {
  return (
    <nav >
        <ul className="flex justify-between text-lg capitalize h-[60px] bg-sky-600 text-white items-center">
           <Link href='/'>
           <li>home</li>
           </Link> 

           <Link href='/about'>
           <li>about</li>
           </Link>

           <Link href='/course'>
           <li>course</li>
           </Link> 

           <Link href='/staffs'>
           <li>staffs</li>
           </Link> 

           
        </ul>
    </nav>

  )
}
