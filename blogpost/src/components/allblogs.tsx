import { db } from "@/lib/db";
import Link from "next/link";
import React from "react";

async function getPosts() {
  const response = await db.post.findMany();
  return response;
}

export default async function AllBlog() {
  const posts = await getPosts();

  const renderPost = posts?.map(({ id, title }) => {
    return (
      <div className="card w-80 md:w-96 bg-base-100 shadow-xl" key={id}>
        <div className="card-body">
          <h2 className="card-title text-red-700">{title}</h2>
          <p className=""></p>
          <div className="card-actions justify-end">
            <Link href="/blog/1" className="hover:underline">
              Read more ...
            </Link>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="flex justify-center text-center items-center gap-3 my-10">
      {renderPost}
    </div>
  );
}
