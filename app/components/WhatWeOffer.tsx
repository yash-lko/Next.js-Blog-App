import { BookOpen, TrendingUp, Wrench } from "lucide-react";

export default function WhatWeOffer() {
  const items = [
    {
      title: "Tech Guides",
      desc: "Easy-to-follow tutorials to help you understand tech effortlessly.",
      icon: <BookOpen className="w-8 h-8 text-white" />,
    },
    {
      title: "Latest Trends",
      desc: "Catch up with the newest innovations and tech world updates.",
      icon: <TrendingUp className="w-8 h-8 text-white" />,
    },
    {
      title: "Tech Solutions",
      desc: "Quick fixes, troubleshooting help, and digital guidance.",
      icon: <Wrench className="w-8 h-8 text-white" />,
    },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto text-center">
        
        <h2 className="text-4xl md:text-5xl font-extrabold mb-14 text-gray-900">
          What We Offer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {items.map((item, i) => (
            <div
              key={i}
              className="p-10 rounded-2xl bg-white shadow-md 
                         hover:shadow-xl hover:-translate-y-1
                         transition-all duration-300 border border-gray-100"
            >
              {/* Icon wrapper */}
              <div
                className="w-16 h-16 mx-auto mb-6 rounded-full 
                           bg-gradient-to-r from-blue-600 to-purple-600
                           flex items-center justify-center shadow-lg"
              >
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                {item.title}
              </h3>

              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
