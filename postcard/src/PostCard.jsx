import React, { useState } from "react";
import "./PostCard.css";

function PostCard(props) {
 
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <div className="post-card">
      <div className="post-header">
        <strong>@{props.username}</strong>
      </div>

      <div className="post-content">
        <p>{props.content}</p>
      </div>

      <div className="post-footer">
        <small>{props.date}</small>
        <div className="buttons">
          <button onClick={() => setLikes(likes + 1)}>Like {likes}</button>
          <button onClick={() => setDislikes(dislikes + 1)}>Dislike {dislikes}</button>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
