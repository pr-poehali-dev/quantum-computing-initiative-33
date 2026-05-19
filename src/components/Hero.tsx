import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/58c40bb6-0a30-4fcc-b759-d301f35e3590/files/45009449-ebe3-4ca2-a6cc-eeb352c943a2.jpg"
          alt="Казань летом"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      <div className="relative z-10 text-center text-white px-6">
        <p className="text-base md:text-lg uppercase tracking-widest mb-4 opacity-80">3 класс · Казань · Лето 2026</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 drop-shadow-lg">
          ЛЕТО<br/>В КАЗАНИ
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto opacity-90 font-light drop-shadow">
          Куда сходить, чем заняться и как провести каникулы безопасно и весело!
        </p>
      </div>
    </div>
  );
}