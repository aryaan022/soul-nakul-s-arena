import { motion } from "framer-motion";
import { useState } from "react";
import trophyKiss from "@/assets/trophy-kiss.png";
import trophyHold from "@/assets/trophy-hold.png";
import jerseyBack from "@/assets/jersey-back.png";
import casualStanding from "@/assets/casual-standing.png";
import proSeries from "@/assets/pro-series.png";
import batmanBike from "@/assets/batman-bike.png";
import teamPhoto from "@/assets/team-photo.jpeg";
import nakulPhoto from "@/assets/nakul-photo.png";

const photos = [
  { src: trophyKiss, caption: "CEGC 2025 Champion 🏆", category: "Tournament" },
  { src: trophyHold, caption: "Holding the CEGC Trophy", category: "Tournament" },
  { src: proSeries, caption: "BGMI Pro Series 2023 Winner", category: "Tournament" },
  { src: jerseyBack, caption: "iQOO Soul Nakul — नकुल", category: "Team" },
  { src: teamPhoto, caption: "With the squad 🤝", category: "Team" },
  { src: nakulPhoto, caption: "Ready to dominate", category: "Gaming" },
  { src: batmanBike, caption: "The Batman vibes 🦇", category: "Lifestyle" },
  { src: casualStanding, caption: "Off-duty Nakul", category: "Lifestyle" },
];

const categories = ["All", "Tournament", "Team", "Gaming", "Lifestyle"];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<number | null>(null);

  const filtered = filter === "All" ? photos : photos.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-6">
        <motion.h1
          className="text-4xl md:text-5xl font-display font-black uppercase text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Photo <span className="text-primary text-glow-cyan">Gallery</span>
        </motion.h1>
        <p className="text-center text-muted-foreground font-body mb-10">
          Moments from the battleground and beyond
        </p>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full font-display text-xs uppercase tracking-wider transition-all duration-300 ${
                filter === cat
                  ? "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(185_100%_50%/0.4)]"
                  : "border border-glow text-muted-foreground hover:text-foreground hover:border-primary/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((photo, i) => (
            <motion.div
              key={photo.caption}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: i * 0.05 }}
              className="group relative cursor-pointer overflow-hidden rounded-lg border border-glow bg-card"
              onClick={() => setSelected(i)}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-display text-sm uppercase text-primary text-glow-cyan">{photo.category}</p>
                <p className="font-body text-foreground">{photo.caption}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Video section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-display font-bold uppercase text-center mb-10">
            Gameplay <span className="text-accent text-glow-gold">Clips</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg overflow-hidden border border-glow box-glow-cyan">
              <video controls className="w-full aspect-video" preload="metadata">
                <source src="/videos/clip1.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="rounded-lg overflow-hidden border border-glow box-glow-cyan">
              <video controls className="w-full aspect-video" preload="metadata">
                <source src="/videos/clip2.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <motion.div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelected(null)}
        >
          <motion.img
            src={filtered[selected].src}
            alt={filtered[selected].caption}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
          />
          <p className="absolute bottom-8 left-1/2 -translate-x-1/2 font-display text-lg text-primary text-glow-cyan uppercase">
            {filtered[selected].caption}
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;
