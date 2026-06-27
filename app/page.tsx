import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section
        style={{ backgroundColor: "var(--noir)" }}
        className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      >
        <p
          style={{ color: "var(--or)", letterSpacing: "0.3em" }}
          className="text-sm uppercase mb-4"
        >
          Collection exclusive
        </p>
        <h1
          style={{ color: "var(--beige)" }}
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
          style={{
            borderColor: "var(--or)",
            color: "var(--or)",
          }}
          className="border px-10 py-3 text-sm uppercase tracking-widest hover:opacity-70 transition-opacity"
        >
          Découvrir la collection
        </Link>
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
                style={{ color: "var(--noir)" }}
                className="text-xl font-light tracking-widest uppercase mb-3"
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

      {/* CTA WhatsApp */}
      <section
        style={{ backgroundColor: "var(--noir)" }}
        className="py-16 px-6 text-center"
      >
        <p
          style={{ color: "var(--or)", letterSpacing: "0.2em" }}
          className="text-xs uppercase mb-4"
        >
          Une question ?
        </p>
        <h2
          style={{ color: "var(--beige)" }}
          className="text-3xl font-light mb-8"
        >
          Contactez-nous sur Vinted
        </h2>
        <a
          href="https://www.vinted.fr/member/270549728-saraahbt01"
          target="_blank"
          rel="noopener noreferrer"
          style={{ backgroundColor: "var(--noir)", color: "var(--beige)" }}
          className="w-full max-w-xs py-4 text-xs uppercase tracking-widest hover:opacity-70 transition-opacity text-center"
          aria-label="Voir la boutique SAERA sur Vinted"
        >
          Vinted
        </a>
      </section>
    </main>
  );
}