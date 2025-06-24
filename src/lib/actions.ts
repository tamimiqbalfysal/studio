"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// This is a placeholder for your actual Firebase admin logic.
// You would use the Firebase Admin SDK here to perform secure operations.

const generateUniqueCodes = (count: number): string[] => {
  const codes: string[] = [];
  for (let i = 0; i < count; i++) {
    codes.push(Math.random().toString(36).substring(2, 8).toUpperCase());
  }
  return codes;
};

export async function signUpWithSecretCode(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const secretCode = formData.get("secretCode") as string;

  console.log("Signing up with", { email, password, secretCode });

  // 1. Validate secret code in Firestore.
  //    - Check if code exists and status is 'unused'.
  // 2. If invalid, return { message: "Invalid secret code." }
  if (secretCode.toUpperCase() !== "VALIDCODE") {
     return { message: "Invalid secret code. Please try again." };
  }

  // 3. If valid, create user with Firebase Auth.
  // 4. On success:
  //    - Create a user document in Firestore 'users' collection.
  //    - Mark the used secret code as 'used' and link it to the new user.
  //    - Generate 9 new secret codes.
  //    - Store new codes in Firestore 'secretCodes' collection.
  // 5. If Firebase Auth error, return { message: "Failed to create account." }

  console.log("Sign up successful, redirecting to feed.");
  revalidatePath("/");
  redirect("/feed");
}

export async function login(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  
  console.log("Logging in with", { email, password });
  // 1. Sign in with Firebase Auth.
  // 2. If error, return { message: "Invalid email or password." }

  revalidatePath("/");
  redirect("/feed");
}

export async function logout() {
  // 1. Sign out with Firebase Auth.
  console.log("Logging out.");
  redirect("/");
}

export async function createPost(prevState: any, formData: FormData) {
    const textContent = formData.get("textContent") as string;
    const photo = formData.get("photo") as File;
    const video = formData.get("video") as File;

    console.log("Creating post with:", { textContent, photo, video });

    // 1. Get current authenticated user.
    // 2. Check user's last post timestamp in Firestore to enforce 1-post-per-day rule.
    // 3. If limit reached, return { message: "You can only post once per day." }
    // 4. If media is present, validate size and type.
    // 5. Upload media to Firebase Storage.
    // 6. Create a new post document in Firestore 'posts' collection with content and media URL.
    // 7. Update user's last post timestamp.
    
    revalidatePath("/feed");
    return { message: "Post created successfully!" };
}

export async function updateProfile(prevState: any, formData: FormData) {
    const username = formData.get("username") as string;
    const profilePicture = formData.get("profilePicture") as File;

    console.log("Updating profile:", { username, profilePicture });

    // 1. Get current authenticated user.
    // 2. If profile picture is present, upload to Firebase Storage and get URL.
    // 3. Update user's document in Firestore with new username and photoURL.

    revalidatePath("/profile");
    return { message: "Profile updated successfully!" };
}
