import BlogItem from "@/components/Blog/blog";
import { getPosts } from "@/sanity/sanity-utils";

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="py-5">
      {posts?.length > 0 ? (
        posts.map((post: any) => <BlogItem key={post._id} blog={post} />)
      ) : (
        <p>No posts found</p>
      )}
    </div>
  );
}
