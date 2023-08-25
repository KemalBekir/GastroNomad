// pages/posts/[id].tsx
import React from "react";
import { useRouter } from "next/router";
import PostDetails from "../../components/PostDetails";
import { getPostById } from "@/app/utils";
import { GetServerSidePropsContext } from "next";
// import blogPosts from "@/app/utils/mockData"; // Import your blogPosts data

const PostDetailsPage = async ({ params }: any) => {
  const router = useRouter();
  const post = await getPostById(params);

  return (
    <div>
      <h2>{post.title}</h2>
    </div>
    // <div className="container mx-auto mt-10">
    //   <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
    //     <h2 className="text-center text-2xl font-bold mb-4">{post.title}</h2>
    //     <img
    //       src={post.image}
    //       alt={post.title}
    //       className="mx-auto mb-4 rounded-lg"
    //     />
    //     <p className="text-gray-700">{post.description}</p>
    //     <div className="flex justify-end items-center mt-4">
    //       <span className="text-gray-500 mr-1">Likes:</span>
    //       <span className="text-indigo-600 font-bold">{post.likes}</span>
    //     </div>
    //   </div>
    // </div>
  );
  // }
};

export default PostDetailsPage;
