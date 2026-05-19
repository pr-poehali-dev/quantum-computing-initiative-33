const places = [
  {
    emoji: "🏰",
    title: "Казанский Кремль",
    img: "https://cdn.poehali.dev/projects/58c40bb6-0a30-4fcc-b759-d301f35e3590/files/10c90412-fbcd-45a3-8523-a65bf52391c7.jpg",
    desc: "Древняя крепость в самом центре Казани, которой больше 1000 лет! Здесь находится знаменитая мечеть Кул-Шариф с голубыми куполами и Благовещенский собор. Внутри можно побывать в музее, увидеть пушки и полюбоваться видом на реку Казанку.",
    facts: ["Построен более 1000 лет назад", "Объект ЮНЕСКО", "9 башен"],
    time: "2–3 часа",
    price: "Бесплатно (вход на территорию)",
  },
  {
    emoji: "🎡",
    title: "Парк «Кырлай»",
    img: "https://cdn.poehali.dev/projects/58c40bb6-0a30-4fcc-b759-d301f35e3590/files/73136ee7-ebcb-418e-bf79-7270cd5b3f35.jpg",
    desc: "Самый большой парк развлечений Казани с более чем 50 аттракционами! Колесо обозрения высотой 50 метров, водные горки, американские горки и весёлые карусели для детей любого возраста. Летом здесь проходят праздники и шоу-программы.",
    facts: ["50+ аттракционов", "Колесо высотой 50 м", "Водные горки летом"],
    time: "Целый день",
    price: "Платно (билеты на аттракционы)",
  },
  {
    emoji: "🐘",
    title: "Казанский зоопарк",
    img: "https://cdn.poehali.dev/projects/58c40bb6-0a30-4fcc-b759-d301f35e3590/files/7a40d909-5dcc-43f5-bd2f-851fb78e7563.jpg",
    desc: "Зоопарк «Река Замбези» — настоящая Африка в Казани! Здесь живут слоны, жирафы, тигры, пингвины, крокодилы и ещё более 300 видов животных. Можно покормить козочек и кроликов в контактном зоопарке и посмотреть представления с животными.",
    facts: ["300+ видов животных", "Контактный зоопарк", "Шоу с животными"],
    time: "3–4 часа",
    price: "Платно",
  },
  {
    emoji: "🌊",
    title: "Озеро Кабан",
    img: "https://cdn.poehali.dev/projects/58c40bb6-0a30-4fcc-b759-d301f35e3590/files/068cd25a-964f-4d0d-806f-941900eba6c3.jpg",
    desc: "Красивое озеро в центре города с длинной набережной. Можно кататься на велосипеде, самокате, арендовать катамаран или просто гулять и наблюдать за утками. Летом здесь проводятся фестивали, ярмарки и концерты под открытым небом.",
    facts: ["Набережная 4 км", "Прокат велосипедов", "Летние фестивали"],
    time: "1–2 часа",
    price: "Бесплатно (прокат платный)",
  },
  {
    emoji: "🚣",
    title: "Прогулка по реке Казанке",
    img: "https://cdn.poehali.dev/projects/58c40bb6-0a30-4fcc-b759-d301f35e3590/files/10d46e9b-c9f3-4a2d-81bd-f5e57ab1cd84.jpg",
    desc: "Настоящее приключение — прогулка на теплоходе по реке Казанке! Прямо с воды открывается потрясающий вид на Кремль и мечеть Кул-Шариф. Экскурсионные катера отходят от Речного порта, маршруты разной длины — от 30 минут до 2 часов.",
    facts: ["Вид на Кремль с воды", "Маршруты 30 мин – 2 ч", "От Речного порта"],
    time: "1–2 часа",
    price: "Платно",
  },
  {
    emoji: "🎨",
    title: "Музей Габдуллы Тукая",
    img: "https://cdn.poehali.dev/projects/58c40bb6-0a30-4fcc-b759-d301f35e3590/files/646d53a6-06c7-49a5-a636-5ab23bc27a34.jpg",
    desc: "Музей великого татарского поэта Габдуллы Тукая — автора знаменитых сказок «Шурале» и «Водяная». Интерактивные выставки, иллюстрации к сказкам и увлекательные экскурсии. Здесь можно послушать татарские народные песни и узнать о культуре Татарстана.",
    facts: ["Интерактивные выставки", "Сказки и легенды", "Экскурсии для детей"],
    time: "1–1.5 часа",
    price: "Льготный билет для школьников",
  },
];

const activities = [
  { emoji: "🚴", text: "Велопрогулки по паркам" },
  { emoji: "📚", text: "Читать книги в тени" },
  { emoji: "🎭", text: "Детские спектакли в театрах" },
  { emoji: "🏊", text: "Плавание в бассейне" },
  { emoji: "🎯", text: "Мастер-классы и кружки" },
  { emoji: "🌿", text: "Экскурсии на природу" },
  { emoji: "✏️", text: "Рисовать на пленэре" },
  { emoji: "🏕️", text: "Поход с палатками" },
  { emoji: "⚽", text: "Спортивные секции" },
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
          6 классных мест, которые стоит посетить этим летом в Казани
        </p>

        <div className="flex flex-col gap-20 mb-24">
          {places.map((place, index) => (
            <div
              key={place.title}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 items-center`}
            >
              <div className="w-full lg:w-1/2 h-72 lg:h-96 rounded-2xl overflow-hidden shadow-xl flex-shrink-0">
                <img
                  src={place.img}
                  alt={place.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <div className="text-4xl mb-3">{place.emoji}</div>
                <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-3">{place.title}</h3>
                <p className="text-neutral-600 leading-relaxed mb-5 text-base">{place.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {place.facts.map((fact) => (
                    <span
                      key={fact}
                      className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {fact}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-5 text-sm text-neutral-500 border-t border-neutral-100 pt-4">
                  <span>⏱ <strong className="text-neutral-700">{place.time}</strong></span>
                  <span>💰 <strong className="text-neutral-700">{place.price}</strong></span>
                </div>
              </div>
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
