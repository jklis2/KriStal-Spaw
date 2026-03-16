import dynamic from "next/dynamic";
import SmallHeroSection from "@/components/ui/SmallHeroSection";
import { blogPosts } from "@/consts/blogPosts";

const BlogContent = dynamic(() => import("@/components/ui/BlogContent"));

export default function Blog() {
  return (
    <main>
      <SmallHeroSection
        title="Blog"
        description="Odkryj świat spawalnictwa poprzez nasze profesjonalne artykuły i poradniki."
      />
      <BlogContent blogPosts={blogPosts} />
    </main>
  );
}