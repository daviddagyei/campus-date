export interface User {
  id: string;
  email: string;
  name: string;
  school: string;
  major: string;
  graduationYear: number;
  gender: string;
  bio: string;
  photoURL: string;
  visibilityScope: 'school-only' | 'all';
  interests: string[];
  createdAt: string;
  updatedAt: string;
}

export interface UserProfile extends Omit<User, 'email'> {
  age: number;
}