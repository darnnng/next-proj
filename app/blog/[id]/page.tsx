import { getData, getPost } from "@/services/getPosts";
import { Metadata } from "next";

type PageProps = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  const posts: any[] = await getData();
  return posts.map((post) => ({
    slug: post.id.toString(),
  }));
}

export async function generateMetadata({
  params: { id },
}: PageProps): Promise<Metadata> {
  const post = await getPost(id);
  return {
    title: post.title,
  };
}

export default async function About({ params: { id } }: PageProps) {
  const post = await getPost(id);
  return (
    <>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </>
  );
}
