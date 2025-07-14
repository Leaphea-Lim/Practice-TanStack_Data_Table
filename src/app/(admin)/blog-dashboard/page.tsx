import React from "react";
import BlogTable from "./DataTable";
import { columns } from "./column";
import Link from "next/link";
import { BlogType } from "@/types/blogType";

async function getData(): Promise<BlogType[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}posts`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.posts as BlogType[];
}

export default async function Page() {
  const data = await getData();
  return (
    <section className="w-[95%] mx-auto mt-5">
      {/* Breadcrumb */}
      <nav className="text-md text-gray-500 mb-4">
        <Link href="/dashboard" className="text-gray-500 hover:text-gray-300">
          User List
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-300">Blog Dashboard</span>
      </nav>

      <h1 className="text-2xl mb-5">Blog Dashboard</h1>
      <BlogTable columns={columns} data={data} />
    </section>
  );
}
