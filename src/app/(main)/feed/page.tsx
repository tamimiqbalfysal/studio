import { CreatePost } from "@/components/feed/create-post";
import { PostFeed } from "@/components/feed/post-feed";
import { Separator } from "@/components/ui/separator";

export default function FeedPage() {
  // In a real app, you would fetch posts from Firestore here
  // and pass them as a prop to PostFeed.
  const samplePosts = [
    {
      id: "1",
      authorUsername: "JaneDoe",
      authorPhotoURL: "https://placehold.co/100x100.png",
      type: "text" as const,
      textContent: "What a beautiful sunrise this morning! Feeling grateful for the small moments.",
      createdAt: new Date(),
    },
    {
      id: "2",
      authorUsername: "JohnSmith",
      authorPhotoURL: "https://placehold.co/100x100.png",
      type: "photo" as const,
      textContent: "My first attempt at baking sourdough. Came out pretty well!",
      mediaURL: "https://placehold.co/600x400.png",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 3),
    },
     {
      id: "3",
      authorUsername: "EmilyWhite",
      authorPhotoURL: "https://placehold.co/100x100.png",
      type: "text" as const,
      textContent: "Just finished a great book. It's amazing how words can transport you to another world.",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 8),
    },
  ];

  // This would also be fetched from the user's data in Firestore.
  const canPostToday = true;

  return (
    <div className="container mx-auto max-w-2xl py-8">
      <h1 className="text-3xl font-bold font-headline mb-6">Today's Feed</h1>
      <CreatePost canPostToday={canPostToday} />
      <Separator className="my-8" />
      <PostFeed posts={samplePosts} />
    </div>
  );
}
