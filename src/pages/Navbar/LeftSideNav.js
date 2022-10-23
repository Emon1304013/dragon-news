import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {

    const [categories,setCategories] = useState([]);

    useEffect(()=> {
        fetch('https://dragon-news-server-two-flax.vercel.app/news-categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            <h2>All categories: {categories.length} </h2>
            <div className='mt-4'>
                {categories.map(category => 
                <p 
                key={category.id}
                className='mb-2 ml-2 underline text-blue-500 text-xl font-semibold'
                >
                    <Link to={`category/${category.id}`}>{category.name}</Link>
                </p>
                )}
            </div>
        </div>
    );
};

export default LeftSideNav;