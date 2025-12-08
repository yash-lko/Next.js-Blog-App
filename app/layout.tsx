import "./globals.css";
import MobileMenu from "./components/MobileMenu";
import Link from "next/link";
import Logo from "./components/Logo";

export const metadata = {
  title: "My Tech Blog",
  description: "Your daily source for tech insights and coding tutorials",
  icons: {
    icon: "images/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <header className="w-full bg-white shadow-md relative top-0 left-0 z-50">
          <div className="max-w-6xl mx-auto flex items-center justify-between p-7">

            {/* Logo */}
            <a href="/" className="text-2xl font-bold text-black-600">
          <Logo/>
            </a>

            {/* Desktop Menu */}
            <nav className="hidden md:flex gap-8 text-lg">
              <Link href="/" className="hover:text-pink-600">Home</Link>
              <Link href="/about" className="hover:text-pink-600">About</Link>
              <Link href="/blog" className="hover:text-pink-600">Blog</Link>
              <Link href="/services" className="hover:text-pink-600">Services</Link>
              <Link href="/contact" className="hover:text-pink-600">Contact</Link>
            </nav>

            {/* Mobile Menu */}
            <MobileMenu />
          </div>
        </header>

        {children}

        <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
            {/* Footer content same as before */}
          </div>
          <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 py-4">
            © {new Date().getFullYear()} YashTechno. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
