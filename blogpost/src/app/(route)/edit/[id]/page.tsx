"use client";
import React from "react";
import PostBlog from "../../../../generic/postblog";
import { SubmitHandler } from "react-hook-form";
import { TypeInterface } from "../../../../../types/type";
import ButtonAction from "../../../../components/buttonaction";
export default function EditPage() {
  const onSubmit: SubmitHandler<TypeInterface> = (data) => console.log(data);

  return (
    <div>
      {/* <div className="container">
        <h2>post One</h2>
        <ButtonAction />
        <p className="text-slate-700">Post one content</p>
      </div> */}
      <PostBlog Submitform={onSubmit} Edit={true} />
    </div>
  );
}
