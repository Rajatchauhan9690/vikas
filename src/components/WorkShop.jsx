export default function WorkShop() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Top Heading */}
        <h1 className="text-center text-4xl md:text-5xl font-semibold mb-14">
          Everything you need to achieve{" "}
          <span className="text-orange-500">success</span>…{" "}
          <span className="text-orange-500">is inside this workshop!</span>
        </h1>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start mt-20">
          {/* Left Card */}
          <div className="bg-gray-100 rounded-2xl p-10 shadow-sm">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Ultimate Success Builder Workshop
            </h2>

            <p className="text-gray-600 text-lg mb-6">
              You will never need another course after this workshop!
            </p>

            <div className="flex items-center gap-3 mb-8">
              <span className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-orange-500 text-orange-500">
                ✓
              </span>
              <p className="text-gray-700 text-lg">
                <span className="font-semibold">6000+</span> people have already
                registered.
              </p>
            </div>

            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-xl py-4 text-xl font-semibold transition">
              SIGN UP NOW FOR WORKSHOP
              <div className="text-sm font-normal mt-1">Limited Seats Left</div>
            </button>
          </div>

          {/* Right Content */}
          <div>
            <h3 className="text-3xl font-semibold text-gray-800 mb-8">
              What you will learn:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Success Blockers",
                "Shifting Energy Patterns",
                "Reticular Activation System",
                "Rewire Your Subconscious Mind",
                "Upgrade your Brain",
                "Wealth Creation",
                "#1 Root Cause For Every Problem",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="w-7 h-7 flex items-center justify-center rounded-full bg-orange-500 text-white text-sm font-bold">
                    ✓
                  </span>
                  <p className="text-gray-700 text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
