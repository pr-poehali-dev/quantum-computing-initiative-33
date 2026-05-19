const places = [
  {
    emoji: "🏰",
    title: "Казанский Кремль",
    desc: "Древняя крепость с башнями и мечетью Кул-Шариф. Здесь можно узнать историю города и сделать красивые фото!",
  },
  {
    emoji: "🎡",
    title: "Парк «Кырлай»",
    desc: "Огромный парк аттракционов с каруселями, колесом обозрения и зоной водных горок — весело провести целый день!",
  },
  {
    emoji: "🐘",
    title: "Казанский зоопарк",
    desc: "Более 300 видов животных: слоны, тигры, жирафы и пингвины. Отличное место для семейной прогулки!",
  },
  {
    emoji: "🌊",
    title: "Озеро Кабан",
    desc: "Красивое городское озеро с набережной, велодорожками и прогулочными катамаранами. Свежо и приятно летом!",
  },
  {
    emoji: "🎨",
    title: "Музей Габдуллы Тукая",
    desc: "Узнай про великого татарского поэта, посмотри интерактивные выставки и послушай народные сказки!",
  },
  {
    emoji: "🚣",
    title: "Река Казанка",
    desc: "Прогулки на катере вдоль реки с видом на Кремль — незабываемые впечатления для всей семьи!",
  },
];

const activities = [
  { emoji: "🚴", text: "Велопрогулки по паркам" },
  { emoji: "📚", text: "Читать книги в тени" },
  { emoji: "🎭", text: "Детские спектакли в театрах" },
  { emoji: "🏊", text: "Плавание в бассейне" },
  { emoji: "🎯", text: "Мастер-классы и кружки" },
  { emoji: "🌿", text: "Экскурсии на природу" },
];

export default function Featured() {
  return (
    <div id="places" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-sm tracking-widest text-neutral-500 mb-3 text-center">
          Казань летом
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 text-center mb-4 leading-tight">
          Куда сходить?
        </h2>
        <p className="text-center text-neutral-500 text-lg mb-16 max-w-xl mx-auto">
          6 классных мест, которые стоит посетить этим летом
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {places.map((place) => (
            <div
              key={place.title}
              className="border border-neutral-100 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 bg-neutral-50"
            >
              <div className="text-4xl mb-3">{place.emoji}</div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">{place.title}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">{place.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 rounded-3xl p-10">
          <p className="uppercase text-sm tracking-widest text-amber-600 mb-3 text-center">
            На каникулах
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 text-center mb-10">
            Чем заняться летом?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {activities.map((a) => (
              <div
                key={a.text}
                className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm"
              >
                <span className="text-2xl">{a.emoji}</span>
                <span className="text-neutral-800 font-medium text-sm">{a.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
