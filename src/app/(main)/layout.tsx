import { MainNav } from "@/components/main-nav";
import { AuthGuard } from "@/hooks/use-auth";

export default function MainAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <div className="flex min-h-screen flex-col">
        <MainNav />
        <main className="flex-1">
          {children}
        </main>
      </div>
    </AuthGuard>
  );
}
