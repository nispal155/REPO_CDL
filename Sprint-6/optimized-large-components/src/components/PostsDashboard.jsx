import React, { useMemo, useCallback } from "react";
import useFetch from "../hooks/useFetch";

function PostsDashboard() {
  const { data: posts, pending } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  // memoize expensive calculation
  const totalPosts = useMemo(() => {
    console.log("Recalculating posts count...");
    return posts ? posts.length : 0;
  }, [posts]);

  // memoize render function
  const renderPost = useCallback(
    (post) => <li key={post.id}>{post.title}</li>,
    []
  );

  return (
    <div className="data-box">
      <h2>Posts Dashboard</h2>
      {pending && <p>Loading posts...</p>}
      {!pending && <p>Total posts: {totalPosts}</p>}
      <ul>{posts && posts.slice(0, 5).map(renderPost)}</ul>
    </div>
  );
}

export default PostsDashboard;
