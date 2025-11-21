import { Phone, ShoppingBasket } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(255,255,255,0.08),transparent)]" />
      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#8A1C2B] flex items-center justify-center ring-2 ring-white/60 shadow-lg">
              <span className="text-2xl text-[#F7F1E5] font-black">MA</span>
            </div>
            <div>
              <p className="text-sm tracking-[0.2em] uppercase text-[#F7F1E5]/80">Maison Agnoletti</p>
              <h1 className="text-2xl md:text-3xl font-serif text-[#F7F1E5]">Atelier de pâtes fraîches</h1>
            </div>
          </div>
          <a href="tel:+33000000000" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F7F1E5] text-[#7A1E2C] font-medium shadow/30 shadow-black/20 hover:shadow-lg transition">
            <Phone size={18} />
            <span>Commander</span>
          </a>
        </header>

        <div className="mt-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#F7F1E5]">
              Des pâtes fraîches artisanales,
              <br /> façonnées chaque matin
            </h2>
            <p className="mt-5 text-lg md:text-xl text-[#F7F1E5]/80 max-w-prose">
              Maison Agnoletti n’est pas un restaurant : nous préparons des pâtes à
              emporter, pour partager un repas chaleureux à la maison. Des recettes
              courtes, de beaux produits, et le goût du fait-main.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#carte" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#F7F1E5] text-[#7A1E2C] font-semibold shadow hover:-translate-y-0.5 transition">
                <ShoppingBasket size={18} />
                Découvrir nos pâtes
              </a>
              <a href="#infos" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#F7F1E5]/40 text-[#F7F1E5] font-semibold hover:bg-[#F7F1E5]/10 transition">
                Comment ça marche ?
              </a>
            </div>
            <p className="mt-4 text-sm text-[#F7F1E5]/70">
              Retrait à l’atelier – cuisson en quelques minutes chez vous
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-[#8A1C2B]/40 blur-2xl opacity-50" />
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden ring-1 ring-white/20 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1521389508051-d7ffb5dc8bbf?q=80&w=1400&auto=format&fit=crop"
                alt="Pâtes fraîches artisanales"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-sm text-[#F7F1E5]/90">
                  Œufs fermiers, farines locales, façonnage à la main
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
