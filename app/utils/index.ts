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

export function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString("en-GB", options);
}

export async function onPost({
  postId,
  text,
  author,
}: {
  postId: string;
  text: string;
  author: string;
}) {
  const response = await fetch(`${url}/${postId}/comments`);
  const result = await response.json();

  return result;
}

//Auth

export async function loginUser(email: string, password: string) {
  return fetch(`${url}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", // Include cookies with the request
    body: JSON.stringify({ email, password }),
  }).then((data) => data.json());
}

export async function registerUser(
  username: string,
  email: string,
  password: string
) {
  
  return fetch(`${url}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password }),
  }).then((data) => data.json());
}
