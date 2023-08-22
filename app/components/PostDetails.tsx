// components/PostDetails.tsx
import React from "react";
import { useRouter } from "next/router";
import { PostDetailsProps } from "../types";

const PostDetails: React.FC<PostDetailsProps> = ({ post }) => {
  const router = useRouter();
  const postId = router.query.id;

  if (postId !== String(post.id)) {
    return <div>Loading...</div>; // Handle loading or invalid post ID
  }

  return (
    <div className="container mx-auto mt-10">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-center text-2xl font-bold mb-4">{post.title}</h2>
        <img
          src={post.image}
          alt={post.title}
          className="mx-auto mb-4 rounded-lg"
        />
        <p className="text-gray-700">{post.description}</p>
        <div className="flex justify-end items-center mt-4">
          <span className="text-gray-500 mr-1">Likes:</span>
          <span className="text-indigo-600 font-bold">{post.likes}</span>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
