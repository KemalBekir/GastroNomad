export interface BlogPost {
  id: string;
  title: string;
  image: string;
  description: string;
  likes: number;
}

export interface PostDetailsProps {
  post: BlogPost;
}

export interface Post {
  _id: string;
  title: string;
  heroImage: string;
  images: string[]; // An array of image URLs
  description: string;
  comments: string[]; // An array of comment IDs
  owner: string; // User ID of the owner
  likes: string[]; // An array of user IDs who liked the post
}

export interface PostProps {
  posts: Post[];
}
