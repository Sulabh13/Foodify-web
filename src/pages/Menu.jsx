import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const MenuSection = () => {
  const [menuItems, setMenuItems] = useState([]);
  const navigate = useNavigate();

  const years = 10;
  const dishes = 120;
  const reviews = 500;
  const customers = 5;

  // Static Food Cards Data
  const items = [
    {
      id: 1,
      img: "https://i.pinimg.com/736x/7c/cd/4d/7ccd4d7fc01e52cf5b5456078047c9ec.jpg",
      title: "CRUNCHY LAVA CHICKEN BITES",
    },
    {
      id: 2,
      img: "https://i.pinimg.com/736x/25/ce/78/25ce78bef785ada51a5ed99bd6c3c9fd.jpg",
      title: "CRUNCHY LAVA CHICKEN BITES",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1550547660-d9450f859349",
      title: "CRUNCHY LAVA CHICKEN BITES",
    },
  ];

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/menu");
        setMenuItems(response.data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };

    fetchMenu();
  }, []);

  return (
    <div className="bg-gray-200">
      
      {/* About Section */}
      <section className="bg-[#f9f9ff] py-20 px-4">
        <motion.div
      className="max-w-6xl mx-auto text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Menu Us
      </motion.h2>

      <motion.p
        className="text-gray-600 max-w-3xl mx-auto mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Our achievement story is a true reflection of teamwork and perseverance.
        It showcases the passion, dedication, and commitment of our entire team.
        Every dish on our menu represents quality, creativity, and love for food.
        Together, we strive to serve not just meals, but memorable experiences.
      </motion.p>

      <motion.button
        className="bg-indigo-600 text-white px-6 py-3 rounded-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        viewport={{ once: true }}
      >
        Read More →
      </motion.button>
    </motion.div>

        {/* Image + Stats */}
   <motion.div
      className="relative max-w-6xl mx-auto mt-16 rounded-2xl overflow-hidden shadow-xl"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Image Animation */}
      <motion.img
        src="https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg"
        alt="Chefs cooking"
        className="w-full h-[480px] object-cover"
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      />

      {/* Stats Card */}
      <motion.div
        className="absolute bottom-6 left-[100px] -translate-x-1/2 bg-white/90 backdrop-blur rounded-xl px-6 py-5 shadow-lg w-[90%] md:w-[80%]"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {[
            { value: `${years}+`, label: "Years of Experience" },
            { value: `${dishes}+`, label: "Dishes" },
            { value: `${reviews}+`, label: "Reviews" },
            { value: `${customers}k+`, label: "Customers" },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.08 }}
            >
              <h3 className="text-2xl font-bold text-indigo-600">
                {item.value}
              </h3>
              <p className="text-sm text-gray-500">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
      </section>

      {/* Red Food Cards Section */}
    <section className="bg-[#f9f9ff] py-16 px-6 md:px-16">
  <div className="grid md:grid-cols-3 gap-10">
    {items.map((item) => (
      <div
        key={item.id}
        className="relative rounded-3xl overflow-hidden group cursor-pointer"
      >
        {/* Image */}
        <img
          src={`${item.img}?auto=format&fit=crop&w=800&q=80`}
          alt="food"
          className="w-full h-[450px] object-cover"
        />

        {/* White Frame */}
        <div className="absolute inset-8 border-[14px] border-white rounded-3xl pointer-events-none"></div>

        {/* Bottom Content Box */}
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 
                     w-[85%] bg-gray-200 rounded-2xl 
                     px-6 py-5 text-center shadow-xl
                     transition-all duration-500"
        >
          <h3 className="font-extrabold text-black text-lg tracking-wide">
            CRUNCHY LAVA CHICKEN BITES
          </h3>

          {/* Paragraph hidden initially */}
          <p
            className="text-gray-600 text-sm mt-3 
                       max-h-0 overflow-hidden opacity-0
                       transition-all duration-500
                       group-hover:max-h-40 
                       group-hover:opacity-100"
          >
            Crispy golden chicken coated in a spicy creamy lava sauce — bold,
            addictive, and impossible to stop eating.
          </p>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* Dynamic Menu Section */}
   <section className="max-w-6xl mx-auto px-4 py-12">
  <h2 className="text-3xl font-bold text-red-600 text-center mb-10">
    Foodify Foods Menu
  </h2>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {menuItems.map((item) => (
      <div
        key={item._id}
        className="bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <Link to={`/product/${item._id}`}>
          <img
            src={item.image_url}
            alt={item.name}
            className="w-full h-64 object-cover"
          />
        </Link>

        <div className="p-4">
          <h3 className="text-xl font-bold">{item.name}</h3>
          <p className="text-red-500 font-semibold">${item.price}</p>
          <p className="text-sm mt-2">{item.description}</p>

          <button
            onClick={() => navigate(`/product/${item._id}`)}
            className="mt-3 bg-red-600 text-white py-2 px-4 rounded"
          >
            Order Now
          </button>
        </div>
      </div>
    ))}
  </div>
</section>

    </div>
  );
};

export default MenuSection;