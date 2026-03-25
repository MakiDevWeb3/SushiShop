import { motion } from "framer-motion";
import location1 from "@/assets/location-1.jpg";
import location2 from "@/assets/location-2.jpg";
import location3 from "@/assets/location-3.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import TextReveal from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";
import { Link } from "react-router-dom";
import { MapPin, Clock, Phone } from "lucide-react";

const locations = [
  {
    name: "Maki Downtown",
    image: location1,
    address: "42 Sakura Lane, Downtown",
    hours: "Tue–Sun, 12pm–10pm",
    phone: "+1 (212) 555-0101",
  },
  {
    name: "Maki Midtown",
    image: location2,
    address: "118 Cedar Street, Midtown",
    hours: "Mon–Sun, 11am–11pm",
    phone: "+1 (212) 555-0102",
  },
  {
    name: "Maki West",
    image: location3,
    address: "7 Bamboo Court, West Side",
    hours: "Wed–Sun, 5pm–11pm",
    phone: "+1 (212) 555-0103",
  },
];

const LocationsPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="h-24" />

        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <motion.p
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-xs tracking-[0.3em] uppercase font-body text-accent font-medium mb-4"
              >
                Find Us
              </motion.p>
              <TextReveal text="Our Locations" as="h1" className="section-title mb-4" />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="section-subtitle max-w-md mx-auto"
              >
                Three cozy spots across the city — pick your favorite
              </motion.p>
            </div>

            <div className="space-y-16">
              {locations.map((loc, i) => (
                <motion.div
                  key={loc.name}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${i % 2 !== 0 ? "md:[direction:rtl]" : ""}`}
                >
                  <motion.div
                    initial={{ clipPath: "inset(0 100% 0 0)" }}
                    whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden rounded-2xl md:[direction:ltr]"
                  >
                    <motion.img
                      src={loc.image}
                      alt={loc.name}
                      loading="lazy"
                      width={1280}
                      height={960}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      className="w-full h-[350px] object-cover"
                    />
                  </motion.div>
                  <div className="md:[direction:ltr]">
                    <TextReveal
                      text={loc.name}
                      as="h2"
                      className="text-3xl font-display font-semibold tracking-wider text-foreground mb-6"
                      delay={0.2}
                    />
                    <div className="space-y-4 mb-8">
                      {[
                        { icon: MapPin, text: loc.address },
                        { icon: Clock, text: loc.hours },
                        { icon: Phone, text: loc.phone },
                      ].map((info, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <info.icon className="w-4 h-4 text-accent" />
                          <span className="text-sm font-body text-muted-foreground">{info.text}</span>
                        </motion.div>
                      ))}
                    </div>
                    <MagneticButton>
                      <Link to="/reserve" className="btn-reserve">
                        Reserve Here
                      </Link>
                    </MagneticButton>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default LocationsPage;
