// components/Header.tsx
import React from 'react';

export default function Header() {
    return (
        <header className="site-header">
            <div className="container d-flex align-items-center justify-content-between py-3" style={{position:'relative'}}>
                {/* Left: logo linking to home */}
                <a className="logo-link" href="/">
                    <div className="brand">Cozina</div>
                </a>

                {/* Center: Articles */}
                <nav className="nav-center" aria-label="Navigation principale">
                    <a className="nav-link" href="/articles">Articles</a>
                </nav>

                {/* Right: only Écrire */}
                <div className="d-flex align-items-center gap-2">
                    <a className="btn btn-cta" href="/new">Écrire</a>
                </div>
            </div>
        </header>
    );
}
