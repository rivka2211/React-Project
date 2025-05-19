import { Box, Typography, Card } from '@mui/material';
import { Recipe } from './store/RecipeStore';

const RecipeDetails = ({ recipe }: { recipe: Recipe }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#e3f2fd', padding: '16px', borderRadius: '8px' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2', marginBottom: '16px' }}>{recipe.title}</Typography>
      <Card sx={{ padding: '16px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: 3 }}>
        <Typography variant="body1" sx={{ marginBottom: '16px' }}>{recipe.description}</Typography>
        {recipe.ingredients.length > 0 && <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#1976d2', marginBottom: '8px' }}>Ingredients:</Typography>}
        {recipe.ingredients.map((ingredient, index) => (
          <Typography key={index} variant="body2" sx={{ color: '#424242' }}>{ingredient.value}</Typography>
        ))}
        {recipe.instructions && <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#1976d2', marginTop: '16px' }}>Instructions:</Typography>}
        {recipe.instructions && <Typography variant="body2" sx={{ color: '#424242' }}>{recipe.instructions}</Typography>}
      </Card>
    </Box>
  );
};

export default RecipeDetails;
