"use client";
import Image from "next/image";
import React from "react";
import profilePic from "/public/myimg.jpeg";
import Link from "next/link";
import { Slack } from "lucide-react";

export default function Navbar() {
  return (
    <div className="bg-red-400">
      <div className="navbar px-12 flex justify-center items-center  md:justify-around flex-wrap">
        <div className="flex-1">
          <Link
            href="/"
            className="btn btn-ghost normal-case text-xl text-teal-900"
          >
            blog-post
            <Slack size={40} strokeWidth={1} />
          </Link>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/createblog"
            className="btn btn-ghost normal-case text-xl text-teal-900"
          >
            Create Post
          </Link>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full bg-no-repeat	bg-center">
                <Image src={profilePic} alt="myimage" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
