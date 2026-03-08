// components/Footer.tsx
import React from 'react';

export default function Footer() {
    return (
        <footer className="site-footer" role="contentinfo" aria-label="Pied de page Cozina">
            <div className="container">
                <div className="row align-items-center">
                    {/* Left: brand */}
                    <div className="col-6 col-md-4 d-flex align-items-center">
                        <div className="brand">Cozina</div>
                        <div className="ms-2"><small>© {new Date().getFullYear()}</small></div>
                    </div>

                    {/* Middle: empty (keeps footer simple) */}
                    <div className="col-6 col-md-4 d-none d-md-flex justify-content-center"></div>
                </div>
            </div>
        </footer>
    );
}
