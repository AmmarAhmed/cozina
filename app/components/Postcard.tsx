interface PostCardProps {
    id: number
    title: string
    excerpt: string
}

export default function PostCard({ id, title, excerpt }: PostCardProps) {
    return (
        <a
            href={`/posts/${id}`}
            className="block bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition"
        >
            <h3 className="text-2xl font-bold mb-2 text-gray-900">{title}</h3>
            <p className="text-gray-700">{excerpt}</p>
            <span className="inline-block mt-4 px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700 transition">
        Lire l'article
      </span>
        </a>
    )
}