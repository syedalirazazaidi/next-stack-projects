"use client";
import React from "react";
import PostBlog from "../../../generic/postblog";
import { SubmitHandler } from "react-hook-form";
import { FormType } from "../../../../types/type";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function CreateBlog() {
  const router = useRouter();
  const onFormSubmit: SubmitHandler<FormType> = (data) => {
    createPost(data);
  };

  const { mutate: createPost, isPending } = useMutation({
    mutationFn: async (newpost: FormType) => {
      return await axios.post("/api/post/create", newpost);
    },
    onError: (error) => {
      console.log(error);
    },
    onSuccess: () => {
      router.push("/");
      router.refresh();
    },
  });

  return (
    <div>
      <PostBlog submit={onFormSubmit} Edit={false} />
    </div>
  );
}
