"use client";
import React, { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { TypeInterface } from "../../types/type";
interface FormPostProps {
  Submitform: SubmitHandler<TypeInterface>;
  Edit: boolean;
}
export default function PostBlog({ Submitform, Edit }: FormPostProps) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TypeInterface>();
  //   const onSubmit: SubmitHandler<TypeInterface> = (data) => console.log(data);

  return (
    <>
      <div className="container p-8">
        <button className="btn" onClick={() => router.push("/")}>
          {" "}
          <ChevronLeft /> Back
        </button>
      </div>

      <form onSubmit={handleSubmit(Submitform)}>
        <div className="flex -mb-16 font-extrabold justify-center">
          {Edit ? "EDIT POST" : "CREATE POST"}
        </div>
        <div className="grid grid-cols gap-4   place-content-center my-36">
          <input
            type="text"
            placeholder="Post title"
            className="input input-bordered w-[450px] "
            {...register("title", { required: true })}
          />

          <textarea
            className="textarea textarea-bordered w-full max-w-lg"
            placeholder="content"
            {...register("content", { required: true })}
          ></textarea>

          <select
            className="input select-bordered w-full max-w-lg"
            {...register("tag", { required: true })}
            defaultValue=""
          >
            <option disabled value="">
              Select tags
            </option>
            <option>Javascript</option>
            <option>PHP</option>
            <option>Python</option>
          </select>
          <button type="submit" className="btn">
            {!Edit ? "CREATE" : "UPDATE"}
          </button>
        </div>
      </form>
    </>
  );
}
