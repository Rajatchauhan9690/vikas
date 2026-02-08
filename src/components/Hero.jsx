import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Hero() {
  // ===== TIMER LOGIC =====
  const TOTAL_TIME = 5 * 60; // 5 minutes
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <>
      {/* ===== Existing Hero Section ===== */}
      <section className="bg-orange-500 text-white px-2 py-2 text-center rounded-b-xl mx-10">
        <h1 className="text-[16px] leading-tight font-bold md:text-4xl md:leading-snug max-w-3xl mx-auto">
          One Day Whole Body Healing Master Class
        </h1>

        <p className="mt-2 text-[14px] md:text-lg max-w-2xl mx-auto">
          Heal Deeply | Transform Gently
        </p>

        {/* <Link to="/checkout">
          <button className="mt-3 bg-black px-8 py-3 rounded-md text-base md:text-lg font-semibold">
            JOIN NOW
          </button>
        </Link> */}
      </section>

      {/* ===== Side-by-Side Image + Text Section ===== */}
      <section className="bg-white px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <p className="text-sm md:text-base text-gray-600 font-medium flex justify-center items-center gap-2">
              Reprogram Your Subconscious Mind <span>🧠</span>
            </p>

            <p className="mt-2 text-orange-500 font-semibold tracking-wide">
              IN 3 HOURS
            </p>

            <h2 className="mt-4 text-xl md:text-4xl font-extrabold text-black leading-snug">
              Rewire Your Brain, Erase Negative Thinking Patterns, Beat
              Procrastination To{" "}
              <span className="text-orange-500">
                Achieve Any Goal In Your Life
              </span>
            </h2>

            <p className="mt-4 text-gray-700 text-sm md:text-lg">
              Using the power of <strong>Science</strong> &{" "}
              <strong>Psychology</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ===== Video + Why Attend Section ===== */}
      <section className="bg-white px-4 py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/video-thumbnail.jpg"
              alt="Workshop Video"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-red-600 p-5 rounded-full cursor-pointer">
                ▶
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-6 md:p-8 rounded-2xl">
            <h3 className="text-xl md:text-2xl font-extrabold text-black mb-6">
              Why attend this workshop?
            </h3>

            <ul className="space-y-4">
              {[
                "Achieve success in all areas of your life.",
                "Find real root cause of your sufferings and end them",
                "Get rid of your limiting beliefs",
                "Start feeling more relaxed allow calm after attending",
                "Reprogram your mind to attract what you desire",
              ].map((text, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm"
                >
                  <span className="bg-orange-500 text-white w-7 h-7 flex items-center justify-center rounded-full font-bold">
                    ✓
                  </span>
                  <p className="text-gray-800 text-sm md:text-base font-medium">
                    {text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== Coach + Join Now Section ===== */}
      <section className="bg-white px-4 py-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          {/* Left */}
          <div className="space-y-6">
            <div className="bg-gray-100 rounded-2xl p-6 flex gap-4 items-center">
              <img
                src="/coach.jpg"
                alt="Dr. Meghana Dikshit"
                className="w-16 h-16 rounded-full border-4 border-orange-400 object-cover"
              />
              <div>
                <p className="text-sm text-gray-600">
                  I will be your coach for <strong>3 Hours</strong>
                </p>
                <h3 className="text-lg md:text-xl font-extrabold text-black">
                  Dr. Meghana Dikshit
                </h3>
                <p className="text-orange-500 font-semibold text-sm">
                  Brain & Performance Expert
                </p>
                <p className="text-sm text-gray-600">
                  Doctor, Life Coach, 28 Years Experience
                </p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-2xl p-6 flex items-center gap-4">
              <div className="text-yellow-400 text-lg">★★★★★</div>
              <p className="text-sm md:text-base text-gray-800 font-medium">
                India’s Highest Rated Mindset Program with{" "}
                <strong>4.95 Stars</strong> by{" "}
                <strong>2 Lakh+ Participants</strong>
              </p>
            </div>
          </div>

          <div className="text-center space-y-5">
            <Link to="/checkout">
              <button className="w-full bg-orange-500 hover:bg-orange-600 transition text-white py-4 rounded-full text-lg font-extrabold shadow-lg">
                JOIN NOW
              </button>
            </Link>
            <p className="text-sm md:text-base text-gray-700">
              Enrollment closes on <strong>08 FEB</strong>
            </p>

            <p className="text-sm md:text-base text-gray-700">
              WORKSHOP STARTS ON <strong>14th Feb 2026</strong> (9:30 AM to
              12:30 PM)
            </p>

            <h4 className="text-lg md:text-xl font-extrabold text-black mt-4">
              Register In Next{" "}
              <span className="text-orange-500">
                {minutes}:{seconds}
              </span>{" "}
              Min
            </h4>

            <div className="flex justify-center gap-6 mt-4">
              <div className="bg-gray-100 rounded-xl px-6 py-4 w-28">
                <p className="text-3xl font-extrabold text-black">{minutes}</p>
                <p className="text-xs text-gray-600 mt-1">MINUTES</p>
              </div>

              <div className="bg-gray-100 rounded-xl px-6 py-4 w-28">
                <p className="text-3xl font-extrabold text-black">{seconds}</p>
                <p className="text-xs text-gray-600 mt-1">SECONDS</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
