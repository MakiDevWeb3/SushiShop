import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import aboutFood from "@/assets/about-food.jpg";
import { Link } from "react-router-dom";
import TextReveal from "./TextReveal";
import MagneticButton from "./MagneticButton";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={sectionRef} id="about" className="bg-secondary py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden rounded-2xl"
        >
          <motion.img
            src={aboutFood}
            alt="Fresh sushi at Maki"
            loading="lazy"
            width={1280}
            height={960}
            style={{ y: imgY }}
            className="w-full h-[500px] object-cover scale-110"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.p
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "auto" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.3em] uppercase font-body text-accent font-medium mb-4 overflow-hidden whitespace-nowrap"
          >
            Our Story
          </motion.p>
          <TextReveal
            text="The Art of Maki"
            as="h2"
            className="section-title mb-8"
            delay={0.2}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="section-subtitle mb-6"
          >
            At Maki, every roll is a small masterpiece. We believe sushi should be 
            fun, beautiful, and made with the freshest ingredients — sourced daily 
            from trusted fishermen and local farms.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="section-subtitle mb-8"
          >
            Our chefs bring years of tradition together with a playful modern touch, 
            creating an experience that's as delightful to look at as it is to taste.
          </motion.p>
          <MagneticButton>
            <Link
              to="/about"
              className="inline-block text-xs tracking-[0.25em] uppercase font-body text-foreground border-b border-foreground pb-1 hover:opacity-60 transition-opacity"
            >
              Learn more about us
            </Link>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
