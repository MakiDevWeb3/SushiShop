import { motion } from "framer-motion";

const items = [
  "🍣 MAKI", "·", "巻き", "·", "🍙 SUSHI", "·", "🌸 FRESH DAILY", "·", 
  "💕 HANDCRAFTED", "·", "🐟 OMAKASE", "·", "🍣 NIGIRI", "·", "🌸 SAKURA", "·", "💕 WITH LOVE", "·"
];

const MarqueeStrip = () => {
  return (
    <div className="overflow-hidden py-5 bg-accent relative">
      {/* Double row for depth */}
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [0, "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className={`font-display tracking-[0.3em] uppercase text-accent-foreground/90 mx-4 ${
              item === "·" ? "text-xl opacity-40" : "text-sm md:text-base"
            }`}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeStrip;
