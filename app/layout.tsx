// app/layout.tsx
import './globals.css';
import React from 'react';
import Footer from './components/Footer';

export const metadata = { title: 'Cozina', description: 'Blog' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr">
        <body>
        <Header />
        <main className="container py-5">{children}</main>
        <Footer />
        </body>
        </html>
    );
}

function Header() {
    return (
        <header className="site-header">
            <div className="container d-flex align-items-center justify-content-between py-3">
                {/* Left: logo */}
                <a className="d-flex align-items-center text-decoration-none logo-link" href="/">
                    <div className="brand">Cozina</div>
                    <div className="ms-2 logo-sub">Blog</div>
                </a>

                {/* Center: main nav (Articles centered) */}
                <nav className="nav-center">
                    <a className="nav-link" href="/articles">Articles</a>
                </nav>

                {/* Right: actions */}
                <div className="d-flex align-items-center gap-2">
                    <a className="btn btn-ghost text-muted" href="/search" aria-label="Recherche">
                        <i className="bi bi-search" />
                    </a>
                    <a className="btn btn-ghost text-muted" href="/cart" aria-label="Panier">
                        <i className="bi bi-bag" />
                    </a>
                    <a className="btn btn-cta" href="/new">Écrire</a>
                </div>
            </div>
        </header>
    );
}
