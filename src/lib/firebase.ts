import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: "G-VN6BJ887WP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize auth
export const auth = getAuth(app);

// Initialize analytics only in browser environment
export const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);

// Helper function to validate email domain
export const isValidCollegeEmail = (email: string) => {
  return email.endsWith('.edu');
};