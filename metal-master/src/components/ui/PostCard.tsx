"use client";

import React from "react";
import { BlogPost } from "@/consts/blogPosts";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa';

interface PostCardProps {
  post: BlogPost;
}

function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <div 
        className="overflow-hidden rounded-lg border border-transparent h-full transition-all duration-300 hover:-translate-y-[5px] hover:shadow-xl bg-zinc-900/80 backdrop-blur-sm hover:border-weldingRed/20 hover:shadow-weldingRed/10"
      >
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            loading="lazy"
            quality={70}
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute top-4 right-4 bg-weldingRed text-white text-xs font-medium py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Artykuł
          </div>
        </div>
        <div className="p-6 relative">
          {/* Czerwona linia dekoracyjna */}
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-weldingRed to-ctaOrange transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          
          <h3 className="mb-3 text-xl font-bold font-oswald transition-colors duration-300 group-hover:text-weldingRed text-white">
            {post.title}
          </h3>
          <p className="mb-4 text-sm text-zinc-400">
            {post.description}
          </p>
          <div className="border-t border-gray-700/20 pt-4 mt-4">
            <div className="flex items-center justify-between text-sm text-zinc-500">
              <div className="flex items-center gap-2">
                <FaUser className="text-weldingRed/70" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-weldingRed/70" />
                <span>{post.date}</span>
              </div>
            </div>
          </div>
          
          <div className="mt-4 flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
            <span className="text-weldingRed">Czytaj więcej</span>
            <FaArrowRight className="ml-2 text-weldingRed group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default React.memo(PostCard);