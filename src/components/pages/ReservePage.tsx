import { useState } from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { CalendarIcon, Users, Clock, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import TextReveal from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";
import { toast } from "@/hooks/use-toast";

const timeSlots = ["12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"];
const guestOptions = [1, 2, 3, 4, 5, 6, 7, 8];
const locationOptions = ["Maki Downtown", "Maki Midtown", "Maki West"];

const ReservePage = () => {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(2);
  const [location, setLocation] = useState(locationOptions[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !time || !name || !email) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    toast({
      title: "Reservation request sent! 🎉",
      description: `We'll confirm your table for ${guests} at ${location} on ${format(date, "PPP")} at ${time}.`,
    });
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="h-24" />

        <section className="py-16 md:py-24">
          <div className="max-w-2xl mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <motion.p
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-xs tracking-[0.3em] uppercase font-body text-accent font-medium mb-4"
              >
                Book a Table
              </motion.p>
              <TextReveal text="Reserve" as="h1" className="section-title mb-4" />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="section-subtitle max-w-md mx-auto"
              >
                We can't wait to welcome you. Pick a time, and we'll have everything ready.
              </motion.p>
            </div>

            <motion.form
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-8 md:p-10 space-y-6"
            >
              {/* Location */}
              <div>
                <label className="text-xs tracking-[0.15em] uppercase font-body text-muted-foreground mb-2 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-accent" /> Location
                </label>
                <div className="flex gap-2 flex-wrap mt-2">
                  {locationOptions.map((loc) => (
                    <motion.button
                      key={loc}
                      type="button"
                      onClick={() => setLocation(loc)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={cn(
                        "px-4 py-2 text-sm font-body rounded-full border transition-all",
                        location === loc
                          ? "bg-accent text-accent-foreground border-accent"
                          : "bg-background text-foreground border-border hover:border-accent"
                      )}
                    >
                      {loc}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs tracking-[0.15em] uppercase font-body text-muted-foreground mb-2 flex items-center gap-2">
                    <CalendarIcon className="w-3.5 h-3.5 text-accent" /> Date
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <button
                        type="button"
                        className={cn(
                          "w-full mt-2 px-4 py-3 text-sm font-body text-left rounded-xl border border-border bg-background transition-colors hover:border-accent",
                          !date && "text-muted-foreground"
                        )}
                      >
                        {date ? format(date, "PPP") : "Pick a date"}
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(d) => d < new Date()}
                        initialFocus
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <label className="text-xs tracking-[0.15em] uppercase font-body text-muted-foreground mb-2 flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-accent" /> Time
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full mt-2 px-4 py-3 text-sm font-body rounded-xl border border-border bg-background text-foreground transition-colors hover:border-accent appearance-none cursor-pointer"
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Guests */}
              <div>
                <label className="text-xs tracking-[0.15em] uppercase font-body text-muted-foreground mb-2 flex items-center gap-2">
                  <Users className="w-3.5 h-3.5 text-accent" /> Guests
                </label>
                <div className="flex gap-2 flex-wrap mt-2">
                  {guestOptions.map((n) => (
                    <motion.button
                      key={n}
                      type="button"
                      onClick={() => setGuests(n)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={cn(
                        "w-10 h-10 text-sm font-body rounded-full border transition-all",
                        guests === n
                          ? "bg-accent text-accent-foreground border-accent"
                          : "bg-background text-foreground border-border hover:border-accent"
                      )}
                    >
                      {n}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs tracking-[0.15em] uppercase font-body text-muted-foreground mb-2 block">Name *</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full mt-1 px-4 py-3 text-sm font-body rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground transition-colors focus:border-accent focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs tracking-[0.15em] uppercase font-body text-muted-foreground mb-2 block">Phone</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Your phone"
                    className="w-full mt-1 px-4 py-3 text-sm font-body rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground transition-colors focus:border-accent focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs tracking-[0.15em] uppercase font-body text-muted-foreground mb-2 block">Email *</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full mt-1 px-4 py-3 text-sm font-body rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground transition-colors focus:border-accent focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="text-xs tracking-[0.15em] uppercase font-body text-muted-foreground mb-2 block">Special Requests</label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Allergies, celebrations, seating preferences..."
                  rows={3}
                  className="w-full mt-1 px-4 py-3 text-sm font-body rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground transition-colors focus:border-accent focus:outline-none resize-none"
                />
              </div>

              <MagneticButton className="w-full">
                <button type="submit" className="btn-reserve w-full text-center block">
                  Request Reservation
                </button>
              </MagneticButton>
              <p className="text-[11px] font-body text-muted-foreground text-center">
                We'll send a confirmation to your email within 24 hours
              </p>
            </motion.form>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default ReservePage;
