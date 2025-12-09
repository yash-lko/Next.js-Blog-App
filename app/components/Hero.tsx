"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Hero = () => {
    const [current, setCurrent] = useState(0);
    const [fade, setFade] = useState(true);

    const images = [
        "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?w=1200",
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1640&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=1200",
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);

            setTimeout(() => {
                setCurrent((prev) => (prev + 1) % images.length);
                setFade(true);
            }, 300);
        }, 3500);

        return () => clearInterval(interval);
    }, []);
    console.log(images[current], "Current Image")
    return (
        <section className="px-6 py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

                <div className="flex-1">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                        Learn Tech in a Simple & Smart Way 🚀
                    </h1>
                    <p className="text-lg opacity-90 mb-6">
                        Easy tutorials, guides, tips & the latest tech updates — all in one place.
                    </p>
                    <Link
                        href="/blog"
                        className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold shadow hover:shadow-lg transition"
                    >
                        Explore Blogs →
                    </Link>
                </div>

                <div className="flex-1">
                    <img
                        src={images[current]}
                        alt="Tech"
                        className={`rounded-2xl shadow-xl w-full h-[380] object-cover transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"
                            }`}
                    />
                </div>

            </div>
        </section>
    );
};

export default Hero;
