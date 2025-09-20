import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
  { id: '1', title: 'React Basics', snippet: 'Learn the basics of React.js...' },
  { id: '2', title: 'React Router Guide', snippet: 'Routing in React explained...' }
];

const Blog = () => (
  <div>
    <h1>Blog</h1>
    {posts.map(post => (
      <div key={post.id} style={{ marginBottom: '20px' }}>
        <h3>{post.title}</h3>
        <p>{post.snippet}</p>
        <Link to={`/blog/${post.id}`}>Read More</Link>
      </div>
    ))}
  </div>
);

export default Blog;
