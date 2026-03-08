// components/NewsletterForm.tsx
'use client';
import React from 'react';

export default function NewsletterForm() {
    const [email, setEmail] = React.useState('');

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        // Ici tu peux appeler une API ou stocker en localStorage
        console.log('subscribe', email);
        setEmail('');
        alert("Merci ! Vous êtes inscrit(e).");
    }

    return (
        <form onSubmit={handleSubmit} className="d-flex gap-2">
            <input
                className="form-control form-control-sm"
                placeholder="Votre email"
                aria-label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button className="btn btn-cta btn-sm" type="submit">S'inscrire</button>
        </form>
    );
}
