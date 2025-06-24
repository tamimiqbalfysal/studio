"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { signUpWithSecretCode } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { isFirebaseConfigured } from "@/lib/firebase";
import { Terminal } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending || !isFirebaseConfigured}>
      {pending ? "Creating Account..." : "Create Account"}
    </Button>
  );
}

export function SignupForm() {
  const [state, formAction] = useActionState(signUpWithSecretCode, null);

  return (
    <Card className="w-full max-w-sm">
      <form action={formAction}>
        <CardHeader>
          <CardTitle className="text-2xl font-headline">Create an Account</CardTitle>
          <CardDescription>
            Enter your details and a valid secret code to join.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
           {!isFirebaseConfigured && (
            <Alert variant="destructive">
              <Terminal className="h-4 w-4" />
              <AlertTitle>Firebase Not Configured</AlertTitle>
              <AlertDescription>
                Please configure your Firebase credentials to enable authentication. A valid secret code is `VALIDCODE` for testing.
              </AlertDescription>
            </Alert>
          )}
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" name="email" placeholder="m@example.com" required disabled={!isFirebaseConfigured} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" name="password" required disabled={!isFirebaseConfigured}/>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="secretCode">Secret Code</Label>
            <Input id="secretCode" type="text" name="secretCode" placeholder="ABC-123" required disabled={!isFirebaseConfigured}/>
          </div>
           {state?.message && (
             <Alert variant="destructive">
               <AlertDescription>{state.message}</AlertDescription>
             </Alert>
           )}
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <SubmitButton />
           <div className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="underline hover:text-primary">
              Log in
            </Link>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
}
