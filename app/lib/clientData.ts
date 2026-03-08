// lib/clientData.ts
// Simple client-side store using localStorage. Pas de serveur, pas de DB.
export type Comment = { id: string; author: string; body: string; createdAt: string };
export type Article = { id: string; title: string; slug: string; content: string; createdAt: string; comments: Comment[] };

const KEY = 'cozina_articles_v1';

function slugifySimple(s: string) {
    return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function nowIso() { return new Date().toISOString(); }

export function loadAll(): Article[] {
    try {
        const raw = localStorage.getItem(KEY);
        if (!raw) return [];
        return JSON.parse(raw) as Article[];
    } catch { return []; }
}

export function saveAll(list: Article[]) {
    localStorage.setItem(KEY, JSON.stringify(list));
}

export function createArticle(title: string, content: string) {
    const list = loadAll();
    const slug = slugifySimple(title) || `a-${Date.now()}`;
    const article: Article = { id: Date.now().toString(), title, slug, content, createdAt: nowIso(), comments: [] };
    list.unshift(article);
    saveAll(list);
    return article;
}

export function getArticleBySlug(slug: string) {
    return loadAll().find(a => a.slug === slug) || null;
}

export function addCommentToArticle(slug: string, author: string, body: string) {
    const list = loadAll();
    const a = list.find(x => x.slug === slug);
    if (!a) throw new Error('not_found');
    const comment: Comment = { id: `${Date.now()}-${Math.random().toString(36).slice(2,8)}`, author, body, createdAt: nowIso() };
    a.comments.unshift(comment);
    saveAll(list);
    return comment;
}
