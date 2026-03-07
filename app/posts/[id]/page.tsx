import { Typography, Box, Button, Divider } from "@mui/material";

const comments = [
    { id: 1, postId: 1, text: "Super article !" },
    { id: 2, postId: 1, text: "Merci pour les infos." },
];

export default function PostPage({ params }: { params: { id: string } }) {
    const postId = parseInt(params.id);
    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                Article {postId}
            </Typography>
            <Typography variant="body1" paragraph>
                Contenu complet de l'article {postId}...
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h6" gutterBottom>Commentaires</Typography>
            {comments.filter(c => c.postId === postId).map(c => (
                <Box key={c.id} sx={{ mb: 2, p: 2, backgroundColor: "#f5f5f5", borderRadius: 1 }}>
                    {c.text}
                </Box>
            ))}

            <Button variant="contained" sx={{ mt: 3, backgroundColor: "#111111", "&:hover": { backgroundColor: "#333333" } }}>
                Ajouter un commentaire
            </Button>
        </Box>
    );
}