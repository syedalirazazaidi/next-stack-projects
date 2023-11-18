"use client";
import React from "react";
import Link from "next/link";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useDebounce } from "use-debounce";

export default function Searchblog({ totalpage, search }: any) {
  const router = useRouter();
  const initialRender = useRef(true);

  const [text, setText] = useState(search);
  const [query] = useDebounce(text, 750);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    if (!query) {
      router.push(`/allblog`);
    } else {
      router.push(`/allblog?search=${query}`);
    }
  }, [query]);
  return (
    <div className="flex items-center justify-center gap-4">
      <div className="">
        <input
          type="text"
          className="input input-bordered  md:w-[400px] "
          value={text}
          placeholder="search a blog"
          onChange={(e) => setText(e.target.value)}
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
