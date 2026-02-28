import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import { motion } from "framer-motion";
import trophyKiss from "@/assets/trophy-kiss.png";
import proSeries from "@/assets/pro-series.png";
import teamPhoto from "@/assets/team-photo.jpeg";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pt-16">
      <HeroSection />
      <StatsSection />

      {/* Instagram milestone */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
        <motion.div
          className="container mx-auto px-6 text-center relative z-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-6 py-3 bg-accent/10 border border-accent/30 rounded-full mb-4">
            <span className="font-display text-accent text-glow-gold text-sm uppercase tracking-widest">
              🎉 New Milestone!
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-black uppercase mb-3">
            <span className="text-accent text-glow-gold">100K</span> on Instagram
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-lg mx-auto">
            Soul Nakul just hit 100K followers — love from the BGMI community! 🙌
          </p>
        </motion.div>
      </section>

      {/* Featured photos */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-display font-bold uppercase text-center mb-10">
            Featured <span className="text-primary text-glow-cyan">Moments</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: trophyKiss, label: "CEGC 2025 Champion" },
              { src: proSeries, label: "BMPS 2023 (Blind eSports)" },
              { src: teamPhoto, label: "Squad Goals" },
            ].map((img, i) => (
              <motion.div
                key={img.label}
                className="relative rounded-lg overflow-hidden border border-glow group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full aspect-[3/4] object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 font-display text-sm text-primary uppercase text-glow-cyan">
                  {img.label}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/gallery"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground font-display text-sm uppercase tracking-wider rounded-sm hover:shadow-[0_0_30px_hsl(185_100%_50%/0.4)] transition-shadow duration-300"
            >
              View Full Gallery →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="font-display text-xl font-bold uppercase text-primary text-glow-cyan mb-2">
            Soul Nakul
          </p>
          <p className="text-sm text-muted-foreground font-body">
            Built with ❤️ for the BGMI community
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
