import { ProfileEditor } from "@/components/profile/profile-editor";
import { SecretCodes } from "@/components/profile/secret-codes";
import { Separator } from "@/components/ui/separator";

export default function ProfilePage() {

  // In a real app, you would fetch the current user's profile and codes from Firestore.
  const userProfile = {
    username: 'JaneDoe',
    email: 'jane.doe@example.com',
    photoURL: 'https://placehold.co/100x100.png',
  };

  const secretCodes = [
    { id: '1', code: 'A1B2C3D4' },
    { id: '2', code: 'E5F6G7H8' },
    { id: '3', code: 'I9J1K2L3' },
    { id: '4', code: 'M4N5O6P7' },
    { id: '5', code: 'Q8R9S1T2' },
    { id: '6', code: 'U3V4W5X6' },
    { id: '7', code: 'Y7Z8A9B1' },
    { id: '8', code: 'C2D3E4F5' },
    { id: '9', code: 'G6H7I8J9' },
  ];

  return (
    <div className="container mx-auto max-w-2xl py-8">
      <h1 className="text-3xl font-bold font-headline mb-6">Your Profile</h1>
      <ProfileEditor user={userProfile} />
      <Separator className="my-8" />
      <SecretCodes codes={secretCodes} />
    </div>
  );
}
