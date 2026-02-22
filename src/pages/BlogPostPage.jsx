import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import { format } from "date-fns";
import ReactMarkdown from 'react-markdown';

// Mock blog post data
const mockPosts = [
  {
    id: "1",
    title: "Building Scalable React Applications",
    summary: "Learn best practices for structuring large-scale React applications with maintainability in mind.",
    published_date: "2026-02-10",
    tags: ["React", "Architecture", "Best Practices"],
    content: `# Building Scalable React Applications

When building large-scale React applications, proper architecture and organization are crucial for long-term maintainability and team productivity.

## Component Organization

Start by organizing components into logical folders based on their purpose:
- **Features**: Group components by feature or domain
- **Shared/Common**: Reusable UI components
- **Layout**: Page layouts and structural components

## State Management

Choose the right state management solution based on your needs:
- Context API for simple global state
- Redux/Zustand for complex state management
- React Query for server state

## Code Splitting

Implement code splitting to improve initial load times:
- Use React.lazy() for route-based splitting
- Dynamic imports for large components
- Bundle analysis to identify optimization opportunities

By following these patterns, you'll build applications that scale with your team and user base.`
  },
  {
    id: "2",
    title: "Modern API Design Patterns",
    summary: "Explore RESTful and GraphQL API design patterns for building robust backend services.",
    published_date: "2026-02-05",
    tags: ["API", "Backend", "GraphQL", "REST"],
    content: `# Modern API Design Patterns

API design is a critical aspect of backend development. Let's explore modern patterns for building robust APIs.

## RESTful Best Practices

1. **Resource-based URLs**: Use nouns, not verbs
2. **HTTP methods**: GET, POST, PUT, DELETE for CRUD
3. **Status codes**: Use appropriate HTTP status codes
4. **Versioning**: Include API version in URL or headers

## GraphQL Advantages

GraphQL offers several benefits over traditional REST:
- Single endpoint for all queries
- Client specifies exactly what data it needs
- Strong typing with schema
- Real-time updates with subscriptions

## Security Considerations

Always implement proper security:
- Authentication (JWT, OAuth)
- Rate limiting
- Input validation
- CORS configuration

Choose the right approach based on your application needs and team expertise.`
  }
];

export default function BlogPostPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get('id');
  const navigate = useNavigate();

  // Find post from mock data
  const post = mockPosts.find(p => p.id === postId);
  const isLoading = false;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background px-4 sm:px-6 py-16 sm:py-20 md:py-24">
        <div className="max-w-3xl mx-auto space-y-4">
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-muted-foreground text-sm sm:text-base">Post not found.</p>
          <Button
            variant="outline"
            onClick={() => navigate(-1)}
            className="mt-4 rounded-lg border-primary/50 h-9 sm:h-10 text-sm"
          >
            <ArrowLeft className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-2" /> Back
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background px-4 sm:px-6 py-8 sm:py-10 md:py-12">
      <article className="max-w-3xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6 sm:mb-8 -ml-2 sm:-ml-3 text-muted-foreground hover:text-primary rounded-lg h-9 text-sm"
        >
          <ArrowLeft className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-2" /> Back
        </Button>

        <p className="text-xs sm:text-sm text-primary font-mono">
          {post?.published_date ? format(new Date(post.published_date), 'MMMM d, yyyy') : 'Draft'}
        </p>
        <h1 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight leading-tight">
          {post?.title}
        </h1>

        {post?.tags?.length > 0 && (
          <div className="mt-4 sm:mt-5 flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span key={tag} className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium font-mono text-primary bg-primary/10 border border-primary/30 rounded">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-8 sm:mt-10 prose prose-invert prose-sm sm:prose-base md:prose-lg max-w-none
          prose-headings:text-foreground prose-headings:tracking-tight prose-headings:font-semibold
          prose-p:text-muted-foreground prose-p:leading-relaxed
          prose-a:text-primary prose-a:no-underline hover:prose-a:underline
          prose-strong:text-foreground prose-strong:font-semibold
          prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-xs sm:prose-code:text-sm
          prose-pre:bg-card prose-pre:border prose-pre:border-primary/20 prose-pre:text-xs sm:prose-pre:text-sm
          prose-ul:text-muted-foreground prose-ol:text-muted-foreground
          prose-li:text-muted-foreground">
          <ReactMarkdown>{post?.content || post?.summary || ''}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
}