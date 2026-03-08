// app/new/page.tsx
'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { createArticle } from '../lib/clientData';

export default function NewArticlePage() {
    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');
    const router = useRouter();

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const a = createArticle(title.trim(), content);
        router.push(`/articles/${a.slug}`);
    }

    return (
        <div className="container mt-5">
            <h1 className="h3 mb-4">Nouvel article</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input className="form-control" value={title} onChange={e=>setTitle(e.target.value)} placeholder="Titre" required />
                </div>
                <div className="mb-3">
                    <textarea className="form-control" value={content} onChange={e=>setContent(e.target.value)} rows={12} placeholder="Contenu (Markdown basique)" required />
                </div>
                <div className="d-flex gap-2">
                    <button className="btn btn-primary" type="submit">Publier</button>
                    <a className="btn btn-outline-secondary" href="/">Annuler</a>
                </div>
            </form>
        </div>
    );
}
