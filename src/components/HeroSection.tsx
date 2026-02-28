import { motion } from "framer-motion";
import nakulPhoto from "@/assets/nakul-photo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-accent/5 blur-[100px]" />

      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 relative z-10">
        {/* Text */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Team Soul • BGMI
          </motion.p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black uppercase leading-none mb-2">
            <span className="text-foreground">Soul</span>
            <br />
            <span className="text-primary text-glow-cyan">Nakul</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-body mt-6 max-w-md mx-auto lg:mx-0">
            Dominating the battlegrounds with precision, strategy, and an unwavering will to win.
          </p>

          <motion.div
            className="flex gap-4 mt-8 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="#stats"
              className="px-8 py-3 bg-primary text-primary-foreground font-display text-sm uppercase tracking-wider rounded-sm hover:shadow-[0_0_30px_hsl(185_100%_50%/0.4)] transition-shadow duration-300"
            >
              View Stats
            </a>
            <a
              href="#about"
              className="px-8 py-3 border border-glow text-primary font-display text-sm uppercase tracking-wider rounded-sm hover:bg-primary/10 transition-colors duration-300"
            >
              About
            </a>
          </motion.div>
        </motion.div>

        {/* Photo */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-b from-primary/30 to-accent/20 rounded-2xl blur-xl" />
            <img
              src={nakulPhoto}
              alt="Soul Nakul - Esports Player"
              className="relative w-72 md:w-96 rounded-2xl object-cover border border-glow"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-5 h-8 border-2 border-primary/30 rounded-full flex justify-center pt-1">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
