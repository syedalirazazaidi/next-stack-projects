"use client";
import React from "react";
import PostBlog from "../../../../generic/postblog";
import { SubmitHandler } from "react-hook-form";
import { TypeInterface } from "../../../../../types/type";
export default function EditPage() {
  const onSubmit: SubmitHandler<TypeInterface> = (data) => console.log(data);

  return (
    <div>
      <PostBlog Submitform={onSubmit} Edit={true} />
    </div>
  );
}
