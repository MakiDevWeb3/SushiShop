import { motion } from "framer-motion";
import cateringHero from "@/assets/catering-hero.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import TextReveal from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";
import TiltCard from "@/components/TiltCard";
import { Link } from "react-router-dom";
import { Users, Utensils, Sparkles, Truck } from "lucide-react";

const packages = [
  {
    name: "Sakura",
    desc: "Perfect for intimate gatherings",
    serves: "10–20 guests",
    price: "From $350",
    items: ["Assorted maki platter (40pc)", "Edamame & gyoza", "Miso soup cups", "Chopstick sets"],
  },
  {
    name: "Hanami",
    desc: "Our most popular option",
    serves: "20–50 guests",
    price: "From $750",
    featured: true,
    items: ["Premium maki & nigiri (80pc)", "Sashimi platter", "Tempura assortment", "Sake selection", "Custom display setup"],
  },
  {
    name: "Omakase",
    desc: "The ultimate sushi experience",
    serves: "50+ guests",
    price: "From $1,500",
    items: ["Live chef station", "Unlimited maki & nigiri", "Full sashimi bar", "Premium sake & cocktails", "Table décor", "Dedicated staff"],
  },
];

const features = [
  { icon: Users, title: "Any Size", desc: "From office lunches to grand celebrations" },
  { icon: Utensils, title: "Custom Menus", desc: "Tailored to your preferences and dietary needs" },
  { icon: Sparkles, title: "Styled Setup", desc: "Beautiful presentation with our signature touch" },
  { icon: Truck, title: "We Come to You", desc: "Full delivery and setup at your venue" },
];

const CateringPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />

        <div className="page-hero">
          <motion.img
            src={cateringHero}
            alt="Maki catering"
            className="absolute inset-0 w-full h-full object-cover"
            width={1920}
            height={960}
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
              Events & Parties
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-5xl md:text-7xl font-display font-semibold tracking-wider"
              style={{ color: "white" }}
            >
              Catering
            </motion.h1>
          </div>
        </div>

        {/* Features */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  whileHover={{ y: -6 }}
                  className="text-center p-6 cursor-default"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <f.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                  </motion.div>
                  <h3 className="text-sm font-body font-medium text-foreground mb-1">{f.title}</h3>
                  <p className="text-xs font-body font-light text-muted-foreground">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <TextReveal
              text="Our Packages"
              as="h2"
              className="section-title text-center mb-4"
            />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="section-subtitle text-center mb-16 max-w-md mx-auto"
            >
              Choose a package or let us create something just for you
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg, i) => (
                <TiltCard key={pkg.name} className="rounded-2xl group" tiltAmount={6}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className={`relative bg-background rounded-2xl p-8 h-full ${pkg.featured ? "ring-2 ring-accent" : ""}`}
                  >
                    {pkg.featured && (
                      <motion.span
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, type: "spring" }}
                        className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-[10px] tracking-[0.15em] uppercase font-body px-4 py-1 rounded-full"
                      >
                        ✨ Most Popular
                      </motion.span>
                    )}
                    <h3 className="text-2xl font-display font-semibold text-foreground mb-1">{pkg.name}</h3>
                    <p className="text-xs font-body text-muted-foreground mb-2">{pkg.desc}</p>
                    <p className="text-sm font-body text-accent font-medium mb-1">{pkg.price}</p>
                    <p className="text-xs font-body text-muted-foreground mb-6">{pkg.serves}</p>
                    <ul className="space-y-2 mb-8">
                      {pkg.items.map((item) => (
                        <li key={item} className="text-sm font-body font-light text-foreground flex items-start gap-2">
                          <span className="text-accent mt-0.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <MagneticButton className="w-full">
                      <Link to="/reserve" className="btn-reserve w-full text-center block">
                        Inquire 🌸
                      </Link>
                    </MagneticButton>
                  </motion.div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default CateringPage;
