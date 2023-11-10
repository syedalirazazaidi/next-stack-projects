"use client";
import axios from "axios";
import { Pencil, Trash } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FormType } from "../../types/type";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function ButtonAction({ id }: { id: string }) {
  const router = useRouter();

  const { mutate: deletepost, isPending: isLoading } = useMutation({
    mutationFn: async () => {
      return await axios.delete(`/api/post/${id}`);
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
    <div className="flex gap-4">
      <Link
        className="bg-green-900 btn text-yellow-50 hover:bg-green-800 rounded-lg"
        href="/edit"
      >
        Edit
        <Pencil />
      </Link>
      <button onClick={() => deletepost()} className="btn btn-error">
        {isLoading && <span className="loading loading-spinner"></span>}
        {isLoading ? (
          "loading"
        ) : (
          <>
            {" "}
            Delete
            <Trash />
          </>
        )}
      </button>
    </div>
  );
}
