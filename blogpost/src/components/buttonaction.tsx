import { Pencil, Trash } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function ButtonAction() {
  return (
    <div className="flex gap-4">
      <Link
        className="bg-green-900 btn text-yellow-50 hover:bg-green-800 rounded-lg"
        href="/edit"
      >
        Edit
        <Pencil />
      </Link>
      <button className="btn btn-error">
        Delete
        <Trash />
      </button>
    </div>
  );
}
