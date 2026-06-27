import Link from "next/link";
import MotifKabyle from "@/components/MotifKabyle";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section
        style={{ backgroundColor: "var(--noir)", position: "relative" }}
        className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      >
        <MotifKabyle />
        <div style={{ position: "relative", zIndex: 1 }}>
          <p
            style={{ color: "var(--or)", letterSpacing: "0.3em" }}
            className="text-sm uppercase mb-4"
          >
            Collection exclusive
          </p>
          <h1
            style={{ color: "var(--beige)", fontFamily: "var(--font-cormorant)" }}
            className="text-6xl font-light mb-6"
          >
            SAERA
          </h1>
          <p
            style={{ color: "var(--beige)", opacity: 0.7 }}
            className="text-lg font-light max-w-md mb-10"
          >
            Élégance kabyle contemporaine. Broderies traditionnelles, silhouettes modernes. Livraison partout en France et en Europe.
          </p>
          <Link
            href="/catalogue"
            style={{ borderColor: "var(--or)", color: "var(--or)" }}
            className="border px-10 py-3 text-sm uppercase tracking-widest hover:opacity-70 transition-opacity"
          >
            Découvrir la collection
          </Link>
        </div>
      </section>

      {/* Section valeurs */}
      <section
        style={{ backgroundColor: "var(--beige)" }}
        className="py-20 px-6"
      >
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            { titre: "Élégance kabyle", texte: "Des robes qui marient broderies traditionnelles et coupes contemporaines." },
            { titre: "Authenticité", texte: "L'art du tissage berbère revisité pour la femme moderne." },
            { titre: "Livraison", texte: "Expédition via Vinted, partout en France et en Europe." },
          ].map((item) => (
            <div key={item.titre}>
              <div
                style={{ backgroundColor: "var(--or)" }}
                className="w-8 h-px mx-auto mb-6"
              />
              <h2
                style={{ color: "var(--noir)", fontFamily: "var(--font-cormorant)" }}
                className="text-2xl font-light tracking-widest uppercase mb-3"
              >
                {item.titre}
              </h2>
              <p style={{ color: "var(--noir)", opacity: 0.6 }} className="text-sm leading-relaxed">
                {item.texte}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Vinted */}
      <section
        style={{ backgroundColor: "var(--noir)", position: "relative" }}
        className="py-16 px-6 text-center"
      >
        <MotifKabyle />
        <div style={{ position: "relative", zIndex: 1 }}>
          <p
            style={{ color: "var(--or)", letterSpacing: "0.2em" }}
            className="text-xs uppercase mb-4"
          >
            Notre boutique
          </p>
          <h2
            style={{ color: "var(--beige)", fontFamily: "var(--font-cormorant)" }}
            className="text-3xl font-light mb-8"
          >
            Retrouvez-nous sur Vinted
          </h2>
          <a
            href="https://vinted.fr/member/saera"
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: "var(--or)", color: "var(--noir)" }}
            className="inline-block px-10 py-3 text-sm uppercase tracking-widest hover:opacity-80 transition-opacity"
            aria-label="Voir la boutique SAERA sur Vinted"
          >
            Voir la boutique
          </a>
        </div>
      </section>
    </main>
  );
}