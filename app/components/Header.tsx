import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Header = () => {
    return (
        <div>
            <header className="w-full bg-white shadow-md relative top-0 left-0 z-50">
                <div className="max-w-6xl mx-auto flex items-center justify-between p-7">
                    <a href="/" className="text-2xl font-bold text-black-600">
                        <Image
                            src="/images/logo-horizontal.png"
                            width={210}
                            height={80}
                            alt="Logo"

                        />
                    </a>

                    <nav className="hidden md:flex gap-8 text-lg">
                        <Link href="/" className="hover:text-[#8433fb]">Home</Link>
                        <Link href="/about" className="hover:text-[#8433fb]">About</Link>
                        <Link href="/blog" className="hover:text-[#8433fb]">Blog</Link>
                        <Link href="/services" className="hover:text-[#8433fb]">Services</Link>
                        <Link href="/contact" className="hover:text-[#8433fb]">Contact</Link>
                    </nav>

                </div>
            </header>
        </div>
    )
}

export default Header