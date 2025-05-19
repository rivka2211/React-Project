import {
  Button,
  Grid,
  Box,
  Typography,
  Paper
} from "@mui/material";
import { initionalRecipe, Recipe, recipeStore } from './store/recipeStore';
import { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import RecipeDetails from "./RecipeDetails";

const RecipeList = observer(() => {
  const [currentRecipe, setCurrentRecipe] = useState<Recipe>(initionalRecipe);
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const fetchedRecipes = await recipeStore.getRecipes();
      setRecipes(fetchedRecipes);
      if (fetchedRecipes.length > 0) setCurrentRecipe(fetchedRecipes[0]);
    };
    fetchRecipes();
  }, []);

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h3" fontWeight="bold" color="primary" sx={{ marginBottom: 4 }}>
        🌍 עולם המתכונים 🍽️
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={9}>
          <RecipeDetails recipe={currentRecipe} />
        </Grid>
        <Grid item xs={12} md={3} overflow={'scroll'} height={'80vh'}>
          <Paper sx={{ padding: 2, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
            <Typography variant="h6" color="primary" sx={{ marginBottom: 2 }}>
              רשימת מתכונים
            </Typography>
            {recipes.map((recipe) => (
              <Button
                fullWidth
                key={recipe.id}
                onClick={() => setCurrentRecipe(recipe)}
                sx={{
                  justifyContent: 'flex-start',
                  marginBottom: 1,
                  textTransform: 'none',
                  backgroundColor: currentRecipe.id === recipe.id ? '#bbdefb' : 'white',
                  '&:hover': {
                    backgroundColor: '#e3f2fd'
                  }
                }}
              >
                {recipe.title}
              </Button>
            ))}
          </Paper>
        </Grid>

      </Grid>
    </Box>
  );
});

export default RecipeList;
