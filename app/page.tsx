import PostCard from "@/components/PostCard";
import RealTimePosts from "@/components/RealTimePosts";
import { supabase } from "@/supabase/contig";

export const revalidate = 1;

export default async function Home() {
  const { data: posts } = await supabase.from("posts").select("*");

  return (
    <div className="container server">
      <h1 className="text-2xl text-center">Posts</h1>
      <ul className="space-y-4">
        <RealTimePosts posts={posts!} />
        {/* {posts!.map((post) => (
          <PostCard key={post.id} post={post} />
        ))} */}
      </ul>
    </div>
  );
}
