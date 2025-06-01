import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, isValidCollegeEmail } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

export function SignInButton() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (!isValidCollegeEmail(email)) {
      setError('Please use your college email address (.edu domain)');
      return;
    }

    try {
      setLoading(true);
      setError(null);

      if (isSignUp) {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        await result.user.sendEmailVerification();
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (err: any) {
      console.error('Email auth error:', err);
      if (err?.code === 'auth/email-already-in-use') {
        setError('An account with this email already exists. Please sign in instead.');
      } else if (err?.code === 'auth/weak-password') {
        setError('Password should be at least 6 characters');
      } else if (err?.code === 'auth/user-not-found') {
        setError('No account found with this email. Please sign up instead.');
      } else if (err?.code === 'auth/wrong-password') {
        setError('Incorrect password');
      } else {
        setError(err?.message || 'An error occurred during authentication');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 w-full max-w-md mx-auto">
      <form onSubmit={handleEmailAuth} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            College Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
            placeholder="your.email@college.edu"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
            placeholder="••••••••"
          />
        </div>
        <Button 
          type="submit"
          size="lg" 
          className="w-full"
          disabled={loading}
        >
          <Mail className="w-4 h-4 mr-2" />
          {loading ? 'Processing...' : isSignUp ? 'Sign Up with Email' : 'Sign In with Email'}
        </Button>
      </form>

      <div className="text-center">
        <button
          type="button"
          onClick={() => setIsSignUp(!isSignUp)}
          className="text-sm text-purple-600 hover:text-purple-500"
        >
          {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
        </button>
      </div>

      {error && (
        <div className="rounded-md bg-red-50 p-4">
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}
    </div>
  );
}