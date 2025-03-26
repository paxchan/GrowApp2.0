import { useState } from 'react';
import MenuBar from './menuBar';
import './feed.css';
import kyleImg from './assets/kyle.jpg';
import templeImg from './assets/temple.jpg';
import searchIcon from './assets/search_icon.jpg';

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
    name: 'Kyle Evans',
    status: 'Feel more connected to God',
    profileImageUrl: kyleImg,
    postImageUrl: templeImg,
    text: 'I heard that one way to feel closer to God is by spending time in nature. After taking a walk, I completely agree!',
  },
];

function Feed() {
  const [search, setSearch] = useState('');
  const [posts] = useState<FriendPost[]>(initialPosts);

  const filteredPosts = posts.filter((post) =>
    post.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="feed-container">
        <div className="search-wrapper">
          <input
            type="text"
            placeholder="See your friend's progress"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-bar"
          />
          <img src={searchIcon} alt="Search" className="search-icon" />
        </div>

        <div className="posts">
          {filteredPosts.map((post) => (
            <div key={post.id} className="post">
              <div className="profile">
                <img
                  src={post.profileImageUrl}
                  alt={post.name}
                  className="profile-pic"
                />
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
