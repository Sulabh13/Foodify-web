import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FiMapPin,
  FiMail,
  FiPhoneCall,
  FiChevronDown,
} from "react-icons/fi";

/* ============================= */
/* SCROLL ANIMATION HOOK */
/* ============================= */

const useScrollAnimation = () => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return [ref, visible];
};

const ContactUs = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Select Subject");

  const subjects = [
    "General Inquiry",
    "Order Issue",
    "Feedback",
    "Complaint",
  ];

  /* Section Animation Refs */
  const [heroRef, heroVisible] = useScrollAnimation();
  const [leftRef, leftVisible] = useScrollAnimation();
  const [rightRef, rightVisible] = useScrollAnimation();

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        ref={heroRef}
        className={`relative w-full h-[300px] md:h-[450px] flex items-center justify-center transition-all duration-1000 ${
          heroVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <img
          src="https://i.pinimg.com/736x/46/23/3f/46233f969bbfe40b5a8f5fe321e63f37.jpg"
          alt="Pizza Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative text-center text-white z-10 px-4">
          <h1 className="text-3xl md:text-6xl font-extrabold tracking-wide">
            CONTACT US
          </h1>

          <div className="mt-4 text-sm md:text-lg flex items-center justify-center gap-3">
            <Link to="/" className="text-gray-300 hover:text-white transition">
              Home
            </Link>
            <span>{">"}</span>
            <span className="text-orange-400 font-semibold">
              Contact Us
            </span>
          </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <div className="bg-gray-100 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">

            {/* ================= LEFT SIDE ================= */}
            <div
              ref={leftRef}
              className={`transition-all duration-1000 delay-200 ${
                leftVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <p className="text-red-500 font-semibold mb-2">
                CONTACT US
              </p>

              <h2 className="text-2xl md:text-4xl font-extrabold mb-8">
                READY TO CONTACT US
              </h2>

              <div className="space-y-8">

                {/* Location */}
                <div className="flex items-start bg-[#e9e4dc] p-6 hover:scale-105 transition duration-300">
                  <div className="bg-white p-5 text-red-500 text-2xl">
                    <FiMapPin />
                  </div>
                  <div className="ml-6">
                    <h4 className="text-gray-600 font-medium">
                      Locations
                    </h4>
                    <p className="font-bold">
                      38 SARDINELLA, 2ND EDEN WALK,<br />
                      ORCHARD VIEW, LONDON, UK
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start bg-[#e9e4dc] p-6 hover:scale-105 transition duration-300">
                  <div className="bg-white p-5 text-red-500 text-2xl">
                    <FiMail />
                  </div>
                  <div className="ml-6">
                    <h4 className="text-gray-600 font-medium">
                      Email Address
                    </h4>
                    <p className="font-bold">
                      SUPPORTINFO@GMAIL.COM
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start bg-[#e9e4dc] p-6 hover:scale-105 transition duration-300">
                  <div className="bg-white p-5 text-red-500 text-2xl">
                    <FiPhoneCall />
                  </div>
                  <div className="ml-6">
                    <h4 className="text-gray-600 font-medium">
                      Phone No
                    </h4>
                    <p className="font-bold">
                      +880 (123) 456 88
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* ================= RIGHT SIDE ================= */}
            <div
              ref={rightRef}
              className={`bg-[#e9e4dc] p-6 md:p-10 transition-all duration-1000 delay-300 ${
                rightVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <h3 className="text-xl md:text-3xl font-bold mb-3">
                SEND US MESSAGE
              </h3>

              <form className="space-y-5">

                <div className="grid md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="p-4 bg-white w-full outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="p-4 bg-white w-full outline-none"
                  />
                </div>

                {/* DROPDOWN */}
                <div className="relative">
                  <div
                    onClick={() => setOpen(!open)}
                    className="p-4 bg-white w-full cursor-pointer flex justify-between items-center"
                  >
                    {selected}
                    <FiChevronDown
                      className={`transition-transform duration-300 ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  <div
                    className={`absolute left-0 right-0 bg-white shadow-lg overflow-hidden transition-all duration-300 ${
                      open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    {subjects.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          setSelected(item);
                          setOpen(false);
                        }}
                        className="p-3 hover:bg-red-100 cursor-pointer"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <textarea
                  rows="5"
                  placeholder="Write Message"
                  className="p-4 bg-white w-full outline-none"
                ></textarea>

                <button
                  type="submit"
                  className="bg-red-600 text-white px-8 py-3 font-semibold hover:bg-red-700 transition hover:scale-105"
                >
                  SEND MESSAGE →
                </button>

              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;