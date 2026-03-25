import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import { Link } from "react-router-dom";
import MagneticButton from "./MagneticButton";

const images = [hero1, hero2, hero3];
const taglines = [
  "Crafted with love, rolled to perfection 🌸",
  "Every bite tells a story 💕",
  "Where tradition meets delight ✨",
];

const HeroSlideshow = () => {
  const [current, setCurrent] = useState(0);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 200]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 600], [1, 1.1]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const makiLetters = "MAKI".split("");

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={images[current]}
            alt="Maki sushi restaurant"
            initial={{ opacity: 0, scale: 1.15 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
            width={1920}
            height={1080}
          />
        </AnimatePresence>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />

      <motion.div
        style={{ opacity: heroOpacity }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xs tracking-[0.5em] uppercase font-body font-light mb-4"
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          🌸 巻き — Sushi Restaurant 🌸
        </motion.p>

        <h1 className="text-6xl md:text-9xl font-display font-semibold tracking-[0.15em] mb-6 flex" style={{ color: "white" }}>
          {makiLetters.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ y: 80, opacity: 0, rotateX: -90 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              transition={{
                delay: 0.8 + i * 0.12,
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </h1>

        <AnimatePresence mode="wait">
          <motion.p
            key={current}
            initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -15, filter: "blur(8px)" }}
            transition={{ duration: 0.8 }}
            className="text-lg md:text-xl font-display italic font-light mb-10"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            {taglines[current]}
          </motion.p>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex gap-4"
        >
          <MagneticButton>
            <Link to="/reserve" className="btn-reserve">
              Reserve a Table 🌸
            </Link>
          </MagneticButton>
          <MagneticButton>
            <Link to="/menu" className="btn-outline-light">
              Our Menu
            </Link>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Animated dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="relative h-2 rounded-full transition-all duration-300"
            style={{ width: i === current ? 32 : 8 }}
          >
            <span className={`absolute inset-0 rounded-full ${i === current ? "bg-accent" : "bg-accent-foreground/40"}`} />
            {i === current && (
              <motion.span
                layoutId="heroDot"
                className="absolute inset-0 rounded-full bg-accent"
                transition={{ type: "spring", damping: 20 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-lg"
        >
          🐟
        </motion.div>
        <span className="text-[9px] tracking-[0.3em] uppercase font-body" style={{ color: "rgba(255,255,255,0.4)" }}>
          Scroll
        </span>
      </motion.div>
    </section>
  );
};

export default HeroSlideshow;
