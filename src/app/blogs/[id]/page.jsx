import BlogDetailPage from "@/views/BlogDetailPage";
import { POSTS } from "@/data/blogPosts";

export function generateStaticParams() {
  return POSTS.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = POSTS.find((p) => p.id === Number(id));
  if (!post) return { title: "Post not found" };
  return { title: post.title, description: post.excerpt };
}

export default function Page() {
  return <BlogDetailPage />;
}
