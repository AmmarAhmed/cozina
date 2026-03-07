"use client"

import { useState } from "react"

interface Post {
    id: number
    title: string
    content: string
}

interface Props {
    onAddPost: (post: Post) => void
}

export default function NewPostForm({ onAddPost }: Props) {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!title || !content) return
        const newPost = {
            id: Date.now(),
            title,
            content
        }
        onAddPost(newPost)
        setTitle("")
        setContent("")
    }

    return (
        <form onSubmit={handleSubmit} className="border p-6 rounded-xl mb-8 bg-gray-50 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Écrire un nouvel article</h2>

            <input
                type="text"
                placeholder="Titre"
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
            />

            <textarea
                placeholder="Contenu"
                value={content}
                onChange={e => setContent(e.target.value)}
                className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 h-32"
            />

            <button
                type="submit"
                className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition"
            >
                Ajouter
            </button>
        </form>
    )
}