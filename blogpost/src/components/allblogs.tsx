import { db } from "@/lib/db";
import Link from "next/link";
import React from "react";

async function getPosts() {
  const response = await db.post.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      tag: true,
    },
    orderBy: {
      createdDate: "desc",
    },
  });
  return response;
}

export default async function AllBlog() {
  const posts = await getPosts();
  const renderPost = posts?.map(({ id, title, description, tag }) => {
    return (
      <div className="card w-80 md:w-96 bg-base-100 shadow-xl" key={id}>
        <div className="card-body">
          <h2 className="card-title text-red-700">{title}</h2>
          <p className="text-start text-gray-500">{description}</p>
          <span className="badge bg-teal-200">{tag?.name}</span>
          <div className="card-actions justify-end">
            <Link href={`/blog/${id}`} className="hover:underline">
              Read more ...
            </Link>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="flex justify-center flex-wrap text-center items-center gap-3 my-10">
      {renderPost}
    </div>
  );
}
