import React from "react";
import PostCard from "./PostCard";
import "./App.css";

function App() {
  
  const posts = [
    {
      username: "travel_girl",
      content: "What a beach #beachlife",
      date: "Sept 19, 2025",
    },
    {
      username: "foodie_boy",
      content: "Sarap talaga #PinoyFood",
      date: "Sept 18, 2025",
    },
    {
      username: "coder_kid",
      content: "Stress na #CodeLife",
      date: "Sept 17, 2025",
    },
  ];

  return (
    <div className="app">
      <h1>Simple Social Media</h1>
      {posts.map((post, index) => (
        <PostCard
          key={index}
          username={post.username}
          content={post.content}
          date={post.date}
        />
      ))}
    </div>
  );
}

export default App;
