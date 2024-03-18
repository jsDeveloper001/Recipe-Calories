import React from 'react';
const Banner = () => {
    return (
        <div className='w-full mx-auto text-center mt-4'>
            <div className="bg-no-repeat bg-cover rounded-2xl p-10 md:p-24 lg:p-32" style={{ 'backgroundImage': 'url("/public/banner.png")' }}>
                <h1 className='text-xl md:text-2xl lg:text-5xl font-bold text-wrap text-white'>Discover an exceptional cooking class tailored for you!</h1>
                <p className='text-[10px] md:text-base lg:text-lg font-normal text-wrap mt-3 lg:mt-6 text-white'>Explore a culinary hub offering diverse recipes, from comforting classics to exotic delights. Delve into step-by-step guides, tantalizing flavors, and expert tips for creating delectable dishes to savor and share.</p>
                <div className='flex justify-center gap-3 mt-4 lg:mt-8'>
                    <button className='btn bg-green-500 rounded-3xl px-4 py-2 font-bold hover:cursor-pointer'>Explore Now</button>
                    <button className='btn bg-transparent border border-white rounded-full px-4 py-2 font-bold text-white hover:cursor-pointer'>Our Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;