const menu = [
  {
    name: "Tagliatelles",
    desc: "Pâtes longues aux œufs – texture souple, parfaites au beurre-sauge.",
    price: "2,80€ / 100g",
  },
  {
    name: "Ravioli ricotta-épinards",
    desc: "Farce fondante, ricotta artisanale, épinards frais.",
    price: "3,60€ / 100g",
  },
  {
    name: "Agnolotti à la viande",
    desc: "Classique du Piémont, mijoté de bœuf et porc, jus corsé.",
    price: "3,90€ / 100g",
  },
  {
    name: "Gnocchi de pomme de terre",
    desc: "Moelleux et légers, délicieux poêlés avec parmesan.",
    price: "2,90€ / 100g",
  },
];

const Menu = () => {
  return (
    <section id="carte" className="py-16 md:py-24 bg-[#F7F1E5]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="md:flex md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-[#7A1E2C] font-bold">Nos pâtes du moment</h2>
            <p className="text-[#7A1E2C]/80 mt-2">
              Sélection courte, qui change selon les arrivages et la saison.
            </p>
          </div>
          <p className="text-sm text-[#7A1E2C]/70 mt-4 md:mt-0">
            Prix au poids – cuisson et conseils fournis à la commande
          </p>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {menu.map((item) => (
            <div key={item.name} className="rounded-2xl bg-white shadow-sm ring-1 ring-[#7A1E2C]/10 p-6">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-semibold text-[#7A1E2C]">{item.name}</h3>
                <span className="text-sm font-medium text-[#7A1E2C] bg-[#7A1E2C]/10 px-3 py-1 rounded-full">{item.price}</span>
              </div>
              <p className="mt-2 text-[#7A1E2C]/80">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
