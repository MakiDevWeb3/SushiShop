import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 600);
    const t2 = setTimeout(() => setPhase(2), 1400);
    const t3 = setTimeout(() => {
      setPhase(3);
      onComplete();
    }, 2200);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 3 && (
        <motion.div
          exit={{ clipPath: "circle(0% at 50% 50%)" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] bg-foreground flex flex-col items-center justify-center"
        >
          {/* Spinning sushi */}
          <motion.span
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: [0, 1.4, 1], rotate: [-180, 0] }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-6xl md:text-7xl block mb-6"
          >
            🍣
          </motion.span>

          {/* Brand name */}
          <motion.div className="overflow-hidden">
            <motion.div
              initial={{ y: 60 }}
              animate={{ y: phase >= 1 ? 0 : 60 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-[10px] tracking-[0.5em] font-body text-primary-foreground/50 block text-center">
                巻き
              </span>
              <span className="text-4xl md:text-5xl font-display font-semibold tracking-[0.2em] text-primary-foreground block text-center">
                MAKI
              </span>
            </motion.div>
          </motion.div>

          {/* Loading bar */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ 
              width: phase >= 1 ? 120 : 0,
              opacity: phase >= 1 ? 1 : 0,
            }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-8 h-[1px] bg-primary-foreground/20 rounded-full overflow-hidden"
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: phase >= 2 ? "0%" : "-100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="h-full bg-accent w-full"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
