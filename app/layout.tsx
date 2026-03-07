import { ReactNode } from "react";
import { CssBaseline, AppBar, Toolbar, Typography, Container, Box } from "@mui/material";

export const metadata = {
    title: "Cozina Blog",
    description: "Blog moderne style Kuurl",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="fr">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Cozina Blog</title>
        </head>
        <body>
        <CssBaseline />

        {/* Header */}
        <AppBar position="static" sx={{ backgroundColor: "#111111" }}>
            <Toolbar>
                <Typography variant="h6">Cozina Blog</Typography>
            </Toolbar>
        </AppBar>

        {/* Body */}
        <Container sx={{ mt: 4, mb: 4, minHeight: "80vh" }}>
            {children}
        </Container>

        {/* Footer */}
        <Box sx={{ backgroundColor: "#111111", color: "#fff", textAlign: "center", py: 3 }}>
            © 2026 Cozina Blog. Tous droits réservés.
        </Box>
        </body>
        </html>
    );
}