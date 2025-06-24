'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { formatDistanceToNow } from 'date-fns';
import Image from 'next/image';

type Post = {
  id: string;
  authorUsername: string;
  authorPhotoURL?: string;
  type: 'text' | 'photo' | 'video';
  textContent?: string;
  mediaURL?: string;
  createdAt: Date;
};

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const getInitials = (name: string) => name.charAt(0).toUpperCase();

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={post.authorPhotoURL} alt={post.authorUsername} data-ai-hint="user avatar"/>
            <AvatarFallback>{getInitials(post.authorUsername)}</AvatarFallback>
          </Avatar>
          <div className="grid gap-0.5">
            <p className="font-semibold text-primary-foreground">{post.authorUsername}</p>
            <p className="text-xs text-muted-foreground">
              {formatDistanceToNow(post.createdAt, { addSuffix: true })}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {post.textContent && <p className="mb-4 whitespace-pre-wrap">{post.textContent}</p>}
        {post.mediaURL && post.type === 'photo' && (
          <div className="relative aspect-video overflow-hidden rounded-lg border">
            <Image
              src={post.mediaURL}
              alt={`Post by ${post.authorUsername}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
              data-ai-hint="social media post"
            />
          </div>
        )}
        {post.mediaURL && post.type === 'video' && (
          <div className="overflow-hidden rounded-lg border">
            <video
              src={post.mediaURL}
              controls
              className="w-full"
              preload="metadata"
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
