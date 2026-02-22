import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { format } from "date-fns";

// Mock blog data - replace with your actual blog posts
const mockPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications",
    summary: "Learn best practices for structuring large-scale React applications with maintainability in mind.",
    published_date: "2026-02-10",
  },
  {
    id: 2,
    title: "Modern API Design Patterns",
    summary: "Explore RESTful and GraphQL API design patterns for building robust backend services.",
    published_date: "2026-02-05",
  }
];

export default function BlogSection() {
  const isLoading = false;
  const posts = mockPosts;

  return (
    <section id="blog" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-2 sm:gap-3 mb-2">
          <span className="text-primary font-mono text-base sm:text-lg">06.</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight">Blog</h2>
          <div className="hidden sm:block flex-1 h-px bg-primary/30 ml-4" />
        </div>
        <p className="mt-4 text-muted-foreground text-base sm:text-lg">Thoughts on engineering, architecture, and building software.</p>

        {isLoading ? (
          <div className="mt-8 sm:mt-10 space-y-5 sm:space-y-6">
            {[1, 2].map(i => (
              <div key={i} className="bg-card border border-primary/20 rounded-xl p-5 sm:p-6">
                <Skeleton className="h-4 w-24 mb-3" />
                <Skeleton className="h-5 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full" />
              </div>
            ))}
          </div>
        ) : posts.length === 0 ? (
          <p className="mt-8 sm:mt-10 text-muted-foreground text-sm font-mono">{'> '} Blog posts coming soon...</p>
        ) : (
          <div className="mt-8 sm:mt-10 space-y-4 sm:space-y-5">
            {posts.map(post => (
              <Link
                key={post.id}
                to={createPageUrl("BlogPostPage") + `?id=${post.id}`}
                className="block bg-card border border-primary/20 rounded-xl p-5 sm:p-6 hover:border-primary hover:bg-card/80 hover:glow-cyan-sm transition-all duration-300 group"
              >
                <p className="text-xs text-primary font-mono">
                  {post.published_date ? format(new Date(post.published_date), 'MMM d, yyyy') : 'Draft'}
                </p>
                <h3 className="mt-2 text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 sm:mt-3 text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-2">
                  {post.summary}
                </p>
                <span className="mt-3 sm:mt-4 inline-flex items-center text-primary text-xs sm:text-sm font-medium font-mono">
                  {'> '} Read more
                  <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}