import { motion } from "framer-motion";
import location1 from "@/assets/location-1.jpg";
import location2 from "@/assets/location-2.jpg";
import location3 from "@/assets/location-3.jpg";
import { Link } from "react-router-dom";
import TextReveal from "./TextReveal";
import MagneticButton from "./MagneticButton";

const locations = [
  { name: "MAKI DOWNTOWN", image: location1, address: "42 Sakura Lane, Downtown" },
  { name: "MAKI MIDTOWN", image: location2, address: "118 Cedar Street, Midtown" },
  { name: "MAKI WEST", image: location3, address: "7 Bamboo Court, West Side" },
];

const LocationsSection = () => {
  return (
    <section id="locations" className="bg-background py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <TextReveal
          text="Our Locations"
          as="h2"
          className="section-title text-center mb-4"
        />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="section-subtitle text-center mb-16 max-w-md mx-auto"
        >
          Three cozy spots across the city, each with its own charm
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 60, rotateY: -5 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                <motion.img
                  src={loc.image}
                  alt={loc.name}
                  loading="lazy"
                  width={1280}
                  height={960}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.7 }}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-2xl" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <motion.h3
                  className="text-lg font-display tracking-[0.12em] mb-1"
                  style={{ color: "white" }}
                >
                  {loc.name}
                </motion.h3>
                <p className="text-xs font-body font-light tracking-wide mb-4" style={{ color: "rgba(255,255,255,0.7)" }}>
                  {loc.address}
                </p>
                <MagneticButton>
                  <Link to="/reserve" className="btn-reserve text-[10px]">
                    Reserve
                  </Link>
                </MagneticButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
