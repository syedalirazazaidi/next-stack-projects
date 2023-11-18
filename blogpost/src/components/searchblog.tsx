"use client";
import React, { useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function Searchblog({ totalpage }: any) {
  return (
    <div className="flex items-center justify-center gap-4">
      <div className="">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered  md:w-[400px] "
          // value={searchBlog}
          // onChange={handleSearchChange}
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
