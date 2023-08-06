// Posts.tsx
import React from "react";
import blogPosts from "../utils/mockData";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  image: string;
  description: string;
  likes: number;
}

const Posts: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-10 mx-2">
      {blogPosts.map((post: BlogPost) => (
        <Link key={post.id} href={`/posts/${post.id}`}>
          <a className="block cursor-pointer">
            {" "}
            {/* Use a block-level element and cursor-pointer class for proper link styling */}
            <div className="bg-[#d5d8de] p-4 rounded-lg shadow-md">
              <h2 className="text-center text-[#1c3039] text-2xl font-bold mb-2">
                {post.title}
              </h2>
              <img
                src={post.image}
                alt={post.title}
                className="mx-auto rounded-lg mb-2 h-44"
              />
              <p className="text-[#1c3039]">{post.description}</p>
              <div className="flex justify-end items-center mt-4">
                <span className="text-gray-500 mr-1">Likes:</span>
                <span className="text-indigo-600 font-bold">{post.likes}</span>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Posts;
