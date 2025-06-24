'use client';

import { PostCard } from './post-card';

// This is a simplified version of the Post type for the component props
type Post = {
  id: string;
  authorUsername: string;
  authorPhotoURL?: string;
  type: 'text' | 'photo' | 'video';
  textContent?: string;
  mediaURL?: string;
  createdAt: Date;
};

interface PostFeedProps {
  posts: Post[];
}

export function PostFeed({ posts }: PostFeedProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold">The feed is empty</h2>
        <p className="text-muted-foreground">Be the first to share a moment today!</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
