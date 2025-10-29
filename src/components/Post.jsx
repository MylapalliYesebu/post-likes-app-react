import React from 'react';

function Post({ title, content, likes, onLike }) {
  return (
    <div className="post">
      <h3>{title}</h3>
      <p>{content}</p>
      <button onClick={onLike}>Like ({likes})</button>
    </div>
  );
}

export default Post;
