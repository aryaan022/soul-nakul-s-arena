import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CinematicIntro = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 400),
      setTimeout(() => setPhase(2), 1600),
      setTimeout(() => setPhase(3), 3000),
      setTimeout(() => setPhase(4), 4200),
      setTimeout(() => onComplete(), 5200),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 4 && (
        <motion.div
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Scanning lines effect */}
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute inset-0">
            <motion.div
              className="absolute left-0 right-0 h-px bg-primary/40"
              initial={{ top: "0%" }}
              animate={{ top: "100%" }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Glowing orbs */}
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full blur-[150px]"
            style={{ background: "hsl(185 100% 50% / 0.08)" }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute w-[300px] h-[300px] rounded-full blur-[100px]"
            style={{ background: "hsl(35 100% 55% / 0.06)" }}
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />

          <div className="relative z-10 text-center">
            {/* Phase 1: Team logo text */}
            <AnimatePresence mode="wait">
              {phase >= 1 && phase < 3 && (
                <motion.div
                  key="team"
                  initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6 }}
                >
                  <p className="font-display text-xs uppercase tracking-[0.5em] text-muted-foreground mb-4">
                    Team SouL Presents
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Phase 2: Name reveal */}
            <AnimatePresence>
              {phase >= 2 && (
                <motion.div
                  key="name"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.h1
                    className="text-6xl md:text-8xl lg:text-9xl font-display font-black uppercase leading-none"
                    initial={{ opacity: 0, letterSpacing: "0.5em" }}
                    animate={{ opacity: 1, letterSpacing: "0.1em" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                    <span className="text-foreground block">Soul</span>
                    <motion.span
                      className="text-primary text-glow-cyan block"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                    >
                      NakuL
                    </motion.span>
                  </motion.h1>

                  {/* Decorative lines */}
                  <div className="flex items-center justify-center gap-4 mt-6">
                    <motion.div
                      className="h-px bg-gradient-to-r from-transparent to-primary"
                      initial={{ width: 0 }}
                      animate={{ width: 100 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                    />
                    <motion.span
                      className="font-display text-[10px] uppercase tracking-[0.4em] text-accent text-glow-gold"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    >
                      IGL • Champion
                    </motion.span>
                    <motion.div
                      className="h-px bg-gradient-to-l from-transparent to-primary"
                      initial={{ width: 0 }}
                      animate={{ width: 100 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Corner accents */}
          {phase >= 1 && (
            <>
              <motion.div
                className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary/40"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              />
              <motion.div
                className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary/40"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              />
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CinematicIntro;
