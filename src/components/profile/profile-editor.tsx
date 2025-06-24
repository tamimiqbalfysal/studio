"use client";

import { useFormState, useFormStatus } from "react-dom";
import { updateProfile } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { Alert, AlertDescription } from "../ui/alert";
import { User } from 'lucide-react';

interface ProfileEditorProps {
    user: {
        username: string;
        email: string;
        photoURL?: string;
    };
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Saving..." : "Save Changes"}
    </Button>
  );
}

export function ProfileEditor({ user }: ProfileEditorProps) {
  const [state, formAction] = useFormState(updateProfile, null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(user.photoURL ?? null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  const getInitials = (name: string) => name ? name.charAt(0).toUpperCase() : <User className="h-4 w-4" />;

  return (
    <Card>
      <form action={formAction}>
        <CardHeader>
          <CardTitle>Edit Profile</CardTitle>
          <CardDescription>Make changes to your public profile here.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="flex items-center gap-4">
             <Avatar className="h-20 w-20">
              <AvatarImage src={avatarPreview ?? ""} alt={user.username} data-ai-hint="user avatar"/>
              <AvatarFallback className="text-3xl">{getInitials(user.username)}</AvatarFallback>
            </Avatar>
            <div className="grid gap-2">
                 <Label htmlFor="profilePicture">Profile Picture</Label>
                <Input id="profilePicture" name="profilePicture" type="file" accept="image/*" onChange={handleFileChange} />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" name="username" defaultValue={user.username} />
          </div>
           <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue={user.email} disabled />
            <p className="text-xs text-muted-foreground">Your email address cannot be changed.</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
           {state?.message && (
                <Alert variant={state.message.includes("Failed") ? "destructive" : "default"} className="text-sm p-2">
                    <AlertDescription>{state.message}</AlertDescription>
                </Alert>
            )}
            <div className="flex-grow"></div>
           <SubmitButton />
        </CardFooter>
      </form>
    </Card>
  );
}
