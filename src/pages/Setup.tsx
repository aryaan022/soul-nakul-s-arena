import { motion } from "framer-motion";
import batmanAirpods from "@/assets/batman-airpods.jpeg";
import batmanBike from "@/assets/batman-bike.png";

const devices = [
  { name: "Phone", value: "iPhone 15 Pro Max", icon: "📱" },
  { name: "Triggers", value: "Custom 4-Finger Setup", icon: "🎮" },
  { name: "Earphones", value: "Batman AirPods Case 🦇", icon: "🎧" },
  { name: "Internet", value: "Fiber + 5G Backup", icon: "🌐" },
];

const sensitivity = [
  { name: "Camera Sensitivity", value: "120-140%" },
  { name: "ADS Sensitivity", value: "8-12%" },
  { name: "Gyroscope", value: "300-350%" },
  { name: "Layout", value: "4-Finger Claw" },
];

const Setup = () => {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-6">
        <motion.h1
          className="text-4xl md:text-5xl font-display font-black uppercase text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Gaming <span className="text-accent text-glow-gold">Setup</span>
        </motion.h1>
        <p className="text-center text-muted-foreground font-body mb-14">
          The gear & settings behind the clutches
        </p>

        {/* Devices grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {devices.map((d, i) => (
            <motion.div
              key={d.name}
              className="bg-card border border-glow rounded-lg p-6 text-center box-glow-cyan hover:border-primary/50 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-4xl mb-4">{d.icon}</div>
              <h3 className="font-display text-sm uppercase text-muted-foreground tracking-widest mb-1">{d.name}</h3>
              <p className="font-body text-lg text-foreground font-semibold">{d.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Sensitivity settings */}
        <motion.div
          className="max-w-2xl mx-auto bg-card border border-glow rounded-lg p-8 box-glow-cyan mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-display font-bold uppercase mb-6 text-center">
            Sensitivity <span className="text-primary text-glow-cyan">Settings</span>
          </h2>
          <div className="space-y-4">
            {sensitivity.map((s) => (
              <div key={s.name} className="flex items-center justify-between border-b border-border pb-3">
                <span className="font-body text-muted-foreground">{s.name}</span>
                <span className="font-display text-primary text-sm font-bold">{s.value}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground text-center mt-6 font-body">
            * Settings may vary between tournaments. These are approximate values.
          </p>
        </motion.div>

        {/* Batman vibes section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-display font-bold uppercase text-center mb-10">
            Off The <span className="text-accent text-glow-gold">Grid</span> 🦇
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg overflow-hidden border border-glow group">
              <img
                src={batmanAirpods}
                alt="Batman AirPods Case"
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4 bg-card">
                <p className="font-display text-sm text-accent uppercase">Batman AirPods Case</p>
                <p className="font-body text-muted-foreground text-sm">Because even audio needs to be legendary 🦇</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden border border-glow group">
              <img
                src={batmanBike}
                alt="Batman Vibes"
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4 bg-card">
                <p className="font-display text-sm text-accent uppercase">The Dark Knight Energy</p>
                <p className="font-body text-muted-foreground text-sm">Nakul's alter ego off the battleground</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Setup;
