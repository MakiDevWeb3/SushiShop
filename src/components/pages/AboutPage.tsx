import { motion } from "framer-motion";
import aboutFood from "@/assets/about-food.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero3 from "@/assets/hero-3.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import TextReveal from "@/components/TextReveal";
import ParallaxImage from "@/components/ParallaxImage";
import MarqueeStrip from "@/components/MarqueeStrip";

const values = [
  { emoji: "🐟", title: "Fresh Daily", desc: "Premium fish sourced every morning from trusted fishermen" },
  { emoji: "🌿", title: "Sustainable", desc: "We partner with eco-conscious suppliers and minimize waste" },
  { emoji: "💕", title: "Made with Love", desc: "Every roll is crafted by hand with care and precision" },
  { emoji: "✨", title: "Playful Spirit", desc: "Traditional techniques with a modern, fun twist" },
];

const AboutPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        <div className="page-hero">
          <motion.img
            src={hero3}
            alt="Chef at Maki"
            className="absolute inset-0 w-full h-full object-cover"
            width={1920}
            height={1080}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
          />
          <div className="page-hero-overlay" />
          <div className="relative z-10 text-center px-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xs tracking-[0.4em] uppercase font-body font-light mb-4"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              Our Story
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-5xl md:text-7xl font-display font-semibold tracking-wider"
              style={{ color: "white" }}
            >
              About Maki
            </motion.h1>
          </div>
        </div>

        {/* Story */}
        <section className="py-20 md:py-28 bg-background">
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs tracking-[0.3em] uppercase font-body text-accent font-medium mb-6"
            >
              Est. 2020
            </motion.p>
            <TextReveal
              text="A Love Letter to Sushi"
              as="h2"
              className="section-title mb-8"
            />
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="section-subtitle text-base leading-loose mb-6 max-w-2xl mx-auto"
            >
              Maki was born from a simple dream: to bring the joy of perfectly crafted sushi 
              to everyone. Founded by two childhood friends with a shared obsession for 
              Japanese cuisine, we set out to create a space where tradition meets warmth.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="section-subtitle text-base leading-loose max-w-2xl mx-auto"
            >
              From our first tiny counter with six seats to three bustling locations, 
              the heart of Maki has never changed — every guest is family, and every 
              roll is made with the same care as the very first one.
            </motion.p>
          </div>
        </section>

        {/* Parallax image break */}
        <ParallaxImage src={hero1} alt="Maki interior" className="h-[50vh] relative" speed={0.4} />

        <MarqueeStrip />

        {/* Values */}
        <section className="py-20 md:py-28 bg-secondary">
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <TextReveal
              text="What We Stand For"
              as="h2"
              className="section-title text-center mb-16"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="text-center bg-background rounded-2xl p-8 cursor-default"
                >
                  <motion.span
                    className="text-4xl block mb-4"
                    whileHover={{ scale: 1.3, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {v.emoji}
                  </motion.span>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="text-xs font-body font-light text-muted-foreground leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Chef */}
        <section className="py-20 md:py-28 bg-background">
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
                alt="Sushi craft"
                loading="lazy"
                width={1280}
                height={960}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                className="w-full h-[450px] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-xs tracking-[0.3em] uppercase font-body text-accent font-medium mb-4">The Craft</p>
              <TextReveal text="Master Itamae" as="h2" className="section-title mb-6" delay={0.1} />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="section-subtitle mb-4"
              >
                Our head chef trained for over 15 years in Tokyo before bringing their 
                artistry to Maki. Every slice, every roll, every garnish is deliberate.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.55 }}
                className="section-subtitle"
              >
                We source the finest seasonal ingredients — from Hokkaido uni to 
                Tsukiji-grade tuna — to ensure every plate is extraordinary.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default AboutPage;
