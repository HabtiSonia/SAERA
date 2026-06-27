export default function APropos() {
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
          À propos
        </h1>
      </div>

      {/* Contenu */}
      <div className="max-w-2xl mx-auto px-6 py-20 text-center">
        <div
          style={{ backgroundColor: "var(--or)" }}
          className="w-8 h-px mx-auto mb-10"
        />
        <p
          style={{ color: "var(--noir)", opacity: 0.8 }}
          className="text-lg font-light leading-relaxed mb-8"
        >
          SAERA est une boutique dédiée aux robes kabyles modernes, pensées pour la femme d'aujourd'hui qui souhaite porter son héritage avec élégance.
        </p>
        <p
          style={{ color: "var(--noir)", opacity: 0.6 }}
          className="text-sm leading-relaxed mb-8"
        >
          Chaque robe est soigneusement sélectionnée pour allier broderies traditionnelles berbères et coupes contemporaines. Nos créations célèbrent la richesse de la culture kabyle tout en s'adaptant aux tendances actuelles.
        </p>
        <p
          style={{ color: "var(--noir)", opacity: 0.6 }}
          className="text-sm leading-relaxed mb-16"
        >
          Basée en France, nous livrons partout en France et en Europe via Vinted, pour que chaque femme puisse porter un morceau de cette culture unique, où qu'elle soit.
        </p>
        <div
          style={{ backgroundColor: "var(--or)" }}
          className="w-8 h-px mx-auto mb-10"
        />
        <p
          style={{ color: "var(--or)", letterSpacing: "0.3em" }}
          className="text-xs uppercase"
        >
          Élégance kabyle contemporaine
        </p>
      </div>

    </div>
  );
}