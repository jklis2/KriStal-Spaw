"use client";

import { BlogPost } from "@/consts/blogPosts";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/components/providers/ThemeProvider";

interface PostCardProps {
  post: BlogPost;
}

export default function PostCard({ post }: PostCardProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <div className={`overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
        isDark ? "bg-zinc-900" : "bg-white"
      }`}>
        <div className="relative h-48 w-full">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className={`mb-2 text-xl font-bold group-hover:text-orange-500 ${
            isDark ? "text-white" : "text-steelBlue-dark"
          }`}>
            {post.title}
          </h3>
          <p className={`mb-4 text-sm ${
            isDark ? "text-zinc-400" : "text-gray-600"
          }`}>
            {post.description}
          </p>
          <div className={`flex items-center justify-between text-sm ${
            isDark ? "text-zinc-500" : "text-gray-500"
          }`}>
            <span>{post.author}</span>
            <span>{post.date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}