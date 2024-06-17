import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github.css';

function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/articles.json`)
      .then(response => response.json())
      .then(data => {
        const foundArticle = data.find(article => article.id === id);
        setArticle(foundArticle);
      });
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-3/5 mx-auto">
      <h1 className="my-12 text-3xl text-black font-bold lg:text-4xl">{article.title}</h1>
      <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{article.content}</ReactMarkdown>
    </div>
  );
}

export default Article;
