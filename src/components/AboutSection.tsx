import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center uppercase mb-8">
            About <span className="text-accent text-glow-gold">Nakul</span>
          </h2>

          <div className="bg-card border border-glow rounded-lg p-8 md:p-12 box-glow-cyan">
            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-6">
              Soul Nakul is one of the most skilled BGMI esports players representing
              <span className="text-primary font-semibold"> Team Soul</span> — India's most iconic
              esports organization. Known for his aggressive gameplay, sharp reflexes, and
              clutch plays, Nakul has made a name for himself in the competitive gaming scene.
            </p>
            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8">
              From dominating scrims to delivering under pressure in major tournaments,
              Soul Nakul continues to push the boundaries of what's possible on the
              battlegrounds. His dedication to the craft and hunger for victory make him
              a force to be reckoned with.
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              {["BGMI", "Team Soul", "IGL", "Assaulter", "Clutch King"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 border border-glow rounded-full text-xs font-display uppercase tracking-wider text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
