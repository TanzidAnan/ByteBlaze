import React from 'react';
import { useLoaderData } from 'react-router-dom';

const OneBlog = () => {
    const blog =useLoaderData()
    return (
        <div>
            <h1>Single Blog Details</h1>
        </div>
    );
};

export default OneBlog;