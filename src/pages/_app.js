import Head from "next/head";
import useSupabase from "../../supabase";
import { CartProvider } from "../../context/cartContext";
import NavigationBar from "/components/NavigationBar";
import ChatWidget from "../../components/ChatWidget";
import Footer from "/components/Footer";
import { useEffect, useState } from "react";
import "../styles/globals.css";

// import "../styles/globals.css";
// import { SessionProvider } from "next-auth/react";
// function MyApp({ Component, pageProps, session }) {
//   return (
//     <>
//       <SessionProvider>
//         <Head>
//           <title>StarBound</title>

//           <meta name="description" content="Generated by create next app" />
//           <link rel="icon" href="/favicon.ico" />
//         </Head>
//         <NavigationBar />

//         <Component {...pageProps} />

//         <ChatWidget />
//         <Footer />
//       </SessionProvider>
//     </>
//   );
// }
// export default MyApp;

function MyApp({ Component, pageProps }) {
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <Head>
        <title>StarBound</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar />
      <CartProvider cartItems={cartItems} setCartItems={setCartItems}>
        <Component {...pageProps} />
      </CartProvider>
      <ChatWidget />
      <Footer />
    </>
  );
}

export default MyApp;
