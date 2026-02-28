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
              Nakul "NakuL" Sharma is one of BGMI's top In-game Leaders (IGL), currently representing
              <span className="text-primary font-semibold"> Team SouL</span> — India's most iconic
              esports organization. After proving himself with Global Esports and Blind eSports,
              he joined Team SouL on January 1, 2024, bringing elite strategy and leadership.
            </p>
            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8">
              With 43+ tournaments, $91K+ in earnings, and titles like BGMI Masters Series,
              BGMI Pro Series, and CEGC 2025, Nakul continues to dominate the competitive
              scene. His hunger for victory makes him a force to be reckoned with.
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              {["BGMI", "Team SouL", "IGL", "Strategist", "Champion"].map((tag) => (
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
