import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 50000, suffix: "+", label: "Rolls Served", emoji: "🍣" },
  { value: 15, suffix: "+", label: "Years Experience", emoji: "👨‍🍳" },
  { value: 3, suffix: "", label: "Locations", emoji: "📍" },
  { value: 98, suffix: "%", label: "Happy Guests", emoji: "💕" },
];

const AnimatedNumber = ({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const startTime = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span className="tabular-nums">
      {display.toLocaleString()}{suffix}
    </span>
  );
};

const StatsCounter = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-accent/10">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="text-center"
            >
              <motion.span
                className="text-3xl block mb-3"
                animate={inView ? { scale: [1, 1.3, 1], rotate: [0, 10, -10, 0] } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                {stat.emoji}
              </motion.span>
              <span className="text-3xl md:text-5xl font-display font-bold text-foreground block mb-2">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} inView={inView} />
              </span>
              <span className="text-xs tracking-[0.2em] uppercase font-body text-muted-foreground">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
