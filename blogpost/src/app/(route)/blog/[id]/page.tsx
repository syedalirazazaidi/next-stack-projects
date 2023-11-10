import React from "react";
import ButtonAction from "@/components/buttonaction";
import Backbutton from "../../../../components/backbutton";
import { db } from "@/lib/db";

interface BlogDetailsProps {
  params: {
    id: string;
  };
}
async function getPosts(id: string) {
  const response = await db.post.findFirst({
    where: {
      id: id,
    },
    select: {
      id: true,
      title: true,
      description: true,
      tag: true,
    },
  });
  return response;
}

export default async function BlogDetails({ params }: BlogDetailsProps) {
  const post = await getPosts(params.id);

  return (
    <>
      <Backbutton />
      <div className="container ">
        <div className="card-body bg-gray-300 rounded-md my-10 font-semibold">
          <h2>{post?.title}</h2>
          <h2>{post?.description}</h2>
          <h2 className="badge bg-teal-200">{post?.tag?.name}</h2>
        </div>
        <ButtonAction id={params.id} />
      </div>
    </>
  );
}
