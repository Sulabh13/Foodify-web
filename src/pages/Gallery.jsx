import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const galleryImages = [
  "https://gramentheme.com/html/fresheat/assets/img/gallery/galleryThumb2_1.jpg",
  "https://t4.ftcdn.net/jpg/08/36/02/45/360_F_836024580_GMq3eGTwA8WS6JeHUP9I6iT2epmNIINx.jpg",
  "https://myspicetrunk.com/wp-content/uploads/2021/10/20211006_1120533-e1634060374186.jpg?v=1634054874",
  "https://www.paintthekitchenred.com/wp-content/uploads/2025/09/Masala-Dosa-L1-Paint-the-Kitchen-Red.jpg",
  "https://gramentheme.com/html/fresheat/assets/img/gallery/galleryThumb2_5.jpg",
  "https://gramentheme.com/html/fresheat/assets/img/gallery/galleryThumb2_6.jpg",
];

function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Animated Counter States
  const [years, setYears] = useState(0);
  const [dishes, setDishes] = useState(0);
  const [reviews, setReviews] = useState(0);
  const [customers, setCustomers] = useState(0);

  // Counter Animation
  useEffect(() => {
    const animateCounter = (setter, target, duration = 2000) => {
      let start = 0;
      const increment = target / (duration / 20);

      const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(counter);
        } else {
          setter(Math.ceil(start));
        }
      }, 20);
    };

    animateCounter(setYears, 12);
    animateCounter(setDishes, 150);
    animateCounter(setReviews, 2400);
    animateCounter(setCustomers, 8);
  }, []);

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((idx) =>
      idx === null
        ? null
        : (idx + galleryImages.length - 1) % galleryImages.length,
    );
  const nextImage = () =>
    setLightboxIndex((idx) =>
      idx === null ? null : (idx + 1) % galleryImages.length,
    );

  const leftItems = [
    {
      name: "Manchurian",
      price: "$15.99",
      img: "https://media.istockphoto.com/id/694050884/photo/gobi-manchurian-dry-or-with-gravy-popular-street-food-of-india-made-of-cauliflower-florets.jpg?s=612x612&w=0&k=20&c=gOQLqoJeecOQ73x2a3Vu025wH1mFkdVaEoVyJEH7yck=",
    },
    {
      name: "spring Roll",
      price: "$25.99",
      img: "https://media.istockphoto.com/id/1430066729/photo/fried-spring-rolls-with-sweet-chili-sauce-and-lime-on-plate.jpg?s=2048x2048&w=is&k=20&c=79Ux1N5zjEYzxo6EESBJt5tq3fSUlyUIWtEv9vVs9eE=",
      highlight: true,
    },
    {
      name: "Dahi vada",
      price: "$35.99",
      img: "https://ministryofcurry.com/wp-content/uploads/2016/08/Dahi-Vada-5.jpg",
    },
    {
      name: "gupchup",
      price: "$45.99",
      img: "https://content.jdmagicbox.com/comp/bhubaneshwar/c9/0674px674.x674.230917222628.t4c9/catalogue/gupchup-punjabi-colony-bhubaneshwar-fast-food-rpy1zhpfn0.jpg",
    },
    {
      name: "Rasmalai",
      price: "$55.99",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRumtJauKDsRuFsVx2ontZgjcPqilpqnSsvMQ&s",
    },
  ];

  const rightItems = [
    {
      name: "Burger",
      price: "$75.99",
      img: "https://i.pinimg.com/736x/38/bb/96/38bb963a9c08bc4b4894b98b9d5ff32c.jpg",
    },
    {
      name: "White Rice",
      price: "$85.99",
      img: "https://i.pinimg.com/1200x/1f/7e/a8/1f7ea8e1428dc52cc7825130dd548292.jpg",
    },
    {
      name: "Special Burger",
      price: "$95.99",
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    },
    {
      name: "Vegetable Burger",
      price: "$25.99",
      img: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    },
    {
      name: "Noodles",
      price: "$52.99",
      img: "https://i.pinimg.com/736x/fb/35/f0/fb35f00714a8fc75b24b5aed95e6c154.jpg",
    },
  ];

  const galleryImages = [
    {
      src: "https://gramentheme.com/html/fresheat/assets/img/gallery/galleryThumb2_1.jpg",
      name: "chocolate cake",
    },
    {
      src: "https://gramentheme.com/html/fresheat/assets/img/gallery/galleryThumb2_2.jpg",
      name: "Afri-Cola",
    },
    {
      src: "https://www.paintthekitchenred.com/wp-content/uploads/2025/09/Masala-Dosa-L1-Paint-the-Kitchen-Red.jpg",
      name: "Dosa",
    },
    {
      src: "https://amandascookin.com/wp-content/uploads/2023/01/Fried-Ice-Cream-RCSQ.jpg",
      name: "Ice Cream",
    },
    {
      src: "https://cdn1.foodviva.com/static-content/food-images/snacks-recipes/khaman-dhokla-recipe/khaman-dhokla-recipe.jpg",
      name: "Dhokla",
    },
    {
      src: "https://gramentheme.com/html/fresheat/assets/img/gallery/galleryThumb2_6.jpg",
      name: "Noodles",
    },
  ];
  return (
    <section className="bg-gray-200 overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="bg-[#f9f9ff] py-14 sm:py-20 px-4 sm:px-6">
    <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
  className="max-w-6xl mx-auto text-center"
>
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.6 }}
    viewport={{ once: true }}
    className="text-3xl sm:text-4xl font-bold mb-4"
  >
    Gallery
  </motion.h2>

  <motion.p
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, duration: 0.6 }}
    viewport={{ once: true }}
    className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto mb-6"
  >
    Our achievement story is a proud reflection of teamwork, dedication,
    and perseverance. Every milestone we reached stands as proof of our
    hard work, unity, and strong determination.
  </motion.p>

  <motion.button
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.6, duration: 0.5 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-indigo-600 text-white px-6 py-2 sm:py-3 rounded-lg hover:bg-indigo-700 transition"
  >
    Read More →
  </motion.button>
</motion.div>

        {/* HERO IMAGE */}
       <motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="relative max-w-6xl mx-auto mt-12 sm:mt-16 rounded-2xl overflow-hidden shadow-xl"
>
  <motion.img
    src="https://media.istockphoto.com/id/1488738060/photo/south-indian-veg-thali.jpg?s=612x612&w=0&k=20&c=mzaQufFbfOusluGwQ6Iqx0j-hXg9_fMXGekMSMDnFdY="
    alt="Chefs cooking"
    className="w-full h-[250px] sm:h-[380px] md:h-[480px] object-cover"
    initial={{ scale: 1.1 }}
    whileInView={{ scale: 1 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  />

  {/* STATS BOX */}
  <motion.div
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 0.8 }}
    viewport={{ once: true }}
    className="absolute bottom-4 sm:bottom-6 left-[100px] -translate-x-1/2 bg-white/95 backdrop-blur rounded-xl px-4 sm:px-6 py-4 shadow-lg w-[95%] sm:w-[85%] "
  >
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl sm:text-2xl font-bold text-indigo-600">
          {years}+
        </h3>
        <p className="text-xs sm:text-sm text-gray-500">
          Years Experience
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl sm:text-2xl font-bold text-indigo-600">
          {dishes}+
        </h3>
        <p className="text-xs sm:text-sm text-gray-500">Dishes</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl sm:text-2xl font-bold text-indigo-600">
          {reviews}+
        </h3>
        <p className="text-xs sm:text-sm text-gray-500">Reviews</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl sm:text-2xl font-bold text-indigo-600">
          {customers}k+
        </h3>
        <p className="text-xs sm:text-sm text-gray-500">Customers</p>
      </motion.div>
    </div>
  </motion.div>
</motion.div>
      </section>

      {/* ================= POPULAR DEALS ================= */}
<section className="bg-gray-100 py-14 sm:py-20 px-4 sm:px-6">
  <div className="max-w-7xl mx-auto">
    
    <motion.h2
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-2xl sm:text-4xl text-center font-extrabold mb-12"
    >
      Our <span className="text-red-500">Popular Deals</span>
    </motion.h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
      
      {/* LEFT ITEMS */}
      <div className="space-y-8">
        {leftItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 cursor-pointer"
          >
            <motion.img
              src={item.img}
              alt={item.name}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
            <div className="flex-1">
              <h3 className="text-base sm:text-lg font-semibold">
                {item.name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">
                It's a testament to our.
              </p>
            </div>
            <span className="text-sm sm:text-base font-semibold">
              {item.price}
            </span>
          </motion.div>
        ))}
      </div>

      {/* CENTER IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        className="flex justify-center order-first md:order-none"
      >
        <img
          src="https://gramentheme.com/html/fresheat/assets/img/menu/menuThumb3_1.png"
          alt="Main Dish"
          className="w-[260px] sm:w-[350px] md:w-[400px] object-contain"
        />
      </motion.div>

      {/* RIGHT ITEMS */}
      <div className="space-y-8">
        {rightItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 cursor-pointer"
          >
            <motion.img
              src={item.img}
              alt={item.name}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
              whileHover={{ rotate: -10 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
            <div className="flex-1">
              <h3 className="text-base sm:text-lg font-semibold">
                {item.name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">
                It's a testament to our.
              </p>
            </div>
            <span className="text-sm sm:text-base font-semibold">
              {item.price}
            </span>
          </motion.div>
        ))}
      </div>

    </div>
  </div>
</section>

      {/* ================= GALLERY ================= */}
<div className="px-4 sm:px-6 py-12 max-w-6xl mx-auto">
  <motion.h2
    initial={{ opacity: 0, y: -40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-2xl sm:text-3xl font-bold text-center text-red-600 mb-8"
  >
    Our Gallery
  </motion.h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
    {galleryImages.map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05, rotate: 1 }}
        transition={{ duration: 0.5, delay: i * 0.15 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-lg shadow-md group cursor-pointer"
        onClick={() => openLightbox(i)}
      >
        {/* IMAGE */}
        <motion.img
          src={item.src}
          alt={item.name}
          className="w-full h-56 sm:h-64 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />

        {/* OVERLAY */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-black/60 flex items-center justify-center"
        >
          <motion.h3
            initial={{ y: 20 }}
            whileHover={{ y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-white text-lg sm:text-xl font-semibold"
          >
            {item.name}
          </motion.h3>
        </motion.div>
      </motion.div>
    ))}
  </div>
</div>

      {/* ================= LIGHTBOX ================= */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            <FaTimes />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-3 sm:left-6 text-white text-3xl"
          >
            <FaChevronLeft />
          </button>

          <img
            src={galleryImages[lightboxIndex]}
            alt="Lightbox"
            className="max-w-full max-h-[85vh] object-contain rounded-xl"
          />

          <button
            onClick={nextImage}
            className="absolute right-3 sm:right-6 text-white text-3xl"
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </section>
  );
}

export default Gallery;
