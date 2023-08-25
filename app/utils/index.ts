const url = process.env.NEXT_PUBLIC_GASTRO_API;

export async function fetchPosts() {
  const response = await fetch(`${url}/posts/`);
  const result = await response.json();

  return result;
}

export async function getPostById(postId: any) {
  const response = await fetch(`${url}/posts/${postId}`);
  const result = await response.json();

  return result;
}
