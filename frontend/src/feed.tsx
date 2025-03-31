import { useState } from 'react';
import MenuBar from './menuBar';
import './feed.css';
import kyleImg from './assets/kyle.jpg';
import templeImg from './assets/temple.jpg';
import searchIcon from './assets/search_icon.jpg';
import commentIcon from './assets/comment_icon.jpg';
import dmIcon from './assets/dm_icon.jpg';
import encourageIcon from './assets/encourage_icon.jpg';
import heartIcon from './assets/heart_icon.jpg';
import emilyImg from './assets/emily.jpg';
import scripturesImg from './assets/scriptures.jpg';
import jacobImg from './assets/jacob.jpg';
import journalImg from './assets/journal.jpg';
import sophiaImg from './assets/sophia.jpg';
import davidImg from './assets/david.jpg';
import seminaryImg from './assets/seminary.jpg';
import avaImg from './assets/ava.jpg';
import ethanImg from './assets/ethan.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

interface FriendPost {
  id: number;
  name: string;
  status: string;
  profileImageUrl?: string;
  postImageUrl?: string;
  text: string;
}

const initialPosts: FriendPost[] = [
  {
    id: 1,
    name: 'Kyle Evans',
    status: 'Connect with God',
    profileImageUrl: kyleImg,
    postImageUrl: templeImg,
    text: 'I heard that one way to feel closer to God is by spending time in His house. I had wondeful experience visiting the temple today.',
  },
  {
    id: 2,
    name: 'Emily Johnson',
    status: 'Read my scriptures',
    profileImageUrl: emilyImg,
    postImageUrl: scripturesImg,
    text: "Since FSY, I've been trying to read the scriptures every day. I love that our prophet sets an example for us!",
  },
  {
    id: 3,
    name: 'Jacob Smith',
    status: 'Journaling',
    profileImageUrl: jacobImg,
    postImageUrl: journalImg,
    text: 'I’ve been journaling every night before bed. It has been helping me reflect on seeing God’s hand during the day.',
  },
  {
    id: 4,
    name: 'Sophia Martinez',
    status: 'Ministering',
    profileImageUrl: sophiaImg,
    text: 'After FSY, I made a goal to make sure everyone feels included at school. Today I sat with someone new at lunch!',
  },
  {
    id: 5,
    name: 'David Lee',
    status: 'Go to early morning seminary',
    profileImageUrl: davidImg,
    postImageUrl: seminaryImg,
    text: "I’ve been waking up early to attend seminary, and it's totally worth it. I feel more prepared for the day!",
  },
  {
    id: 6,
    name: 'Ava Thompson',
    status: 'Serve others daily',
    profileImageUrl: avaImg,
    text: 'I decided that I would try to serve someone every day. I helped my mom clean the kitchen without her asking today!',
  },
  {
    id: 7,
    name: 'Ethan Brown',
    status: 'Share my testimony more',
    profileImageUrl: ethanImg,
    text: 'FSY taught me the power of sharing my testimony. I bore my testimony in sacrament meeting for the first time in a while!',
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
      <div className="feed-container container pt-4 pb-5">
        <div className="search-wrapper mb-3">
          <input
            type="text"
            placeholder="See your friend's progress"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-bar"
          />
          <img src={searchIcon} alt="Search" className="search-icon" />
        </div>

        <div className="posts mb-5">
          {filteredPosts.map((post) => (
            <div key={post.id} className="post">
              <div className="profile">
                {post.profileImageUrl && (
                  <img
                    src={post.profileImageUrl}
                    alt={post.name}
                    className="profile-pic"
                  />
                )}
                <div>
                  <h2>{post.name}</h2>
                  <p>{post.status}</p>
                </div>
              </div>

              {post.postImageUrl && (
                <img src={post.postImageUrl} alt="Post" className="post-img" />
              )}
              <p className="post-text">{post.text}</p>
              <div className="post-actions">
                <button className="action-btn">
                  <img src={commentIcon} alt="Comment" />
                </button>
                <button className="action-btn">
                  <img src={dmIcon} alt="DM" />
                </button>
                <button className="action-btn">
                  <img src={encourageIcon} alt="Encourage" />
                </button>
                <button className="action-btn">
                  <img src={heartIcon} alt="Heart" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <MenuBar />
    </>
  );
}

export default Feed;
