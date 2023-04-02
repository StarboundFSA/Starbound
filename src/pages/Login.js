import Head from "next/head";
import react from "react";
import useSupabase from "../../supabase";
import NavigationBar from "/components/NavigationBar";
import ChatWidget from "../../components/ChatWidget";
import Auth from "../../components/Auth";
import Footer from "/components/Footer";
import { useEffect, useState } from "react";

{
  loggedIn ? (
    <ChatWidget
      currentUser={currentUser}
      session={session}
      supabase={supabase}
    />
  ) : (
    <Auth supabase={supabase} />
  );
}
