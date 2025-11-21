const items = [
  {
    title: "Fraîche du jour",
    desc: "Pâtes laminées et garnies chaque matin pour une texture incomparable.",
  },
  {
    title: "Produits sourcés",
    desc: "Farines locales, œufs fermiers, légumes de saison. Rien de superflu.",
  },
  {
    title: "À emporter",
    desc: "Ce n’est pas un restaurant : on récupère ses pâtes et on partage chez soi.",
  },
  {
    title: "Conseils de cuisson",
    desc: "Temps précis, sauces simples : on vous guide pour réussir à la maison.",
  },
];

const Features = () => {
  return (
    <section className="py-16 md:py-24" id="infos">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-[#F7F1E5] font-semibold">{it.title}</h3>
              <p className="text-[#F7F1E5]/80 mt-2 text-sm leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
