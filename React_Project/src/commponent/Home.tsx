import {
    Box, Typography, Button, Container,
    Card, CardMedia,
    Grid2 as Grid
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const photos = [
   "https://images.unsplash.com/photo-1611270629569-8b357cb88da9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGFzdGF8ZW58MHx8MHx8fDA%3D",
   "https://images.pexels.com/photos/8885841/pexels-photo-8885841.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
   "https://images.pexels.com/photos/11082262/pexels-photo-11082262.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
   "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
   "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHx8MHx8fDA%3D",
   "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FrZXxlbnwwfHwwfHx8MA%3D%3D"
    ]
    return (
        <Container maxWidth="lg">
            {/* כותרת */}
            <Box textAlign="center" my={5}>
                <Typography variant="h2" fontWeight="bold" color="primary">
                    🌍 עולם המתכונים 🍽️
                </Typography>
                <Typography variant="h6" color="textSecondary">
                    מצאי את המתכון המושלם לכל ארוחה!
                </Typography>
            </Box>

            {/* גריד תמונות */}
            <Grid container spacing={3} justifyContent="center">
                {photos.map((img, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
                        <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                            <CardMedia component="img" height="200" image={`${img}`} alt="recipe image" />
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* כפתור ניווט */}
            <Box textAlign="center" mt={5}>
                <Button variant="contained" color="secondary" size="large" onClick={() => navigate("/recipes")}>
                    גלו מתכונים חדשים
                </Button>
            </Box>
        </Container>
    );
};

export default Home;
