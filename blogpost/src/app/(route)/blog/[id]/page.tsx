"use client";
import React from "react";
import ButtonAction from "@/components/buttonaction";
import Backbutton from "../../../../components/backbutton";

export default function BlogDetails() {
  return (
    <>
      <Backbutton />
      <div className="container">
        <h2>post One</h2>
        <ButtonAction />
        <p className="text-slate-700">Post one content</p>
      </div>
    </>
  );
}
