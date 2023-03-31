import react from 'react';
import Head from 'next/head';
import { useEffect, useState } from 'react';

const [loggedIn, setLoggedIn] = useState(false);
useEffect(()=> {
    setLoggedIn(!!session)
}, [session])