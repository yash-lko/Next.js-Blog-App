import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-6 py-16">

      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 text-lg">
          We simplify technology so you can learn, explore, and grow with confidence.
        </p>
      </div>

      {/* 3-Grid Section */}
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
        
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md hover:-translate-y-1 transition">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed">
            A team dedicated to creating simple, high-quality tech guides and tutorials
            for everyone—from beginners to pros.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md hover:-translate-y-1 transition">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">What We Do</h2>
          <p className="text-gray-600 leading-relaxed">
            We publish easy tutorials, app reviews, trending tech topics, and
            practical how-to guides for daily use.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md hover:-translate-y-1 transition">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">Why We Exist</h2>
          <p className="text-gray-600 leading-relaxed">
            Our goal is to provide reliable, helpful content that makes technology
            simple and enjoyable for everyone.
          </p>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-10 space-y-10 border border-gray-200">

        {/* Mission */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Our Mission
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mb-4 rounded"></div>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to deliver clear, reliable, and useful content that helps
            you understand tech, solve your problems, and stay updated with what matters.
          </p>
        </section>

        {/* More Grid Inside Main Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">What We Offer</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-blue-600 mb-6 rounded"></div>
          
          <div className="grid gap-6 sm:grid-cols-2">

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">✔ Tutorials</h3>
              <p className="text-gray-600 leading-relaxed">
                Step-by-step guides to solve real problems.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">✔ Reviews</h3>
              <p className="text-gray-600 leading-relaxed">
                Honest reviews of apps, tools, gadgets, and more.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">✔ Tech Tips</h3>
              <p className="text-gray-600 leading-relaxed">
                Small tips that save time and improve efficiency.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">✔ Latest Trends</h3>
              <p className="text-gray-600 leading-relaxed">
                Stay updated with new technologies & trends.
              </p>
            </div>

          </div>
        </section>

        {/* Vision */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Vision</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mb-4 rounded"></div>
          <p className="text-gray-600 leading-relaxed">
            To become a trusted destination where people come to learn, explore,
            and truly understand the digital world with ease.
          </p>
        </section>

        {/* Closing */}
        <section>
          <p className="text-gray-700 leading-relaxed text-lg">
            Thank you for being part of our journey. We’re excited to grow and share 
            valuable tech knowledge with you!
          </p>
        </section>

      </div>
    </div>
  );
};

export default Page;
