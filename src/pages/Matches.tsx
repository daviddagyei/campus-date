import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

export default function Matches() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">My Matches</h1>
          <div className="space-y-4">
            <p className="text-gray-600">No matches yet. Keep exploring!</p>
            <Button variant="outline" className="w-full sm:w-auto">
              <MessageCircle className="w-4 h-4 mr-2" />
              View Messages
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}