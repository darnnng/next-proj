import { Metadata } from "next";

type PageProps = {
  params: {
    id: string;
  };
};

async function getData(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  return response.json();
}

export async function generateMetadata({
  params: { id },
}: PageProps): Promise<Metadata> {
  const post = await getData(id);
  return {
    title: post.title,
  };
}

export default async function About({ params: { id } }: PageProps) {
  const post = await getData(id);
  return (
    <>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </>
  );
}
