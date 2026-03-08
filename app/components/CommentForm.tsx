// components/CommentForm.tsx
'use client';
import React from 'react';
import { addCommentToArticle } from '../lib/clientData';

export default function CommentForm({ slug, onCommentAdded }: { slug: string; onCommentAdded?: (c:any)=>void }) {
    const [author, setAuthor] = React.useState('');
    const [body, setBody] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    async function submit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        try {
            const c = addCommentToArticle(slug, author.trim() || 'Anonyme', body.trim());
            setAuthor(''); setBody('');
            onCommentAdded?.(c);
        } catch (err) {
            alert('Impossible d’ajouter le commentaire');
        } finally { setLoading(false); }
    }

    return (
        <form onSubmit={submit} className="mb-6 space-y-3">
            <input value={author} onChange={e=>setAuthor(e.target.value)} placeholder="Ton nom" className="w-full border rounded px-3 py-2" />
            <textarea value={body} onChange={e=>setBody(e.target.value)} placeholder="Ton commentaire" className="w-full border rounded px-3 py-2" rows={4} required />
            <div className="flex gap-3">
                <button disabled={loading} className="bg-accent text-white px-4 py-2 rounded">{loading ? 'Envoi...' : 'Poster'}</button>
                <button type="button" onClick={()=>{ setAuthor(''); setBody(''); }} className="px-4 py-2 border rounded text-sm">Effacer</button>
            </div>
        </form>
    );
}
