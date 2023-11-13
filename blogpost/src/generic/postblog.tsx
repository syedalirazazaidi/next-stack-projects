"use client";
import React, { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ChevronLeft, Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormType } from "../../types/type";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Tag } from "@prisma/client";
import { create } from "domain";
interface FormPostProps {
  submit: SubmitHandler<FormType>;
  Edit: boolean;
  editPost?: FormType;
}

interface TagType {
  id: string;
  name: string;
}
export default function PostBlog({ submit, Edit, editPost }: FormPostProps) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormType>({ defaultValues: editPost });

  const {
    data: dataTags,
    isLoading,
    isError,
    error,
  } = useQuery<Tag[]>({
    queryKey: ["tags"],
    queryFn: async () => {
      const response = await axios.get("/api/tags");
      return response.data;
    },
  });

  return (
    <>
      <div className="container p-8">
        <button className="btn" onClick={() => router.back()}>
          {" "}
          <ChevronLeft /> Back
        </button>
      </div>

      <form onSubmit={handleSubmit(submit)}>
        <div className="flex -mb-16 font-extrabold justify-center">
          {Edit ? "EDIT POST" : "CREATE POST"}
        </div>
        <div className="grid  grid-cols gap-4 	  place-content-center my-36">
          <input
            type="text"
            placeholder="Post title"
            className="input input-bordered w-[300px]  md:w-[450px] "
            {...register("title", { required: true })}
          />

          <textarea
            className="textarea textarea-bordered w-full max-w-lg"
            placeholder="description"
            {...register("description", { required: true })}
          />

          {isLoading ? (
            <div className="flex justify-center mt-4">
              <span className=" bg-red-900 loading loading-spinner loading-sm"></span>
            </div>
          ) : (
            <select
              className="input select-bordered w-full max-w-lg"
              {...register("tagId", { required: true })}
              defaultValue=""
            >
              <option disabled value="">
                Select tags
              </option>

              {dataTags &&
                dataTags?.map(({ name, id }) => (
                  <option key={id} value={id}>
                    {name}
                  </option>
                ))}
            </select>
          )}
          <button type="submit" className="btn">
            {!Edit ? "CREATE" : "UPDATE"}
          </button>
        </div>
      </form>
    </>
  );
}
