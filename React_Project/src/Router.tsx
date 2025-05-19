import { createBrowserRouter } from "react-router-dom";
import About from "./commponent/About";
import AppLayout from "./commponent/AppLayout";
import Home from "./commponent/Home";
import AddRecipeForm from "./commponent/AddRecipeForm";
import RecipeList from "./commponent/RecipeList";

export const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <>main error</>,
        children: [
            { path: '/about', element: <About />, },
            { path: '/addrecipe', element: <AddRecipeForm />, },
            { path: '/recipes', element: <RecipeList />,},
            // { path: '/recipes/:title', element: <RecipeDetails recipe={currentRecipe} />,},
            { path: '/', element: <Home /> },
        ]
    }
])