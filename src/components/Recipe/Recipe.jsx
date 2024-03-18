import React from 'react';
import { faClock, faFire } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Recipe = ({ recipe, addToCook }) => {
    const { image, description, recipe_name, ingredients, cooking_time, calories } = recipe;
    return (
        <div className="card w-auto bg-base-100 shadow-xl border rounded-2xl p-5">
            <figure><img src={'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg' || image} alt="Shoes" className='rounded-2xl' /></figure>
            <div className="mt-4">
                <h2 className="font-semibold text-xl">{recipe_name}</h2>
                <p className='mt-3 font-normal text-base text-[#878787] border-b pb-4'>{description}</p>
                <div className='border-b pt-4 pb-4'>
                    <h2 className='mb-2 font-medium text-lg'>Ingredients: {ingredients.length}</h2>
                    {ingredients.map(ingredient => <li className='text-[#7a7878]'>{ingredient}</li>)}
                </div>
                <div className='flex items-center gap-10 mt-4 text-sm text-[#878787]'>
                    <span>
                        <FontAwesomeIcon icon={faClock} /> {cooking_time} minutes
                    </span>
                    <span><FontAwesomeIcon icon={faFire} /> {calories} calories</span>
                </div>
                <div className="card-actions justify-start mt-8">
                    <button className="btn bg-[#0BE58A]" onClick={() => { addToCook(recipe) }}>Want to Cook</button>
                </div>
            </div>
        </div>
    );
};

export default Recipe;