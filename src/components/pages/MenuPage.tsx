import { motion } from "framer-motion";
import menuMaki from "@/assets/menu-maki.jpg";
import menuSashimi from "@/assets/menu-sashimi.jpg";
import menuDrinks from "@/assets/menu-drinks.jpg";
import hero2 from "@/assets/hero-2.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import TextReveal from "@/components/TextReveal";
import MarqueeStrip from "@/components/MarqueeStrip";
import TiltCard from "@/components/TiltCard";

const menuCategories = [
  {
    title: "Maki Rolls",
    emoji: "🍣",
    image: menuMaki,
    items: [
      { name: "Salmon Avocado Roll", price: "$14", desc: "Fresh Atlantic salmon, ripe avocado, cucumber" },
      { name: "Spicy Tuna Roll", price: "$16", desc: "Yellowfin tuna, spicy mayo, tempura flakes" },
      { name: "Dragon Roll", price: "$22", desc: "Shrimp tempura, eel, avocado, unagi sauce" },
      { name: "Rainbow Roll", price: "$24", desc: "California roll topped with assorted sashimi" },
      { name: "Veggie Garden Roll", price: "$12", desc: "Avocado, cucumber, asparagus, pickled radish" },
    ],
  },
  {
    title: "Nigiri & Sashimi",
    emoji: "🐟",
    image: menuSashimi,
    items: [
      { name: "Salmon Nigiri (2pc)", price: "$10", desc: "Sustainably sourced Norwegian salmon" },
      { name: "Toro Nigiri (2pc)", price: "$18", desc: "Premium fatty tuna belly" },
      { name: "Sashimi Platter", price: "$32", desc: "Chef's selection of 12 premium slices" },
      { name: "Uni Nigiri (2pc)", price: "$20", desc: "Fresh sea urchin from Hokkaido" },
      { name: "Hamachi Nigiri (2pc)", price: "$12", desc: "Japanese yellowtail, citrus zest" },
    ],
  },
  {
    title: "Sake & Cocktails",
    emoji: "🍶",
    image: menuDrinks,
    items: [
      { name: "Junmai Daiginjo", price: "$18", desc: "Smooth, floral, premium sake" },
      { name: "Yuzu Spritz", price: "$14", desc: "Yuzu, prosecco, elderflower, soda" },
      { name: "Sakura Martini", price: "$16", desc: "Gin, cherry blossom syrup, lychee" },
      { name: "Matcha Highball", price: "$14", desc: "Whisky, matcha, ginger, tonic" },
      { name: "Hot Sake Carafe", price: "$22", desc: "Warm filtered sake, traditional pour" },
    ],
  },
];

const MenuPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero */}
        <div className="page-hero">
          <motion.img
            src={hero2}
            alt="Maki menu"
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
              🌸 Fresh & Seasonal 🌸
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-5xl md:text-7xl font-display font-semibold tracking-wider"
              style={{ color: "white" }}
            >
              Our Menu
            </motion.h1>
          </div>
        </div>

        {/* Menu sections */}
        {menuCategories.map((cat, idx) => (
          <section key={cat.title} className={`py-20 md:py-28 ${idx % 2 === 0 ? "bg-background" : "bg-secondary"}`}>
            <div className="max-w-6xl mx-auto px-6 md:px-12">
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center ${idx % 2 !== 0 ? "md:[direction:rtl]" : ""}`}>
                <TiltCard className="rounded-2xl group md:[direction:ltr]">
                  <motion.div
                    initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
                    whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden rounded-2xl relative"
                  >
                    <motion.img
                      src={cat.image}
                      alt={cat.title}
                      loading="lazy"
                      width={1280}
                      height={960}
                      className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Floating emoji badge */}
                    <motion.div 
                      className="absolute top-4 right-4 w-14 h-14 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl shadow-lg"
                      animate={{ y: [0, -6, 0], rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      {cat.emoji}
                    </motion.div>
                  </motion.div>
                </TiltCard>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="md:[direction:ltr]"
                >
                  <TextReveal
                    text={cat.title}
                    as="h2"
                    className="text-3xl md:text-4xl font-display tracking-wider text-foreground mb-8"
                    delay={0.2}
                  />
                  <div className="space-y-1">
                    {cat.items.map((item, itemIdx) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 + itemIdx * 0.08 }}
                        whileHover={{ x: 6, transition: { duration: 0.2 } }}
                        className="flex justify-between items-start gap-4 group py-3 px-3 rounded-xl hover:bg-accent/5 transition-colors duration-300 cursor-default"
                      >
                        <div>
                          <h3 className="text-base font-body font-medium text-foreground group-hover:text-accent transition-colors duration-300">
                            {item.name}
                          </h3>
                          <p className="text-xs font-body font-light text-muted-foreground mt-0.5">{item.desc}</p>
                        </div>
                        <motion.span 
                          className="text-sm font-display font-semibold text-accent whitespace-nowrap"
                          whileHover={{ scale: 1.15 }}
                        >
                          {item.price}
                        </motion.span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        ))}

        <MarqueeStrip />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default MenuPage;
