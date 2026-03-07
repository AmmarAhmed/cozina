import { Grid, Card, CardContent, Typography, Button, Box } from "@mui/material";

const posts = [
    { id: 1, title: "Article 1", summary: "Résumé de l'article 1..." },
    { id: 2, title: "Article 2", summary: "Résumé de l'article 2..." },
];

export default function HomePage() {
    return (
        <Grid container spacing={4}>
            {posts.map((post) => (
                <Grid item xs={12} sm={6} key={post.id}>
                    <Card sx={{ borderRadius: 2, boxShadow: 3, p: 2 }}>
                        <CardContent>
                            <Typography variant="h6">{post.title}</Typography>
                            <Typography variant="body2" color="text.secondary">
                                {post.summary}
                            </Typography>
                        </CardContent>
                        <Box sx={{ mt: 2 }}>
                            <Button
                                variant="contained"
                                sx={{ width: "100%", backgroundColor: "#111111", "&:hover": { backgroundColor: "#333333" } }}
                            >
                                Lire la suite
                            </Button>
                        </Box>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}