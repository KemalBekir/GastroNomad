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
    <div className="relative bg-gradient-to-t from-transparent to-white">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 pt-10">
        {blogPosts.map((post: BlogPost) => (
          <Link
            key={post.id}
            href={`/posts/${post.id}`}
            className="block cursor-pointer"
          >
            {/* Use a block-level element and cursor-pointer class for proper link styling */}
            <div className="bg-gray-50 p-4 rounded-lg drop-shadow-lg">
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
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Posts;
