export default function Contact() {
  return (
    <div style={{ backgroundColor: "var(--beige-clair)" }} className="min-h-screen">

      {/* En-tête */}
      <div
        style={{ backgroundColor: "var(--noir)" }}
        className="py-16 text-center"
      >
        <p
          style={{ color: "var(--or)", letterSpacing: "0.3em" }}
          className="text-xs uppercase mb-3"
        >
          SAERA
        </p>
        <h1
          style={{ color: "var(--beige)" }}
          className="text-4xl font-light tracking-widest"
        >
          Contact
        </h1>
      </div>

      {/* Contenu */}
      <div className="max-w-xl mx-auto px-6 py-20 text-center">
        <div
          style={{ backgroundColor: "var(--or)" }}
          className="w-8 h-px mx-auto mb-10"
        />
        <p
          style={{ color: "var(--noir)", opacity: 0.7 }}
          className="text-sm leading-relaxed mb-12"
        >
          Pour toute question sur une robe, une taille ou une commande, contactez-nous directement sur Vinted ou Instagram. Nous répondons dans les plus brefs délais.
        </p>

        {/* Boutons */}
        <div className="flex flex-col gap-4 items-center">
          <a
            href="https://www.vinted.fr/member/270549728-saraahbt01"
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: "var(--noir)", color: "var(--beige)" }}
            className="w-full max-w-xs py-4 text-xs uppercase tracking-widest hover:opacity-70 transition-opacity text-center"
            aria-label="Voir la boutique Vinted"
          >
            Vinted
          </a>
          <a
            href="https://www.instagram.com/saeradress?igsh=bmtkNWhsZm9rcnd0"
            target="_blank"
            rel="noopener noreferrer"
            style={{ border: "1px solid var(--noir)", color: "var(--noir)" }}
            className="w-full max-w-xs py-4 text-xs uppercase tracking-widest hover:opacity-70 transition-opacity text-center"
            aria-label="Contacter SAERA sur Instagram"
          >
            Instagram
          </a>
        </div>

        <div
          style={{ backgroundColor: "var(--or)" }}
          className="w-8 h-px mx-auto mt-16"
        />
      </div>

    </div>
  );
}