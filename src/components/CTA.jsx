const CTA = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-[#7A1E2C] to-[#4F1019] ring-1 ring-white/10">
          <div className="p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif text-[#F7F1E5] font-bold">
                Passez commande, venez récupérer, partagez chez vous
              </h3>
              <p className="mt-3 text-[#F7F1E5]/85">
                Ouvert du mardi au samedi. Préparation le jour-même. Contactez-nous pour
                connaître les disponibilités et réserver vos pâtes.
              </p>
            </div>
            <div className="md:text-right">
              <a href="tel:+33000000000" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#F7F1E5] text-[#7A1E2C] font-semibold shadow hover:-translate-y-0.5 transition">
                Appeler l'atelier
              </a>
              <p className="mt-3 text-sm text-[#F7F1E5]/70">
                Retrait sur place uniquement – pas de livraison, pas de salle
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
