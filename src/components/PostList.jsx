import React, { useState } from 'react';
import Post from './Post';

function PostList() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'First Post', content: 'This is my first post!', likes: 0 },
    { id: 2, title: 'React is Awesome', content: 'Learning React step by step!', likes: 0 },
    { id: 3, title: 'Like this Post', content: 'Click the like button to increase count.', likes: 0 },
  ]);

  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  const handleLike = (id) => {
    const updatedPosts = posts.map((post) =>
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    );
    setPosts(updatedPosts);
  };

  const handleAddPost = (e) => {
    e.preventDefault();
    if (newTitle.trim() && newContent.trim()) {
      const newPost = {
        id: Date.now(),
        title: newTitle,
        content: newContent,
        likes: 0,
      };
      setPosts([newPost, ...posts]);
      setNewTitle('');
      setNewContent('');
    }
  };

  return (
    <div className="post-list">
      <h2>📜 Posts</h2>

      {/* Add New Post Form */}
      <form onSubmit={handleAddPost} className="new-post-form">
        <input
          type="text"
          placeholder="Post Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <textarea
          placeholder="Post Content"
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
        ></textarea>
        <button type="submit">Add Post</button>
      </form>

      {/* List of Posts */}
      {posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          content={post.content}
          likes={post.likes}
          onLike={() => handleLike(post.id)}
        />
      ))}
    </div>
  );
}

export default PostList;
