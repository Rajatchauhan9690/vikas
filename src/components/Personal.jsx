import React from "react";

export default function Personal() {
  return (
    <section className="w-full bg-white py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            This could be <span className="text-orange-500">your life..</span>
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-4 rounded-full" />
        </div>
        
        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/Images/yoga.png"
              alt="People sitting on mountain"
              className="w-full h-[300px] object-cover"
            />
          </div>

          {/* Right Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/Images/happy family.png"
              alt="Couple at sunset"
              className="w-full h-[300px] object-cover"
            />
          </div>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Left Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/Images/businessmen.png"
              alt="People sitting on mountain"
              className="w-full h-[300px] object-cover"
            />
          </div>

          {/* Right Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/Images/couple.png"
              alt="Couple at sunset"
              className="w-full h-[300px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
