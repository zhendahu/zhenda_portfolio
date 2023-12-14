import Link from 'next/link'
import React from 'react'
import NavLink from './NavLink'

const navLinks = [
    {
        title: "01. About",
        path:"#about",
    },
    {
        title:"02. Experience",
        path:"#experience",
    },
    {
        title:"03. Projects",
        path:"#projects",
    },
    {
        title:"04. Contact",
        path:"#contact",
    }
]

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#152342] bg-opacity-90">
        <div className="flex flex-wrap items-center justify-between mx-auto p-3">
            <Link href={"/"} className="text-xl md:text-5xl text-white font-semibold">
                LOGO
            </Link> 
            <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                    {
                        navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))
                    }
                </ul>    
            </div>   
        </div>
    </nav>
  )
}
