import { motion } from "framer-motion";
import { useMemo } from "react";

const SakuraPetals = ({ count = 20 }: { count?: number }) => {
  const petals = useMemo(() => 
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 6 + Math.random() * 8,
      size: 10 + Math.random() * 14,
      rotation: Math.random() * 360,
      swayAmount: 40 + Math.random() * 80,
      opacity: 0.3 + Math.random() * 0.5,
    })),
    [count]
  );

  return (
    <div className="fixed inset-0 z-[5] pointer-events-none overflow-hidden">
      {petals.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.x}%`,
            top: -30,
            fontSize: `${p.size}px`,
            opacity: p.opacity,
          }}
          animate={{
            y: ["0vh", "105vh"],
            x: [0, p.swayAmount, -p.swayAmount / 2, p.swayAmount / 3, 0],
            rotate: [p.rotation, p.rotation + 360],
          }}
          transition={{
            y: { duration: p.duration, repeat: Infinity, delay: p.delay, ease: "linear" },
            x: { duration: p.duration * 0.8, repeat: Infinity, delay: p.delay, ease: "easeInOut" },
            rotate: { duration: p.duration * 1.2, repeat: Infinity, delay: p.delay, ease: "linear" },
          }}
        >
          🌸
        </motion.div>
      ))}
    </div>
  );
};

export default SakuraPetals;
