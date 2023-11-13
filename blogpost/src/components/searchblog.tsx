"use client";
import React, { useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function Searchblog() {
  const [searchBlog, setSearchTerm] = useState("");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    const params = new URLSearchParams(searchParams);
    if (searchBlog) {
      params.set("query", searchBlog);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  //   const filteredPeople = people.filter((person) =>
  //     person.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  return (
    <div className="flex items-center justify-center gap-4">
      <div className="">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered  md:w-[400px] "
          value={searchBlog}
          onChange={handleSearchChange}
        />
      </div>
      <div className="join">
        <button className="join-item btn">1</button>
        <button className="join-item btn btn-active">2</button>
        <button className="join-item btn">3</button>
        <button className="join-item btn">4</button>
      </div>
    </div>
  );
}
