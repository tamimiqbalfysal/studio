import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sun } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Sun className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-bold font-headline text-primary-foreground">
            Today
          </h1>
        </div>
        <div className="flex gap-2">
          <Button asChild variant="ghost">
            <Link href="/login">Log In</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <section className="py-20 md:py-32">
            <div className="max-w-3xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary/20 rounded-full">
                  <Sun className="h-16 w-16 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary-foreground tracking-tight mb-6">
                Go Global
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-10">
                Today is a new kind of social media. No endless scrolling, no
                pressure to perform. Just one post, every day, to share a moment
                that matters.
              </p>
              <Button asChild size="lg" className="font-bold text-lg">
                <Link href="/signup">Get Started</Link>
              </Button>
            </div>
          </section>

          <section className="py-20">
            <h2 className="text-3xl font-bold font-headline text-primary-foreground mb-12">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">1. Get a Code</h3>
                  <p className="text-muted-foreground">
                    Access is exclusive. You need a secret code from a friend to join.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">2. Share Your Moment</h3>
                  <p className="text-muted-foreground">
                    Post one photo, video, or thought per day. Make it count.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">3. Invite Friends</h3>
                  <p className="text-muted-foreground">
                    After you join, you get your own codes to share and grow the community.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>

      <footer className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Today. All rights reserved.</p>
      </footer>
    </div>
  );
}
