import { motion } from "framer-motion";
import jerseyBack from "@/assets/jersey-back.png";
import trophyKiss from "@/assets/trophy-kiss.png";
import proSeries from "@/assets/pro-series.png";

const timeline = [
  { year: "2021", title: "Joined Team Soul", desc: "Became part of India's most iconic BGMI esports org." },
  { year: "2023", title: "BGMI Pro Series Champion", desc: "Led the team to victory at Pro Series 2023." },
  { year: "2024", title: "Consistency & Growth", desc: "Delivered clutch performances across multiple LANs." },
  { year: "2025", title: "CEGC 2025 Champion", desc: "Won the CEGC championship and hit 100K on Instagram! 🎉" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Hero banner */}
        <motion.div
          className="relative rounded-2xl overflow-hidden mb-16 border border-glow"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <img src={jerseyBack} alt="Soul Nakul Jersey" className="w-full h-64 md:h-96 object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="absolute bottom-8 left-8">
            <h1 className="text-4xl md:text-6xl font-display font-black uppercase">
              <span className="text-foreground">About</span>{" "}
              <span className="text-primary text-glow-cyan">Nakul</span>
            </h1>
            <p className="text-accent font-display text-sm uppercase tracking-widest mt-2">
              iQOO Soul Nakul • "नकुल"
            </p>
          </div>
        </motion.div>

        {/* Bio */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-display font-bold uppercase mb-6">
              The <span className="text-accent text-glow-gold">Journey</span>
            </h2>
            <div className="space-y-4 text-muted-foreground font-body text-lg leading-relaxed">
              <p>
                Soul Nakul is one of BGMI's most feared assaulters. A member of the legendary
                <span className="text-primary font-semibold"> Team Soul</span>, he brings raw aggression
                paired with razor-sharp game sense to every match.
              </p>
              <p>
                From grinding ranked games to winning LAN championships, Nakul's journey is a testament
                to hard work and passion. He recently celebrated hitting
                <span className="text-accent font-semibold"> 100K followers on Instagram</span> — a milestone
                earned through pure skill and personality.
              </p>
              <p>
                Off the battleground, he's known for his Batman obsession 🦇, chill vibes,
                and love for the esports community.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-card border border-glow rounded-lg p-6 box-glow-cyan">
              <h3 className="font-display text-sm uppercase text-primary mb-4 tracking-widest">Quick Facts</h3>
              <div className="space-y-3 font-body">
                {[
                  ["IGN", "iQOOSouLNakuL"],
                  ["Team", "Team Soul (iQOO)"],
                  ["Role", "Assaulter / Flex"],
                  ["Game", "BGMI (Battlegrounds Mobile India)"],
                  ["Instagram", "100K+ Followers 🎉"],
                  ["Signature", "Clutch plays & aggressive pushes"],
                ].map(([key, val]) => (
                  <div key={key} className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground text-sm">{key}</span>
                    <span className="text-foreground text-sm font-semibold">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-display font-bold uppercase text-center mb-12">
            Career <span className="text-primary text-glow-cyan">Timeline</span>
          </h2>
          <div className="max-w-2xl mx-auto relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/0" />
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                className="relative pl-12 pb-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="absolute left-2 top-1 w-5 h-5 rounded-full border-2 border-primary bg-background" />
                <span className="font-display text-xs text-accent uppercase tracking-widest">{item.year}</span>
                <h3 className="font-display text-lg font-bold text-foreground mt-1">{item.title}</h3>
                <p className="text-muted-foreground font-body mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievement photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {[
            { src: trophyKiss, caption: "CEGC 2025 — Kissing the trophy 🏆" },
            { src: proSeries, caption: "BGMI Pro Series 2023 Champion" },
          ].map((img) => (
            <motion.div
              key={img.caption}
              className="relative rounded-lg overflow-hidden border border-glow group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <img src={img.src} alt={img.caption} className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background to-transparent">
                <p className="font-display text-sm text-primary uppercase">{img.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
