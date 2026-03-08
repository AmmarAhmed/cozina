// app/layout.tsx
import './globals.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr">
        <body>
        <Header />
        <main className="app-main">
            {children}
        </main>
        <Footer />
        </body>
        </html>
    );
}
