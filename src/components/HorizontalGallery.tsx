import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import menuMaki from "@/assets/menu-maki.jpg";
import menuSashimi from "@/assets/menu-sashimi.jpg";
import aboutFood from "@/assets/about-food.jpg";

const galleryItems = [
  { src: hero1, label: "Fresh Cuts", emoji: "🐟" },
  { src: menuMaki, label: "Signature Rolls", emoji: "🍣" },
  { src: hero2, label: "Omakase", emoji: "✨" },
  { src: menuSashimi, label: "Sashimi Art", emoji: "🌸" },
  { src: hero3, label: "The Experience", emoji: "💕" },
  { src: aboutFood, label: "Handcrafted", emoji: "🍙" },
];

const HorizontalGallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-65%"]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-foreground">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.4em] uppercase font-body text-primary-foreground/40 text-center mb-2 pt-12"
        >
          A Glimpse Inside
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-display font-semibold text-primary-foreground text-center mb-10 tracking-wider"
        >
          Gallery 🌸
        </motion.h2>
        <motion.div style={{ x }} className="flex gap-6 px-8 will-change-transform">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              className="relative flex-shrink-0 w-[75vw] md:w-[35vw] group"
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.4 }}
            >
              <div className="overflow-hidden rounded-2xl">
                <motion.img
                  src={item.src}
                  alt={item.label}
                  loading="lazy"
                  className="w-full h-[50vh] md:h-[60vh] object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent rounded-b-2xl">
                <span className="text-2xl mr-2">{item.emoji}</span>
                <span className="text-sm tracking-[0.2em] uppercase font-body text-white/90">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalGallery;
