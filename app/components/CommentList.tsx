// components/CommentList.tsx
import React from 'react';

export default function CommentList({ comments }: { comments: any[] }) {
    if (!comments || comments.length === 0) return <p className="text-muted">Aucun commentaire pour l’instant.</p>;
    return (
        <ul className="space-y-4">
            {comments.map(c => (
                <li key={c.id} className="bg-white border rounded p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                        <strong>{c.author}</strong>
                        <span className="text-sm text-muted">{new Date(c.createdAt).toLocaleString()}</span>
                    </div>
                    <p className="whitespace-pre-line">{c.body}</p>
                </li>
            ))}
        </ul>
    );
}
