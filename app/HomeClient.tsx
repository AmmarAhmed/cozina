// app/HomeClient.tsx
'use client';
import React from 'react';

export default function HomeClient() {
    const [articles, setArticles] = React.useState<any[]>([]);

    React.useEffect(() => {
        try {
            const raw = localStorage.getItem('cozina_articles_v1');
            if (raw) setArticles(JSON.parse(raw));
        } catch (e) {
            console.error('Erreur lecture localStorage', e);
        }
    }, []);

    return (
        <section>
            {articles.length === 0 ? (
                <p>Aucun article pour l’instant.</p>
            ) : (
                <ul>
                    {articles.map(a => (
                        <li key={a.slug}>{a.title}</li>
                    ))}
                </ul>
            )}
        </section>
    );
}
