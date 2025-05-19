import { useContext, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { UserContext } from './UserReducer';
import DeleteIcon from '@mui/icons-material/Delete';
import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { array, string } from 'yup';
import { RecipeForm, recipeStore } from './store/recipeStore';

const schema = yup.object().shape({
    title: yup.string().required('Title is required'),
    description: yup.string().required('Description is required'),
    ingredients: array()
        .of(string().required('Ingredient is required'))
        .required('Ingredients list is required')
        .min(1, 'At least one ingredient is required'),
    instructions: yup.string().required('Instructions are required'),
});

const AddRecipeForm = () => {
    const { register, handleSubmit, control, formState: { errors } } = useForm<RecipeForm>({
        resolver: yupResolver(schema),
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'ingredients',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [state] = useContext(UserContext);

    const onSubmit = (data: RecipeForm) => {
        console.log(data);
        setIsSubmitting(true);
        recipeStore.addRecipe(data, state.id);
        setIsSubmitting(false);
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '400px',
                margin: '0 auto',
                backgroundColor: '#e3f2fd',
                padding: '16px',
                borderRadius: '8px',
            }}
        >
            <Typography variant="h4" gutterBottom sx={{ color: '#1976d2' }}>
                Add Recipe
            </Typography>

            <TextField
                label="Title"
                variant="outlined"
                {...register('title')}
                error={!!errors.title}
                helperText={errors.title?.message}
                sx={{ marginBottom: '16px' }}
            />
            <TextField
                label="Description"
                variant="outlined"
                {...register('description')}
                error={!!errors.description}
                helperText={errors.description?.message}
                sx={{ marginBottom: '16px' }}
            />

            <Box sx={{ width: '100%', marginBottom: '16px' }}>
                {fields.map((item, index) => (
                    <div key={item.id} style={{ position: "relative" }}>
                        <TextField
                            label="Ingredient"
                            variant="outlined"
                            {...register(`ingredients.${index}`)}
                            error={!!errors.ingredients}
                            helperText={errors.ingredients?.message}
                            sx={{ marginBottom: '16px', width: '100%' }}
                        />
                        <Button
                            type="button"
                            onClick={() => remove(index)}
                            sx={{ position: "absolute", top: 0, right: 0, margin: "auto" }}
                        >
                            <DeleteIcon />
                        </Button>
                    </div>
                ))}
                <Button type="button" onClick={() => append('')} sx={{ marginTop: '8px' }}>
                    <AddIcon /> Add Ingredient
                </Button>
                {errors.ingredients && <span>{errors.ingredients.message}</span>}
            </Box>
            <TextField
                label="Instructions"
                variant="outlined"
                {...register('instructions')}
                error={!!errors.instructions}
                helperText={errors.instructions?.message}
                sx={{ marginBottom: '16px' }}
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                disabled={isSubmitting}
                sx={{ marginTop: '16px' }}
            >
                Add Recipe
            </Button>
        </Box>
    );
};

export default AddRecipeForm;
