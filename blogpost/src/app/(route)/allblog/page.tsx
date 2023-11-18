import Searchblog from "@/components/searchblog";
import { db } from "@/lib/db";
import Link from "next/link";
import React from "react";

async function getPosts(page: number, search: any) {
  const totalCount = await db.post.count();
  const response = await db.post.findMany({
    skip: (page - 1) * 6,
    take: 6,
    where: search
      ? {
          OR: [
            { title: { contains: search, mode: "insensitive" } },
            { description: { contains: search, mode: "insensitive" } },
            { tag: { name: { contains: search, mode: "insensitive" } } },
          ],
        }
      : {},
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
  return { response, totalCount };
}

export default async function Blog({
  searchParams,
}: {
  [key: string]: string | string[] | undefined | any;
}) {
  const par = parseInt(searchParams?.page ?? 1);
  const search = searchParams?.search ?? "";

  const posts = await getPosts(par, search);
  const pagesCount = Math.ceil(posts.totalCount / 6);
  const renderPost = posts?.response?.map(({ id, title, description, tag }) => {
    return (
      <div className="card w-80 md:w-96 bg-base-100 shadow-xl " key={id}>
        <div className="card-body">
          <h2 className="card-title text-red-700">{title}</h2>
          <p className="text-start text-gray-500">{description}</p>
          <span className="badge bg-teal-200 py-3 px-2">{tag?.name}</span>
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
    <div className="form-control flex flex-1 my-10   content-center items-center justify-center">
      {" "}
      <div className="">
        <Searchblog totalpage={pagesCount} search={search} />
      </div>
      <div className="flex mt-14 justify-center  flex-wrap text-center items-center gap-3">
        {renderPost}
      </div>
    </div>
  );
}
