// components/Footer.tsx
import React from 'react';

export default function Footer() {
    return (
        <footer className="site-footer compact" role="contentinfo" aria-label="Pied de page Cozina">
            <div className="container d-flex align-items-center justify-content-center">
                <div className="d-flex align-items-center">
                    <div className="brand">Cozina</div>
                    <div className="sub">© {new Date().getFullYear()}</div>
                </div>
            </div>
        </footer>
    );
}
