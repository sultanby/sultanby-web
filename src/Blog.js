import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Blog() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/articles.json`)
            .then(response => response.json())
            .then(data => setArticles(data));
    }, []);

    return (
        <div className="w-3/5 mx-auto">
            <h2 className="my-12 text-3xl text-black font-bold lg:text-4xl">+blog</h2>
            <h4 className="my-12 text-2xl text-black font-bold lg:text-4xl">2024</h4>
            {articles.map(article => (
                <div key={article.id}>
                    <Link to={`/article/${article.id}`}>
                        <div className="flex flex-row justify-between border-b-2 my-4">
                            <h2>{article.title}</h2>
                            <h2>{article.date}</h2>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Blog;
