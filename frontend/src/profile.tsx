import React from 'react';
import './profile.css';
import MenuBar from './menuBar';

// --- ProfileHeader Component ---
interface ProfileHeaderProps {
  imageUrl: string;
  name: string;
}

function ProfileHeader({ imageUrl, name }: ProfileHeaderProps) {
  return (
    <div className="profile-header">
      <img src={imageUrl} alt={`${name}'s profile`} />
      <h1>{name}</h1>
    </div>
  );
}

// --- ProfileStats Component ---
interface ProfileStatsProps {
  posts: number;
  followers: number;
  following: number;
}

function ProfileStats({ posts, followers, following }: ProfileStatsProps) {
  return (
    <div className="profile-stats">
      <div className="stat-item">
        <p>{posts}</p>
        <p>posts</p>
      </div>
      <div className="stat-item">
        <p>{followers}</p>
        <p>friends</p>
      </div>
      <div className="stat-item">
        <p>{following}</p>
        <p>encouraging</p>
      </div>
    </div>
  );
}

// --- ProfileBio Component ---
interface ProfileBioProps {
  text: string;
}

function ProfileBio({ text }: ProfileBioProps) {
  return (
    <p className="profile-bio">
      {text.split('\n').map((line, i) => (
        <React.Fragment key={i}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </p>
  );
}

// --- ProfileActions Component ---
function ProfileActions() {
  return (
    <div className="profile-actions">
      <button>Edit profile</button>
      <button>Add a post</button>
    </div>
  );
}

// --- ProfileGrid Component ---
function ProfileGrid() {
  const imageUrls = [
    [
      'https://cdn.builder.io/api/v1/image/assets/TEMP/667f48a8a36d8501d267d2ea4a099c1d296f09d5?placeholderIfAbsent=true&apiKey=2094134670de46e795b62dabdffd0296',
      'https://cdn.builder.io/api/v1/image/assets/TEMP/f662044d32e85d33e144892d8098b3ad317f1c30?placeholderIfAbsent=true&apiKey=2094134670de46e795b62dabdffd0296',
      'https://cdn.builder.io/api/v1/image/assets/TEMP/8ec4b4b9dedbe114a0c99375fa1c940783f0b19e?placeholderIfAbsent=true&apiKey=2094134670de46e795b62dabdffd0296',
    ],
    [
      'https://cdn.builder.io/api/v1/image/assets/TEMP/dd230feb7cdcc404256a7db296eb2617f3f4668f?placeholderIfAbsent=true&apiKey=2094134670de46e795b62dabdffd0296',
      'https://cdn.builder.io/api/v1/image/assets/TEMP/5f8fda3bc89bf4de41f6e53142e70e5684b57f73?placeholderIfAbsent=true&apiKey=2094134670de46e795b62dabdffd0296',
      'https://cdn.builder.io/api/v1/image/assets/TEMP/0eb1139e520e93eb133ee1b68388dc08f9d401a1?placeholderIfAbsent=true&apiKey=2094134670de46e795b62dabdffd0296',
    ],
    [
      'https://cdn.builder.io/api/v1/image/assets/TEMP/5f26c310f1c5ef4a830229390bdd0d9169fd98b4?placeholderIfAbsent=true&apiKey=2094134670de46e795b62dabdffd0296',
      'https://cdn.builder.io/api/v1/image/assets/TEMP/267346ead6e80a442074d179692f3436687c0c83?placeholderIfAbsent=true&apiKey=2094134670de46e795b62dabdffd0296',
      'https://cdn.builder.io/api/v1/image/assets/TEMP/299a7430ac4a23ecc59628ae3f6ee615e12cf305?placeholderIfAbsent=true&apiKey=2094134670de46e795b62dabdffd0296',
    ],
  ];

  return (
    <div className="profile-grid">
      {imageUrls.map((row, rowIndex) => (
        <div className="profile-grid-row" key={rowIndex}>
          {row.map((url, colIndex) => (
            <img
              key={colIndex}
              src={url}
              alt={`Post ${rowIndex * 3 + colIndex + 1}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

// --- ProfilePage ---
function ProfilePage() {
  return (
    <main>
      <div className="profile-header-wrapper">
        <ProfileHeader
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/2a4217550e965831bcf56dac293a101df904a1d2?placeholderIfAbsent=true&apiKey=2094134670de46e795b62dabdffd0296"
          name="Amelie Johnson"
        />
        <ProfileStats posts={9} followers={104} following={362} />
      </div>
      <ProfileBio
        text={`Welcome friend!\nDon't forget to read the scriptures`}
      />
      <ProfileActions />
      <ProfileGrid />
      <MenuBar />
    </main>
  );
}

export default ProfilePage;
