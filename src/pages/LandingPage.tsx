import { SignInButton } from '@/components/auth/SignInButton';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            Find Your Perfect Match on Campus
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with students from your college. Build meaningful relationships with people who share your academic journey.
          </p>
          <SignInButton />
          <p className="mt-4 text-sm text-gray-500">
            By signing up, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}