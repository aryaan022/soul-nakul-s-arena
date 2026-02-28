import { motion } from "framer-motion";

const InstagramEmbed = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent" />
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-display font-bold uppercase mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Follow on <span className="text-accent text-glow-gold">Instagram</span>
        </motion.h2>
        <motion.p
          className="text-muted-foreground font-body mb-10 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          @ig.nakul777 • 100K+ followers 🎉
        </motion.p>

        <motion.a
          href="https://www.instagram.com/ig.nakul777/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-4 px-10 py-5 bg-card border border-glow rounded-2xl box-glow-cyan group"
          whileHover={{ scale: 1.03, y: -4 }}
          transition={{ type: "spring", stiffness: 300 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center text-3xl">
            📸
          </div>
          <div className="text-left">
            <p className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
              @ig.nakul777
            </p>
            <p className="font-body text-sm text-muted-foreground">
              100K+ followers • BGMI Pro Player
            </p>
          </div>
          <span className="ml-4 px-4 py-2 bg-primary text-primary-foreground font-display text-xs uppercase tracking-wider rounded-full group-hover:shadow-[0_0_20px_hsl(185_100%_50%/0.5)] transition-shadow">
            Follow
          </span>
        </motion.a>
      </div>
    </section>
  );
};

export default InstagramEmbed;
