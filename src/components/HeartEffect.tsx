import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Heart {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
}

const HeartEffect = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const generated: Heart[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: 14 + Math.random() * 22,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 3,
      opacity: 0.3 + Math.random() * 0.5,
    }));
    setHearts(generated);

    const timer = setTimeout(() => setVisible(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      <AnimatePresence>
        {hearts.map((h) => (
          <motion.div
            key={h.id}
            className="absolute text-pink-400"
            style={{ left: `${h.x}%`, fontSize: h.size, bottom: -40 }}
            initial={{ y: 0, opacity: 0, scale: 0.5, rotate: -15 + Math.random() * 30 }}
            animate={{
              y: -window.innerHeight - 100,
              opacity: [0, h.opacity, h.opacity, 0],
              scale: [0.5, 1, 1, 0.8],
              rotate: [-15, 10, -10, 15],
            }}
            transition={{
              duration: h.duration,
              delay: h.delay,
              ease: "easeOut",
            }}
          >
            ❤️
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default HeartEffect;
