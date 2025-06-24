"use client";

import { useFormState, useFormStatus } from "react-dom";
import { createPost } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "../ui/alert";
import { Image as ImageIcon, Video, Send } from 'lucide-react';
import { useState, useRef } from 'react';
import { cn } from "@/lib/utils";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Posting..." : <><Send className="mr-2 h-4 w-4" /> Post Moment</>}
    </Button>
  );
}

export function CreatePost({ canPostToday }: { canPostToday: boolean }) {
  const [state, formAction] = useFormState(createPost, null);
  const [postType, setPostType] = useState<'text' | 'photo' | 'video'>('text');
  const formRef = useRef<HTMLFormElement>(null);

  const handleAction = async (formData: FormData) => {
    await formAction(formData);
    if (!state?.message?.includes("Failed")) {
        formRef.current?.reset();
        setPostType('text');
    }
  }

  if (!canPostToday) {
    return (
      <Card className="bg-muted">
        <CardHeader>
          <CardTitle>See you tomorrow!</CardTitle>
          <CardDescription>You've already shared your moment for today. Come back tomorrow to post again.</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card>
      <form action={handleAction} ref={formRef}>
        <CardHeader>
          <CardTitle>Share Your Moment</CardTitle>
          <CardDescription>What's on your mind today? You can only post once.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-3 gap-2 rounded-lg bg-muted p-1">
              <Button type="button" variant={postType === 'text' ? 'default' : 'ghost'} onClick={() => setPostType('text')}>Text</Button>
              <Button type="button" variant={postType === 'photo' ? 'default' : 'ghost'} onClick={() => setPostType('photo')}><ImageIcon className="mr-2 h-4 w-4"/>Photo</Button>
              <Button type="button" variant={postType === 'video' ? 'default' : 'ghost'} onClick={() => setPostType('video')}><Video className="mr-2 h-4 w-4"/>Video</Button>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="textContent">Your Thought</Label>
            <Textarea id="textContent" name="textContent" placeholder="Share a highlight from your day..." maxLength={280} />
          </div>
          <div className={cn("grid gap-2", postType !== 'photo' && 'hidden')}>
            <Label htmlFor="photo">Upload Photo (max 10MB)</Label>
            <Input id="photo" name="photo" type="file" accept="image/*" />
          </div>
          <div className={cn("grid gap-2", postType !== 'video' && 'hidden')}>
            <Label htmlFor="video">Upload Video (max 50MB)</Label>
            <Input id="video" name="video" type="file" accept="video/*" />
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
