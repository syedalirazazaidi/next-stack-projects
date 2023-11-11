import React from "react";
import { ChevronLeft } from "lucide-react";

export default function Backbutton() {
  return (
    <div>
      <div className="container p-8">
        <button className="btn">
          <ChevronLeft /> Back
        </button>
      </div>
    </div>
  );
}
