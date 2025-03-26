import MenuBar from './menuBar';
import { useState } from "react";
import "./feed.css";

interface FriendPost {
  id: number;
  name: string;
  status: string;
  profileImageUrl: string;
  postImageUrl: string;
  text: string;
}

const initialPosts: FriendPost[] = [
  {
    id: 1,
    name: "Kylee Evans",
    status: "Feel more connected to God",
    profileImageUrl: "/images/kylee.jpg",
    postImageUrl: "/images/trees.jpg",
    text: "I heard that one way to feel closer to God is by spending time in nature. After taking a walk, I completely agree!",
  },
];

function Feed() {
  return (
    <>
      <h1>Feed Page</h1>

      <div className="feed-container">
        <h1>Friend's Feed</h1>
        <input
          type="text"
          placeholder="Search for a friend..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
        />
        <div className="posts">
          {filteredPosts.map((post) => (
            <div key={post.id} className="post">
              <div className="profile">
                <img src={post.profileImageUrl} alt={post.name} className="profile-pic" />
                <div>
                  <h2>{post.name}</h2>
                  <p>{post.status}</p>
                </div>
              </div>
              <img src={post.postImageUrl} alt="Post" className="post-img" />
              <p className="post-text">{post.text}</p>
            </div>
          ))}
        </div>
      </div>

      <MenuBar />
    </>
  );
}
export default Feed;

