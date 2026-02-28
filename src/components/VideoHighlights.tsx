import { motion } from "framer-motion";

const clips = [
  { src: "/videos/clip1.mp4", title: "Tournament Highlights" },
  { src: "/videos/clip2.mp4", title: "Clutch Moments" },
];

const VideoHighlights = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-display font-bold uppercase text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Video <span className="text-primary text-glow-cyan">Highlights</span>
        </motion.h2>
        <motion.p
          className="text-center text-muted-foreground font-body mb-12 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Watch Nakul dominate the battlegrounds 🎮
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clips.map((clip, i) => (
            <motion.div
              key={clip.title}
              className="relative rounded-xl overflow-hidden border border-glow box-glow-cyan group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <video
                src={clip.src}
                controls
                playsInline
                preload="metadata"
                poster=""
                className="w-full aspect-video object-cover bg-card"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-background/80 backdrop-blur-sm border border-glow rounded-full">
                <span className="font-display text-xs uppercase tracking-wider text-primary">
                  {clip.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoHighlights;
