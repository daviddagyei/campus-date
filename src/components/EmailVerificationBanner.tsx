import { useState } from 'react';
import { auth } from '@/lib/firebase';
import { Button } from '@/components/ui/button';

export function EmailVerificationBanner() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const resendVerificationEmail = async () => {
    if (!auth.currentUser) return;
    
    try {
      setSending(true);
      await auth.currentUser.sendEmailVerification();
      setSent(true);
    } catch (error) {
      console.error('Error sending verification email:', error);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
      <div className="flex">
        <div className="flex-1">
          <p className="text-sm text-yellow-700">
            Please verify your email address to access all features.
            {sent && ' Verification email sent!'}
          </p>
        </div>
        <div className="pl-3">
          <Button
            variant="outline"
            size="sm"
            onClick={resendVerificationEmail}
            disabled={sending || sent}
          >
            {sending ? 'Sending...' : sent ? 'Email Sent' : 'Resend Email'}
          </Button>
        </div>
      </div>
    </div>
  );
}