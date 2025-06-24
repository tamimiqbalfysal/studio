import type { Timestamp } from 'firebase/firestore';

export interface UserProfile {
  uid: string;
  email: string;
  username: string;
  photoURL?: string;
  lastPostTimestamp?: Timestamp;
  createdAt: Timestamp;
}

export type PostType = 'text' | 'photo' | 'video';

export interface Post {
  id: string;
  authorId: string;
  authorUsername: string;
  authorPhotoURL?: string;
  type: PostType;
  textContent?: string;
  mediaURL?: string;
  createdAt: Timestamp;
}

export interface SecretCode {
  id: string;
  code: string;
  status: 'unused' | 'used';
  ownerId?: string; // Who generated the code
  usedBy?: string; // Who used the code
  createdAt: Timestamp;
  usedAt?: Timestamp;
}
