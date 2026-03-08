// app/articles/[slug]/page.tsx
'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { getArticleBySlug, addCommentToArticle } from '../../lib/clientData';
import CommentForm from '../../components/CommentForm';
import CommentList from '../../components/CommentList';

type Props = { params: { slug: string } };

export default function ArticlePage({ params }: Props) {
    const [article, setArticle] = React.useState<any>(null);
    const router = useRouter();

    React.useEffect(() => {
        const a = getArticleBySlug(params.slug);
        if (!a) { setArticle(null); return; }
        setArticle(a);
    }, [params.slug]);

    if (!article) return <div>Article introuvable</div>;

    // simple markdown-like rendering: convert lines starting with # to h1, ## to h2, and line breaks to <p>
    function renderContent(md: string) {
        const lines = md.split('\n');
        return lines.map((ln, i) => {
            if (ln.startsWith('### ')) return <h3 key={i} className="text-lg font-semibold mt-4">{ln.replace(/^###\s+/, '')}</h3>;
            if (ln.startsWith('## ')) return <h2 key={i} className="text-2xl font-bold mt-4">{ln.replace(/^##\s+/, '')}</h2>;
            if (ln.startsWith('# ')) return <h1 key={i} className="text-3xl font-extrabold mt-4">{ln.replace(/^#\s+/, '')}</h1>;
            if (ln.trim() === '') return <div key={i} className="my-2" />;
            return <p key={i} className="mt-2 leading-relaxed">{ln}</p>;
        });
    }

    return (
        <article>
            <h1 className="text-4xl font-extrabold mb-2">{article.title}</h1>
            <div className="text-sm text-muted mb-6">{new Date(article.createdAt).toLocaleString()}</div>
            <div className="prose max-w-none mb-8">{renderContent(article.content || '')}</div>

            <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Commentaires</h2>
                <CommentForm slug={article.slug} onCommentAdded={(c) => {
                    // refresh local article state
                    const a = getArticleBySlug(article.slug);
                    setArticle(a);
                }} />
                <CommentList comments={article.comments || []} />
            </section>
        </article>
    );
}
