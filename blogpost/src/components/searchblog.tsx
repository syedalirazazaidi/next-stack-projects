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
    <div className="mt-10 md:mt-10 ">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered  md:w-[400px] "
        value={searchBlog}
        onChange={handleSearchChange}
      />
    </div>
  );
}
