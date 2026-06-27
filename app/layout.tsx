import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SAERA — Robes élégantes",
  description: "Découvrez la collection SAERA, robes élégantes livrées partout en France et en Europe.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        {/* Navbar */}
        <header
          style={{ backgroundColor: "var(--noir)", borderBottom: "1px solid #222" }}
          className="sticky top-0 z-50"
        >
          <nav
            className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between"
            aria-label="Navigation principale"
          >
            <Link
              href="/"
              style={{ color: "var(--or)", letterSpacing: "0.3em" }}
              className="text-xl font-light"
              aria-label="SAERA - Retour à l'accueil"
            >
              SAERA
            </Link>
            <ul className="flex gap-8 list-none m-0 p-0" role="list">
              <li>
                <Link
                  href="/catalogue"
                  style={{ color: "var(--beige)" }}
                  className="text-sm uppercase tracking-widest hover:opacity-60 transition-opacity"
                >
                  Catalogue
                </Link>
              </li>
              <li>
                <Link
                  href="/a-propos"
                  style={{ color: "var(--beige)" }}
                  className="text-sm uppercase tracking-widest hover:opacity-60 transition-opacity"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  style={{ color: "var(--beige)" }}
                  className="text-sm uppercase tracking-widest hover:opacity-60 transition-opacity"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Contenu de chaque page */}
        <main id="contenu-principal">
          {children}
        </main>

        {/* Footer */}
        <footer
          style={{ backgroundColor: "var(--noir)", borderTop: "1px solid #222" }}
          className="py-10 px-6 text-center"
        >
          <p
            style={{ color: "var(--or)", letterSpacing: "0.3em" }}
            className="text-lg font-light mb-2"
          >
            SAERA
          </p>
          <p style={{ color: "var(--beige)", opacity: 0.4 }} className="text-xs">
            © {new Date().getFullYear()} SAERA — Tous droits réservés
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <a
              href="https://www.vinted.fr/member/270549728-saraahbt01"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--beige)", opacity: 0.5 }}
              className="text-xs uppercase tracking-widest hover:opacity-100 transition-opacity"
              aria-label="Voir la boutique SAERA sur Vinted"
                        >
              Vinted
            </a>
            <a
              href="https://www.instagram.com/saeradress?igsh=bmtkNWhsZm9rcnd0"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--beige)", opacity: 0.5 }}
              className="text-xs uppercase tracking-widest hover:opacity-100 transition-opacity"
              aria-label="Suivre SAERA sur Instagram"
            >
              Instagram
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}