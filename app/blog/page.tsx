"use client";

import { Posts } from "@/components/Posts/Posts";
import { PostsSearch } from "@/components/PostsSearch/PostsSearch";
import { getData } from "@/services/getPosts";
import { Metadata } from "next";
import { useEffect, useState } from "react";

export const metadata: Metadata = {
  title: "Blog | App",
};

export default async function Blog() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <h1>Blog</h1>
      <PostsSearch onSearch={setPosts} />
      <Posts posts={posts} />
    </>
  );
}
