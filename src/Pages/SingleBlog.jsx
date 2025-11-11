import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleBlog = () => {
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
                    <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                        <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-600 dark:text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                            </svg>
                            <span>Architecto</span>
                        </a>
                        <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg dark:border-gray-600 dark:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                            </svg>
                            <span>Corrupti</span>
                        </a>
                        <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-600 dark:text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                            <span>Excepturi</span>
                        </a>
                        <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-600 dark:text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                            </svg>
                            <span>Consectetur</span>
                        </a>
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