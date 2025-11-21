import Hero from "./components/Hero";
import Features from "./components/Features";
import Menu from "./components/Menu";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-[#6B1521]">
      <div className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_-10%,rgba(247,241,229,0.15),transparent)]" />
        <div className="relative">
          <Hero />
          <Features />
          <Menu />
          <CTA />
          <footer className="py-10 border-t border-white/10">
            <div className="max-w-6xl mx-auto px-6 text-center">
              <p className="text-[#F7F1E5]/70">
                Maison Agnoletti — Atelier de pâtes fraîches. Ce n’est pas un restaurant :
                on emporte et on déguste chez soi.
              </p>
              <p className="mt-2 text-[#F7F1E5]/50 text-sm">© {new Date().getFullYear()} Tous droits réservés.</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
