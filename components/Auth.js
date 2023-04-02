// const signInWithGithub = async () => {
//     let { user, error } = await supabase.auth.signIn({
//         provider: 'github'

const Auth = ({ supabase }) => {
  const signInWithGithub = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth(
      {
        provider: "github",
      },
      {
        redirectTo: "http://localhost:3000",
      }
    );
  };
  return (
    <div>
      <button onClick={signInWithGithub}>Login with Github</button>
    </div>
  );
};

export default Auth;
