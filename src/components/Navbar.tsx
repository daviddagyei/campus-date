import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { auth } from '@/lib/firebase';

export default function Navbar() {
  const { user } = useAuth();

  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <nav className="border-b bg-white/80 backdrop-blur-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <Heart className="h-8 w-8 text-purple-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">CampusConnect</span>
          </Link>
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link to="/matches">
                  <Button variant="outline\" size="sm">Matches</Button>
                </Link>
                <Link to="/profile">
                  <Button variant="outline" size="sm">Profile</Button>
                </Link>
                <Button variant="outline" size="sm" onClick={handleSignOut}>
                  Sign Out
                </Button>
              </>
            ) : (
              <Link to="/">
                <Button size="sm">Sign In</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}