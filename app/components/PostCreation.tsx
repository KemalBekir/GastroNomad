import React, { ChangeEvent } from "react";
import { PostCreationProps } from "../types";

const PostCreation: React.FC<PostCreationProps> = ({ onPost }) => {
  let postText = "";

  const handlePost = () => {
    // onPost(postId, text, author);
    postText = "";
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    postText = e.target.value;
  };

  return (
    <div className="border p-4 mb-4 w-[60%] bg-white m-auto rounded-lg h-auto min-h-[100px] drop-shadow-md">
      <textarea
        className="w-full h-20 p-2 border rounded-md resize-none"
        placeholder="Write your post here..."
        onChange={handleChange}
      ></textarea>
      <div className="flex justify-end mt-2">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          onClick={handlePost}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default PostCreation;
