import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "SAERA — Robes kabyles modernes",
  description: "Découvrez SAERA, votre boutique de robes kabyles modernes. Livraison partout en France et en Europe.",
};

function SeparateurKabyle() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", padding: "8px 0" }}>
      <div style={{ height: "1px", width: "60px", backgroundColor: "var(--or)", opacity: 0.5 }} />
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="20" y="4" width="11" height="11" transform="rotate(45 20 4)" fill="none" stroke="#C9A84C" strokeWidth="1"/>
        <rect x="20" y="4" width="6" height="6" transform="rotate(45 20 4) translate(2.5 2.5)" fill="#C9A84C" opacity="0.6"/>
        <line x1="20" y1="18" x2="20" y2="36" stroke="#C9A84C" strokeWidth="1" opacity="0.5"/>
        <line x1="12" y1="26" x2="28" y2="26" stroke="#C9A84C" strokeWidth="1" opacity="0.5"/>
        <path d="M8 20 L14 26 L8 32" fill="none" stroke="#C9A84C" strokeWidth="1" opacity="0.4"/>
        <path d="M32 20 L26 26 L32 32" fill="none" stroke="#C9A84C" strokeWidth="1" opacity="0.4"/>
      </svg>
      <div style={{ height: "1px", width: "60px", backgroundColor: "var(--or)", opacity: 0.5 }} />
    </div>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={cormorant.variable}>
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
              style={{ color: "var(--or)", letterSpacing: "0.3em", fontFamily: "var(--font-cormorant)" }}
              className="text-2xl font-light"
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

        {/* Séparateur kabyle avant footer */}
        <div style={{ backgroundColor: "var(--noir)", paddingTop: "16px" }}>
          <SeparateurKabyle />
        </div>

        {/* Footer */}
        <footer
          style={{ backgroundColor: "var(--noir)", borderTop: "1px solid #1a1a1a" }}
          className="py-10 px-6 text-center"
        >
          <p
            style={{ color: "var(--or)", letterSpacing: "0.3em", fontFamily: "var(--font-cormorant)" }}
            className="text-2xl font-light mb-2"
          >
            SAERA
          </p>
          <p style={{ color: "var(--beige)", opacity: 0.4 }} className="text-xs mb-6">
            © {new Date().getFullYear()} SAERA — Tous droits réservés
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://vinted.fr/member/saera"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--beige)", opacity: 0.5 }}
              className="text-xs uppercase tracking-widest hover:opacity-100 transition-opacity"
              aria-label="Voir la boutique SAERA sur Vinted"
            >
              Vinted
            </a>
            <a
              href="https://instagram.com/saera"
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