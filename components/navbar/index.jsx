import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

function Header() {
  const links = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: "About",
      path: '/about'
    },
    {
      name: 'Posts',
      path: '/posts'
    },
  ]

  const router = useRouter()
  const path = router.asPath
  
  return (
    <header className='bg-[#86e730] w-full py-[25px]'>
      <div className='max-w-[1200px] mx-auto'>
          <div className='flex items-center justify-center gap-[60px]'>
              {
                links.map((link, i) => (
                  <Link href={link.path} key={i} className={`${path == link.path && "bg-[#1d2ba9] text-[#EEEEEE]"} font-bold text-[20px] text-[#EEEEEE] px-[10px] py-[2px] rounded-lg duration-200`}>
                    <button>{link.name}</button>
                  </Link>
                ))
              }
          </div>
      </div>
    </header>
  )
}

export default Header