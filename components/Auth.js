const Auth = ({ supabase }) => {
    // const signInWithGithub = async () => {
    //     let { user, error } = await supabase.auth.signIn({
    //         provider: 'github'
    const signInWithGithub = () => {
        supabase.auth.signIn({ provider: 'github' });
    };
    return <div>
        <button onClick={signInWithGithub}>Login with Github</button>
    </div>
};

export default Auth;