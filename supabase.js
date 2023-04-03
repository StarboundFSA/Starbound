import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
// );

const useSupabase = () => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
  const [currentUser, setCurrentUser] = useState(null);
  const [session, setSession] = useState(null);
  //const {data: {session, setSession }} = useState(supabase.auth.getSession());

  supabase.auth.onAuthStateChange(async (_event, session) => {
    setSession(session);
  });

  const getCurrentUser = async () => {
    if (session?.user.id) {
      const { data: currentUser } = await supabase
        .from("user")
        .select("*")
        .eq("id", session.user.id);
      if (currentUser.length) {
        const foundUser = currentUser[0];
        await supabase
          .from(`user:id=eq.${foundUser.id}`)
          .on("UPDATE", (payload) => {
            setCurrentUser(payload.new);
          })
          .subscribe();
        return foundUser;
      } else {
        return null;
      }
    }
  };

  useEffect(() => {
    (async () => {
      const foundUser = await getCurrentUser();
      setCurrentUser(foundUser);
    })();
  }, [session]);

  return { currentUser, session, supabase };
};

export default useSupabase;
