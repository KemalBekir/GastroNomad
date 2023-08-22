// pages/posts/[id].tsx
import React from "react";
import { useRouter } from "next/router";
import PostDetails from "../../components/PostDetails";
import blogPosts from "@/app/utils/mockData"; // Import your blogPosts data

const PostDetailsPage = () => {
  const router = useRouter();
  const postId = router.query.id;

  const post = blogPosts.find((post) => post.id === postId);

  if (!post) {
    console.log(post);
    return <div>Post not found</div>;
  }

  return <PostDetails post={post} />;
};

export default PostDetailsPage;
