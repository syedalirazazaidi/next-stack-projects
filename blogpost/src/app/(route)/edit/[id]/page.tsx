"use client";
import React from "react";
import PostBlog from "../../../../generic/postblog";
import { SubmitHandler } from "react-hook-form";
import { FormType } from "../../../../../types/type";
export default function EditPage() {
  const onSubmit: SubmitHandler<FormType> = (data) => console.log(data);

  return (
    <div>
      <PostBlog submit={onSubmit} Edit={true} />
    </div>
  );
}
