// import Link from 'next/link'

// const Navbar = () => {
//     const links = [
//         { label: 'Dashboard', href: '/' },
//         { label: 'Issues', href: '/issues' },
//     ]

//   return (
//     <div>
//       <nav className='flex border-b p-4 justify-between items-center space-x-5'>
//         {/* Logo Section  */}
//         <Link href="/">Logo</Link>
//         {/*  Link Sections  */}
//         <ul className='flex space-x-5 '>
//         {/* <li className='text-zinc-600 hover:text-zinc-900 transition-colors '>
//             <Link href="/">Dashboard</Link>
//         </li>
//         <li>
//             <Link href="/issues">Issues</Link>
//         </li> */}

//         {links.map((link) => (
//             <li key={link.href} className='text-zinc-600 hover:text-zinc-900 transition-colors '>
//                 <Link href={link.href}>{link.label}</Link>
//             </li>
//         ))}
//         </ul>
//       </nav>
//     </div>
//   )
// }

// export default Navbar



import Link from 'next/link'
import { IoBug } from "react-icons/io5";
import { usePathname } from 'next/navigation';
import classnames from 'classnames';




const Navbar = () => {
  const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Issues', href: '/issues' },
  ]

  const currentPath  = usePathname();
  console.log('Current Path:', currentPath);

  return (
    <nav className="border-b bg-white/70 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link 
          href="/" 
          className="text-xl font-semibold tracking-tight text-zinc-900"
        >
          <IoBug/>
        </Link>

        {/* Links */}
        <ul className="flex items-center space-x-8 text-sm font-medium">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={classnames({
                    'text-zinc-900': currentPath === link.href,
                    'text-zinc-600 hover:text-zinc-900 transition-colors': currentPath !== link.href,
                    ' hover:text-zinc-900 transition-colors': true,
                })}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar