# **App Name**: Today

## Core Features:

- Secret Code Authentication: Secure sign-up using a secret code validated against a Firestore collection, with Firebase Authentication for email/password.
- Code Generation: Generate 9 unique secret codes per user upon successful sign-up, stored in Firestore and displayed on their profile.
- User Profile: Profile page displaying username, email, and generated secret codes; users can edit their username and profile picture (uploaded via Firebase Storage).
- Daily Post Limit: Allow users to create one post per day (text, photo, or video); track post timestamps in Firestore to enforce the limit. Media file upload size limit validation, ensuring secure storage in Firebase Storage
- Post Feed: Display a feed of posts from all users, sorted by timestamp; include username, content (text/photo/video), and timestamp. Implement lazy loading for media to optimize performance.

## Style Guidelines:

- Primary color: Yellow (#FFC107) for buttons and headers to provide a warm, inviting feel.
- Accent color: Light yellow (#FFEB3B) to highlight interactive elements and provide subtle visual interest.
- Background color: Pale yellow (#FFFDE7) to create a soft and comfortable backdrop for content.
- Body and headline font: 'PT Sans' (sans-serif) to bring a bit of warmth and personality
- Use a responsive, grid-based layout to ensure consistent spacing and alignment across different screen sizes, optimizing for mobile-friendly design.
- Simple, clean icons for navigation and user actions to enhance usability.