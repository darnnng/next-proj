import Link from "next/link";
import React from "react";

interface IPostsProps {
  posts: any[];
}

const Posts = ({ posts }: IPostsProps) => {
  return (
    <ul>
      {posts.map((elem: any) => {
        return (
          <li key={elem.id}>
            <Link href={`/blog/${elem.id}`}>{elem.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export { Posts };
