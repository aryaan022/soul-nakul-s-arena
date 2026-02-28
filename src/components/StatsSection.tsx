import { motion } from "framer-motion";

const stats = [
  { label: "Tournament Wins", value: "15+", icon: "🏆" },
  { label: "Total Kills", value: "5000+", icon: "🎯" },
  { label: "K/D Ratio", value: "4.2", icon: "⚡" },
  { label: "Fans", value: "500K+", icon: "❤️" },
];

const StatsSection = () => {
  return (
    <section id="stats" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-display font-bold text-center uppercase mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Battle <span className="text-primary text-glow-cyan">Statistics</span>
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-card border border-glow rounded-lg p-6 text-center box-glow-cyan hover:border-primary/50 transition-colors duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-display font-black text-primary text-glow-cyan">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-body mt-2 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
