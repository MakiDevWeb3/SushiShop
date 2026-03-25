import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-foreground py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
                className="text-2xl"
              >
                🍣
              </motion.span>
              <div>
                <p className="text-[10px] tracking-[0.4em] font-body font-light text-primary-foreground/50">巻き</p>
                <h3 className="text-3xl font-display font-semibold tracking-[0.15em] text-primary-foreground">MAKI</h3>
              </div>
            </div>
            <p className="text-sm font-body font-light text-primary-foreground/50 leading-relaxed">
              Crafted with love, rolled to perfection 🌸<br/>
              tobeamaki.store
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase font-body text-primary-foreground/30 mb-6">Explore</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Menu", path: "/menu", emoji: "📖" },
                { label: "About", path: "/about", emoji: "💕" },
                { label: "Locations", path: "/locations", emoji: "📍" },
                { label: "Catering", path: "/catering", emoji: "🎉" },
                { label: "Reserve", path: "/reserve", emoji: "🌸" },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="text-sm font-body font-light text-primary-foreground/60 hover:text-accent transition-colors"
                >
                  {link.emoji} {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase font-body text-primary-foreground/30 mb-6">Contact</h4>
            <div className="flex flex-col gap-3 text-sm font-body font-light text-primary-foreground/60">
              <p>✉️ hello@tobeamaki.store</p>
              <p>📞 +1 (212) 555-MAKI</p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-primary-foreground/40 hover:text-accent transition-colors text-xs tracking-[0.2em] uppercase">Instagram</a>
                <a href="#" className="text-primary-foreground/40 hover:text-accent transition-colors text-xs tracking-[0.2em] uppercase">TikTok</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8">
          <p className="text-xs font-body font-light text-primary-foreground/25 text-center tracking-wide">
            © 2026 Maki — tobeamaki.store. Made with 💕 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
