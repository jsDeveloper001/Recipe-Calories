import React, { useEffect, useState } from 'react';
import Recipe from '../Recipe/Recipe';

const All_Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('Data.json')
            .then(data => data.json())
            .then(Recipes => setRecipes(Recipes))
    }, [])

    const addToCook = (recipe) =>{
        alert(recipe.description)
    }
    return (
        <div className='grid gap-5 grid-cols-1fr md:grid-cols-[3fr,2fr] lg:grid-cols-[3fr,2fr]'>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
                {
                    recipes.map(recipe=> 
                        <Recipe 
                        recipe={recipe}
                        addToCook={addToCook}
                        ></Recipe>
                    )
                }
            </div>
            <div className='py-5 border border-[#28282833] rounded-2xl'>
                <h2 className='text-center text-xl font-bold'>Want to Cook: {2}</h2>
            </div>
        </div>
    );
};

export default All_Recipes;