import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const SingleBlog = () => {
    const [tabIndex,setTabIndex] =useState(0)
    const blog = useLoaderData();
    const { title, description, reading_time_minutes, public_reactions_count, published_at, comments_count } = blog
    console.log(blog)
    return (
        <div>
            <article className="max-w-4xl px-6 py-24 mx-auto space-y-16 dark:bg-gray-100 dark:text-gray-900">
                <div className="w-full mx-auto space-y-4">
                    <h1 className="text-5xl font-bold leading-none">{title}</h1>
                    <div className="flex flex-wrap space-x-2 text-sm dark:text-gray-600">
                        <a rel="noopener noreferrer" href="#" className="p-1 hover:underline">{reading_time_minutes} min read</a>
                        <a rel="noopener noreferrer" href="#" className="p-1 hover:underline">{new Date(published_at).toLocaleDateString()}</a>
                        <a rel="noopener noreferrer" href="#" className="p-1 hover:underline">{public_reactions_count} Comments {comments_count} Views</a>
                    </div>
                    <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                        <Link onChange={() =>setTabIndex(0)} to='' rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex ===0? 'border border-b-0': 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                            </svg>
                            <span>Content</span>
                        </Link>
                        <Link to={`author`} onChange={() =>setTabIndex(1)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex ===1? 'border border-b-0': 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                            </svg>
                            <span>Author</span>
                        </Link>
                    </div>
                    <p className="text-sm dark:text-gray-600">by
                        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline dark:text-violet-600">
                            <span>Leroy Jenkins</span>
                        </a>on
                        <time datetime="2021-02-12 15:34:18-0200">Feb 12th 2021</time>
                    </p>
                </div>
                <div className="dark:text-gray-800">
                    <p>Insert the actual text content here...</p>
                </div>
            </article>
        </div>
    );
};

export default SingleBlog;