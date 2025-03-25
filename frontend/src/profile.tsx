"use client";

import React from "react";

// --- ProfileHeader Component ---
interface ProfileHeaderProps {
  imageUrl: string;
  name: string;
}

function ProfileHeader({ imageUrl, name }: ProfileHeaderProps) {
  return (
    <article className="self-stretch text-lg leading-6">
      <img
        src={imageUrl}
        alt={`${name}'s profile picture`}
        className="object-contain max-w-full rounded-full aspect-[0.95] w-[105px]"
      />
      <h1 className="mt-4">
        {name}
        <br />
      </h1>
    </article>
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
    <>
      <StatItem count={posts} label="post" />
      <StatItem count={followers} label="followers" />
      <StatItem count={following} label="following" />
    </>
  );
}

interface StatItemProps {
  count: number;
  label: string;
}

function StatItem({ count, label }: StatItemProps) {
  return (
    <div className="flex flex-col self-stretch my-auto whitespace-nowrap">
      <p className="self-center text-sm leading-loose">{count}</p>
      <p className="mt-1.5 text-xs leading-loose text-center">{label}</p>
    </div>
  );
}

// --- ProfileBio Component ---
interface ProfileBioProps {
  text: string;
}

function ProfileBio({ text }: ProfileBioProps) {
  return (
    <p className="mt-2 text-xs leading-4 text-black">
      {text.split("\n").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index < text.split("\n").length - 1 && <br />}
        </React.Fragment>
      ))}
    </p>
  );
}

// --- ProfileActions Component ---
function ProfileActions() {
  return (
    <div className="flex gap-3 self-center mt-6 text-xs leading-loose text-center text-black">
      <button className="px-12 py-2 rounded-3xl bg-zinc-300">
        Edit profile
      </button>
      <button className="px-12 py-2 rounded-3xl bg-zinc-300">Add a post</button>
    </div>
  );
}

// --- ProfileGrid Component ---
function ProfileGrid() {
  const imageUrls = [
    [
      "https://cdn.builder.io/api/v1/image/assets/TEMP/667f48a8a36d8501d267d2ea4a099c1d296f09d5?placeholderIfAbsent=true&apiKey=2094134670de46e795b62dabdffd0296",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f662044d32e85d33e144892d8098b3ad317f1c30?placeholderIfAbsent=true&apiKey=2094134670de46e795b62dabdffd0296",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8ec4b4b9dedbe114a0c99375fa1c940783f0b19e?placeholderIfAbsent=true&apiKey=2094134670de46e795b62dabdffd0296",
    ],
    [
      "https://cdn.builder.io/api/v1/image/assets/TEMP/dd230feb7cdcc404256a7db296eb2617f3f4668f?placeholderIfAbsent=true&apiKey=2094134670de46e795b62dabdffd0296",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5f8fda3bc89bf4de41f6e53142e70e5684b57f73?placeholderIfAbsent=true&apiKey=2094134670de46e795b62dabdffd0296",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0eb1139e520e93eb133ee1b68388dc08f9d401a1?placeholderIfAbsent=true&apiKey=2094134670de46e795b62dabdffd0296",
    ],
    [
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5f26c310f1c5ef4a830229390bdd0d9169fd98b4?placeholderIfAbsent=true&apiKey=2094134670de46e795b62dabdffd0296",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/267346ead6e80a442074d179692f3436687c0c83?placeholderIfAbsent=true&apiKey=2094134670de46e795b62dabdffd0296",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/299a7430ac4a23ecc59628ae3f6ee615e12cf305?placeholderIfAbsent=true&apiKey=2094134670de46e795b62dabdffd0296",
    ],
  ];

  return (
    <section className="mt-11">
      {imageUrls.map((row, rowIndex) => (
        <div
          key={`row-${rowIndex}`}
          className={`flex gap-1 ${rowIndex > 0 ? "mt-3.5" : ""}`}
        >
          {row.map((url, colIndex) => (
            <img
              key={`img-${rowIndex}-${colIndex}`}
              src={url}
              alt={`Post ${rowIndex * 3 + colIndex + 1}`}
              className="object-contain shrink-0 max-w-full aspect-[0.95] w-[109px]"
            />
          ))}
        </div>
      ))}
    </section>
  );
}

// --- BottomNavigation (Placeholder) ---
function BottomNavigation({ imageUrl }: { imageUrl: string }) {
  return (
    <footer className="w-full mt-6">
      <img src={imageUrl} alt="Bottom Navigation" className="w-full" />
    </footer>
  );
}

// --- StatusBar (Placeholder) ---
function StatusBar() {
  return (
    <div className="w-full h-6 bg-zinc-200 text-center text-xs text-black">
      Status Bar
    </div>
  );
}

// --- Main ProfilePage ---
function ProfilePage() {
  return (
    <main className="overflow-hidden mx-auto w-full bg-white max-w-[480px]">
      <StatusBar />
      <section className="flex flex-col px-7 mt-7 w-full">
        <div className="flex gap-5 justify-between items-center text-black">
          <ProfileHeader
            imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/2a4217550e965831bcf56dac293a101df904a1d2?placeholderIfAbsent=true&apiKey=2094134670de46e795b62dabdffd0296"
            name="Amelie Johnson"
          />
          <ProfileStats posts={9} followers={104} following={362} />
        </div>
        <ProfileBio text="Welcome friend! Don't forget to read the scriptures" />
        <ProfileActions />
        <ProfileGrid />
      </section>
      <BottomNavigation imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/14b2d7b5718c4dee53e4fec356ecec319e3d08fc?placeholderIfAbsent=true&apiKey=2094134670de46e795b62dabdffd0296" />
    </main>
  );
}

export default ProfilePage;
