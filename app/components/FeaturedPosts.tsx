// Posts.tsx
import React from "react";
import Link from "next/link";
import { fetchPosts } from "../utils";
import { Post, PostProps, PostType } from "../types";
// import blogPosts from "../utils/mockData";

export default async function FeaturedPosts() {
  const data = await fetchPosts();
  const blogPosts = data.slice(0, 4);

  return (
    <div className="relative justify-center min-h-[400px] bg-gradient-to-top from-gray-50 via-gray-50 to-white flex items-end h-[50vh]">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 pt-10">
        {blogPosts.map((post: PostType) => (
          <Link
            key={post._id}
            href={`/Blog/${post._id}`}
            className="block cursor-pointer"
          >
            {/* Use a block-level element and cursor-pointer class for proper link styling */}
            <div className="bg-gray-50 p-4 rounded-lg drop-shadow-lg">
              <h2 className="text-center text-[#1c3039] text-2xl font-bold mb-2">
                {post.title}
              </h2>
              <img
                src={post.heroImage}
                alt={post.title}
                className="mx-auto rounded-lg mb-2 h-44"
              />
              <p className="text-[#1c3039]">{post.description}</p>
              <div className="flex justify-end items-center mt-4">
                <span className="text-gray-500 mr-1">Likes:</span>
                <span className="text-indigo-600 font-bold">
                  {post.likes.length == 0 ? 0 : post.likes.length}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
