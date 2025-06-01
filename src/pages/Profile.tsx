import { Button } from '@/components/ui/button';

export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">My Profile</h1>
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="h-24 w-24 rounded-full bg-gray-200"></div>
              <Button variant="outline" className="ml-4">
                Update Photo
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <p className="text-gray-600">Complete your profile to start matching!</p>
              <Button className="w-full sm:w-auto">
                Edit Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}