import { motion } from "framer-motion";

const achievements = [
  { year: "2022", event: "TEC BGMI Invitational S4", place: "🥇 1st", team: "Global Esports", prize: "—" },
  { year: "2022", event: "BGMI Masters Series S1", place: "🥇 1st", team: "Global Esports", prize: "+ Dost Award" },
  { year: "2023", event: "Skyesports Champions Series", place: "🥇 1st", team: "Blind eSports", prize: "—" },
  { year: "2023", event: "Skyesports Championship 5.0", place: "🥇 1st", team: "Blind eSports", prize: "—" },
  { year: "2023", event: "BGMI Pro Series 2023", place: "🥇 1st", team: "Blind eSports", prize: "MVP Award" },
  { year: "2024", event: "ESL Snapdragon Pro Series", place: "🥈 2nd", team: "Team SouL", prize: "—" },
  { year: "2024", event: "BGIS 2024", place: "4th", team: "Team SouL", prize: "—" },
  { year: "2024", event: "BGMI Masters Series S3", place: "🥇 1st", team: "Team SouL", prize: "Fan Fav. Award" },
  { year: "2025", event: "BGMI Masters Series S4", place: "🥉 3rd", team: "Team SouL", prize: "—" },
  { year: "2025", event: "CEGC 2025", place: "🥇 1st", team: "Team SouL", prize: "Best IGL Award" },
];

const AchievementsShowcase = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-display font-bold uppercase text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Tournament <span className="text-accent text-glow-gold">Achievements</span>
        </motion.h2>
        <motion.p
          className="text-center text-muted-foreground font-body mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          $91,435+ earned across 43+ tournaments
        </motion.p>

        {/* Awards row */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {[
            { label: "Best IGL", year: "2025", emoji: "🧠" },
            { label: "Fan Favourite", year: "2024", emoji: "❤️" },
            { label: "MVP", year: "2023", emoji: "⭐" },
            { label: "Dost Award", year: "2022", emoji: "🤝" },
          ].map((award, i) => (
            <motion.div
              key={award.label}
              className="flex items-center gap-3 px-5 py-3 bg-card border border-glow rounded-lg box-glow-cyan"
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-2xl">{award.emoji}</span>
              <div>
                <p className="font-display text-sm font-bold text-foreground">{award.label}</p>
                <p className="font-body text-xs text-muted-foreground">{award.year}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Results table */}
        <div className="max-w-4xl mx-auto">
          <div className="hidden md:grid grid-cols-[80px_1fr_100px_150px_140px] gap-2 px-4 py-2 text-xs font-display uppercase tracking-widest text-muted-foreground mb-2">
            <span>Year</span>
            <span>Tournament</span>
            <span>Place</span>
            <span>Team</span>
            <span>Notes</span>
          </div>

          {achievements.map((a, i) => (
            <motion.div
              key={`${a.event}-${a.year}`}
              className="grid grid-cols-1 md:grid-cols-[80px_1fr_100px_150px_140px] gap-2 md:gap-2 px-4 py-3 rounded-lg mb-2 bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-card transition-all duration-300 group"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <span className="font-display text-xs text-accent text-glow-gold md:text-sm">
                {a.year}
              </span>
              <span className="font-body text-foreground font-semibold text-sm md:text-base group-hover:text-primary transition-colors">
                {a.event}
              </span>
              <span className="font-display text-sm">
                {a.place}
              </span>
              <span className="font-body text-xs text-muted-foreground md:text-sm">
                {a.team}
              </span>
              <span className="font-body text-xs text-accent/80">
                {a.prize !== "—" ? a.prize : ""}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsShowcase;
