import { CommentProps } from "../types";
import { formatDate } from "../utils";

const Comment: React.FC<CommentProps> = ({ comment }) => {
    return (
      <div className="border p-4 mb-4 w-[90%] bg-white m-auto rounded-lg h-auto min-h-[100px]">
        <p className="mb-2">{comment.text}</p>
        <div className="flex justify-between text-gray-500 text-sm">
          <span className="capitalize">{comment.author.username}</span>
          <span>{formatDate(comment.createdAt)}</span>
        </div>
      </div>
    );
  };
  
  export default Comment;
  
  
  
  
  
  
