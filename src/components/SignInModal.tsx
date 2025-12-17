'use client';

import { AuthButton } from "@coinbase/cdp-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Video } from "lucide-react";

interface SignInModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SignInModal = ({ open, onOpenChange }: SignInModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Video className="w-8 h-8 text-white" />
            </div>
          </div>
          <DialogTitle className="text-center text-2xl">Sign In to Go Live</DialogTitle>
          <DialogDescription className="text-center">
            Create your profile to start streaming and showcase your products
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center gap-4 py-4">
          <AuthButton />
          <p className="text-xs text-muted-foreground text-center">
            By signing in, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
