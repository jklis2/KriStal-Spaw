import { BlogPost } from "@/consts/blogPosts";
import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
  post: BlogPost;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <div className="overflow-hidden rounded-lg bg-zinc-900 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
        <div className="relative h-48 w-full">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="mb-2 text-xl font-bold text-white group-hover:text-orange-500">
            {post.title}
          </h3>
          <p className="mb-4 text-sm text-zinc-400">
            {post.description}
          </p>
          <div className="flex items-center justify-between text-sm text-zinc-500">
            <span>{post.author}</span>
            <span>{post.date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}