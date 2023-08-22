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
