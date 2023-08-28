import Link from "next/link";
import { PostType } from "../types";
import { fetchPosts, formatDate } from "../utils";

export default async function Blog() {
  const data = await fetchPosts();
  return (
    <div className="px-4 pt-[100px] w-[90%] justify-center items-center m-auto flex flex-col">
      <h1 className="text-4xl font-bold mb-6">Blog Posts</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-1 w-full">
        {data.map((post: PostType) => (
          <div
            key={post._id}
            className="bg-gray-100 rounded-lg shadow-md flex flex-col justify-between"
          >
            <img
              className="mx-auto mb-4 w-full rounded-t-lg"
              src={post.heroImage}
              alt={post.title}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">
                {post.description.slice(0, 100)}...
              </p>
              <div className="flex justify-between items-center">
                <Link href={`/Blog/${post._id}`}>
                  <button className="text-blue-600">Read more</button>
                </Link>
                <p className="text-gray-400 ">{formatDate(post.createdAt!)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
