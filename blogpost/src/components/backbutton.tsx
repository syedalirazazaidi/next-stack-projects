import React from "react";
import { ChevronLeft } from "lucide-react";
// import { useRouter } from "next/navigation";

export default function Backbutton() {
  // const router = useRouter();

  return (
    <div>
      <div className="container p-8">
        <button className="btn">
          {/* onClick={() => router.back()} */} <ChevronLeft /> Back
        </button>
      </div>
    </div>
  );
}
