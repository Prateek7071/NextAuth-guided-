import { Lock } from 'lucide-react';
import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { LoginButton } from '@/components/auth/login-button';

const font = Poppins({
  subsets:["latin"],
  weight: ["600"]
})

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center 
      bg-linear-to-b from-sky-400 to-blue-800">
    
        <div className="space-y-6 text-center">
          <div className="flex items-center justify-center gap-4">
          <Lock className='w-12 h-12 text-white' />
          <h1 className={cn("text-6xl font-semibold text-white drop-shadow-md",font.className)}>
            Auth
          </h1>
          </div>
          <p className="text-white text-lg">
            A simple authentication serivce
          </p>
          <div>
            <LoginButton>  
            <Button variant="secondary" size="lg">
              Sign in
            </Button>
            </LoginButton>
          </div>
        </div>
    </main>
 )
}

