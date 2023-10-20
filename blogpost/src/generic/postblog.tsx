"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { TypeInterface } from "../../types/type";

export default function PostBlog({ Submitform }: any) {
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
      <div>
        <button className="btn" onClick={() => router.push("/")}>
          {" "}
          <ChevronLeft /> Back
        </button>
      </div>
      <form onSubmit={handleSubmit(Submitform)}>
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
            Create
          </button>
        </div>
      </form>
    </>
  );
}
