"use client";

import React from "react";
import PostCard from "./PostCard";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/supabase/contig";

const getPosts = async () => {
  const { data } = await supabase.from("posts").select("*");
  return data;
};

const RealTimePosts = ({ posts: initialPosts }: { posts: Post[] }) => {
  const { data: posts } = useQuery(["posts"], getPosts, {
    initialData: initialPosts,
  });

  return (
    <div>
      {posts!.map((post: any) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default RealTimePosts;
