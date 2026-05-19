import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const rules = [
  { emoji: "🌞", title: "Защищайся от солнца", desc: "Носи головной убор и наноси солнцезащитный крем. В жару отдыхай в тени!" },
  { emoji: "💧", title: "Пей больше воды", desc: "Летом нужно пить не менее 6–8 стаканов воды в день, чтобы не перегреться." },
  { emoji: "🏊", title: "Купайся только в разрешённых местах", desc: "Никогда не купайся один и только там, где есть спасатели." },
  { emoji: "🚗", title: "Будь осторожен на дороге", desc: "Переходи дорогу только на зелёный свет и по пешеходному переходу." },
  { emoji: "🔥", title: "Не играй с огнём", desc: "Не разжигай костры без взрослых. Огонь очень опасен!" },
  { emoji: "📱", title: "Всегда сообщай, где ты", desc: "Говори родителям, куда ты идёшь и когда вернёшься. Бери телефон заряженным." },
];

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div id="safety">
      <div
        ref={container}
        className="relative flex items-center justify-center h-[60vh] overflow-hidden"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
          <motion.div style={{ y }} className="relative w-full h-full">
            <img
              src="/images/mountain-landscape.jpg"
              alt="Летний пейзаж"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-sky-900/70 to-emerald-900/80" />
          </motion.div>
        </div>

        <div className="relative z-10 text-center text-white px-6">
          <p className="uppercase tracking-widest text-sm opacity-70 mb-3">Важно знать</p>
          <h2 className="text-5xl md:text-7xl font-bold drop-shadow-lg">
            ПРАВИЛА<br/>БЕЗОПАСНОСТИ
          </h2>
          <p className="mt-4 text-lg opacity-80">Соблюдай их — и лето будет классным!</p>
        </div>
      </div>

      <div className="bg-sky-50 py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rules.map((rule) => (
            <div
              key={rule.title}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-sky-100"
            >
              <div className="text-4xl mb-3">{rule.emoji}</div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">{rule.title}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">{rule.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
