import { Sun } from "lucide-react";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
       <div className="absolute top-8 left-8">
        <Link href="/" className="flex items-center gap-2 text-primary-foreground hover:text-primary transition-colors">
          <Sun className="h-6 w-6" />
          <span className="text-xl font-bold font-headline">Today</span>
        </Link>
      </div>
      {children}
    </div>
  );
}
