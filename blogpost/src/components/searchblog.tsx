"use client";
import React from "react";
import Link from "next/link";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function Searchblog({ totalpage }: any) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }
  return (
    <div className="flex items-center justify-center gap-4">
      <div className="">
        <input
          type="text"
          className="input input-bordered  md:w-[400px] "
          placeholder="search a blog"
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          defaultValue={searchParams.get("query")?.toString()}
        />
      </div>
      <div className="join space-x-3">
        {[...Array(totalpage)].map((ele, ind) => (
          <Link href={`/allblog/?page=${ind + 1}`} className="btn" key={ind}>
            {ind + 1}
          </Link>
        ))}
      </div>
    </div>
  );
}
