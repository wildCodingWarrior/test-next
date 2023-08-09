import { supabase } from "@/supabase/contig";
import { redirect } from "next/navigation";
import React from "react";

const addPost = async (data: FormData) => {
  "use server";

  const title = data.get("title")?.valueOf();
  const content = data.get("content")?.valueOf();

  await supabase.from("posts").insert({ title, content, is_public: true });

  redirect("/");
};

const WritePage = () => {
  return (
    <div className="server">
      <h1 className="mb-5">글 쓰기</h1>
      <form action={addPost}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            name="title"
            type="text"
            placeholder="Title"
          />
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="content"
          >
            Content
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="content"
            name="content"
            type="text"
            placeholder="Content"
          />
          <button className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default WritePage;
