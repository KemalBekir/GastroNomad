import Link from "next/link";
import { Post, PostProps } from "../types";

const Posts: React.FC<PostProps> = ({ posts }) => {
  return (
    <div className="relative justify-center min-h-[400px] bg-gradient-to-t from-gray-50 via-gray-50 to-white flex items-end h-[80vh]">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 pt-10">
        {posts.map((post: any) => (
          <Link
            key={post._id}
            href={`/posts/${post._id}`}
            className="block cursor-pointer"
          >
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
                  {post.likes.length === 0 ? 0 : post.likes.length}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_GASTRO_API}/posts/`);
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Posts;
