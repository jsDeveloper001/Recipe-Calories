import React, { useEffect, useState } from 'react';
import Recipe from '../Recipe/Recipe';
import toast, { Toaster } from 'react-hot-toast';

const All_Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [cookingTable, setcookingTable] = useState([]);
    const [recentCookingTable, setrecentCookingTable] = useState([]);
    useEffect(() => {
        fetch('Data.json')
            .then(data => data.json())
            .then(Recipes => setRecipes(Recipes))
    }, [])

    // add recipes to the cooking table
    const addToCook = (recipe) => {
        const existingRecipe = cookingTable.find(item => item.recipe_id == recipe.recipe_id);
        if (existingRecipe) {
            toast.error("only one item can be add to cook")
        }
        else {
            setcookingTable([...cookingTable, recipe])
        }
    }

    // go to cook table by preparing button
    const readyToCook = (cookingRecipe) => {
        const remainCookingRecipe = cookingTable.filter(item => item.recipe_id !== cookingRecipe.recipe_id);
        setcookingTable([...remainCookingRecipe])

        setrecentCookingTable([...recentCookingTable, cookingRecipe])
    }

    return (
        <div className='grid gap-5 grid-cols-1fr md:grid-cols-[3fr,2fr] lg:grid-cols-[3fr,2fr]'>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
                {
                    recipes.map((recipe, index) =>
                        <Recipe
                            recipe={recipe}
                            addToCook={addToCook}
                            key={index}
                        ></Recipe>
                    )
                }
            </div>
            <div className='py-5 px-10 border border-[#28282833] rounded-2xl'>
                <div>
                    <h2 className='text-center text-xl font-bold border-b pb-3 border-[#28282833]'>Want to Cook: {cookingTable.length}</h2>
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr className='text-base'>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cookingTable.map((cookingTableItem, index) =>
                                        <tr className='bg-base-200' key={index}>
                                            <th>{index + 1}</th>
                                            <td>{cookingTableItem.recipe_name}</td>
                                            <td>{cookingTableItem.cooking_time} minutes</td>
                                            <td>{cookingTableItem.calories} calories</td>
                                            <td><button className='btn text-xs bg-[#0BE58A] rounded-full' onClick={() => { readyToCook(cookingTableItem) }}>Preparing</button></td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <div className='mt-8'>
                    <h2 className='text-center text-xl font-bold border-b pb-3 border-[#28282833]'>Currently cooking: {recentCookingTable.length}</h2>
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr className='text-base'>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    recentCookingTable.map((recentCookingItem, index) =>
                                        <tr className='bg-base-200' key={index}>
                                            <th>{index + 1}</th>
                                            <td>{recentCookingItem.recipe_name}</td>
                                            <td>{recentCookingItem.cooking_time} minutes</td>
                                            <td>{recentCookingItem.calories} calories</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Toaster position="top-right"
                reverseOrder={false} />
        </div>
    );
};

export default All_Recipes;