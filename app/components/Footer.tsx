import { Facebook, Twitter, Github, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 mt-20">
      
      <div className="h-1 w-full bg-gradient-to-r from-blue-600 to-purple-600"></div>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

        <div>
          <h3 className="text-2xl font-bold text-white">Blogs4U</h3>
          <p className="text-gray-400 mt-2">
           Our space to explore technology in a simple yet meaningful way.
We share concepts, guides, and real-world examples
to make tech easier to understand and apply.
Learn something new every day.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Follow Us</h4>
          <div className="flex items-center justify-center md:justify-start gap-4 mt-2">
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition">
              <Facebook className="w-5 h-5 text-gray-300" />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition">
              <Twitter className="w-5 h-5 text-gray-300" />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition">
              <Github className="w-5 h-5 text-gray-300" />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition">
              <Instagram className="w-5 h-5 text-gray-300" />
            </a>
          </div>
        </div>

      </div>
      <div className="border-t border-gray-800 py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Blogs4U — All rights reserved.
      </div>

    </footer>
  );
}
