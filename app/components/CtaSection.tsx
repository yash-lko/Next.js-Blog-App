import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div
        className="max-w-4xl mx-auto text-center p-12 rounded-3xl shadow-xl
                   bg-white relative overflow-hidden"
      >
        {/* Gradient Top Border */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-purple-600"></div>

        <h2 className="text-4xl font-bold mb-4 text-gray-900">
          Want to Learn Something New?
        </h2>

        <p className="text-lg text-gray-600 mb-8">
          Explore our in-depth tutorials, app guides, and the latest tech tips.
        </p>

        <Link
          href="/blog"
          className="inline-block px-8 py-3 rounded-xl font-semibold
                     bg-gradient-to-r from-blue-600 to-purple-600 text-white
                     shadow-md hover:shadow-xl hover:scale-105 transition-all"
        >
          Start Reading →
        </Link>
      </div>
    </section>
  );
}
