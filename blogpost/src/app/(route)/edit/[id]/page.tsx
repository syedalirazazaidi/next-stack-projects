"use client";
import React from "react";
import PostBlog from "../../../../generic/postblog";
import { SubmitHandler } from "react-hook-form";
import { FormType } from "../../../../../types/type";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function EditPage({ params }: any) {
  const router = useRouter();

  const { id } = params;
  const { data: dataPost, isLoading: isLoadingPost } = useQuery<any>({
    queryKey: ["posts", id],
    queryFn: async () => {
      const response = await axios.get(`/api/post/${id}`);
      return response.data;
    },
  });
  const { mutate: updatePost, isPending: isLoadingSubmit } = useMutation({
    mutationFn: async (newpost: FormType) => {
      return await axios.patch(`/api/post/${id}`, newpost);
    },
    onError: (error) => {
      console.log(error);
    },
    onSuccess: () => {
      router.push("/");
      router.refresh();
    },
  });

  const handleEditPost: SubmitHandler<FormType> = (data) => {
    updatePost(data);
  };

  if (isLoadingPost) {
    return (
      <div className="text-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      <PostBlog editPost={dataPost} submit={handleEditPost} Edit={true} />
    </div>
  );
}
