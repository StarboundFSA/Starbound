import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../../supabase';

export default function Signout() {
  const router = useRouter();

  useEffect(() => {
    async function signout() {
      await supabase.auth.signOut();
      router.push('/');
    }
    signout();
  }, [router]);

  return null;
}
