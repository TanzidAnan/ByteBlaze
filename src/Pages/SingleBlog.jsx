import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleBlog = () => {
    const blog =useLoaderData();
    console.log(blog)
    return (
        <div>
            <h1>Single blog details</h1>
        </div>
    );
};

export default SingleBlog;