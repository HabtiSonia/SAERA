import Link from "next/link";
import robes from "@/data/robes.json";

export default function Catalogue() {
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
          La collection
        </h1>
      </div>

      {/* Grille de robes */}
      <section
        className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        aria-label="Catalogue des robes"
      >
        {robes.map((robe) => (
          <Link
            key={robe.id}
            href={`/robes/${robe.slug}`}
            className="group block"
            aria-label={`Voir la ${robe.nom}`}
          >
            {/* Image */}
            <div
              style={{ aspectRatio: "3/4" }}
              className="w-full mb-4 overflow-hidden"
            >
              <img
                src={robe.images[0]}
                alt={robe.nom}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Infos */}
            <div className="flex justify-between items-start mt-3">
              <div>
                <h2
                  style={{ color: "var(--noir)" }}
                  className="text-sm uppercase tracking-widest mb-1 group-hover:opacity-60 transition-opacity"
                >
                  {robe.nom}
                </h2>
                <p style={{ color: "var(--noir)", opacity: 0.5 }} className="text-xs">
                  {robe.couleur}
                </p>
              </div>
              <p
                style={{ color: "var(--or)" }}
                className="text-sm font-light"
              >
                {robe.prix} €
              </p>
            </div>

            {/* Disponibilité */}
            {!robe.disponible && (
              <p
                style={{ color: "var(--bordeaux)" }}
                className="text-xs mt-2 uppercase tracking-widest"
              >
                Épuisé
              </p>
            )}
          </Link>
        ))}
      </section>
    </div>
  );
}