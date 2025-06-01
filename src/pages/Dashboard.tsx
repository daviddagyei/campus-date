import { Button } from '@/components/ui/button';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Discover</h1>
          <div className="grid grid-cols-1 gap-6">
            <p className="text-gray-600">No profiles to show at the moment.</p>
            <Button variant="outline" className="w-full sm:w-auto">
              Update Preferences
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}