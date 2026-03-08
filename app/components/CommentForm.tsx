interface CommentProps {
    name: string
    text: string
}

export default function Comment({ name, text }: CommentProps) {
    return (
        <div className="border rounded-xl p-4 bg-gray-50 shadow-sm">
            <p className="font-bold text-gray-900">{name}</p>
            <p className="text-gray-800">{text}</p>
        </div>
    )
}