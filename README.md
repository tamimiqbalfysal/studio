# Firebase Studio

This is a NextJS starter in Firebase Studio.

## Getting Started

To get started, take a look at `src/app/page.tsx`.

## Firebase Configuration

To run this application and connect it to your Firebase project, you need to provide your Firebase credentials. The "Firebase Not Configured" message appears until you complete these steps.

1.  **Create a `.env.local` file** in the root directory of your project (the same directory as `package.json`).

2.  **Add your Firebase configuration** to the `.env.local` file. Copy the following block into the file and replace the placeholder values with your actual credentials from the Firebase Console.

    ```
    NEXT_PUBLIC_FIREBASE_API_KEY="YOUR_API_KEY"
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="YOUR_PROJECT_ID.firebaseapp.com"
    NEXT_PUBLIC_FIREBASE_PROJECT_ID="YOUR_PROJECT_ID"
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="YOUR_PROJECT_ID.appspot.com"
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="YOUR_MESSAGING_SENDER_ID"
    NEXT_PUBLIC_FIREBASE_APP_ID="YOUR_APP_ID"
    ```

3.  **Find Your Credentials**: You can find these values in your [Firebase Project Settings](https://console.firebase.google.com/). Select your project, click the gear icon (⚙️), go to "Project settings", and under the "Your apps" card, select your web app.

4.  **Restart Your App**: After creating the `.env.local` file, you must restart the development server for the changes to take effect.

Once configured, the "Firebase Not Configured" warning will disappear, and you can test the signup functionality using `VALIDCODE` as the secret code.
