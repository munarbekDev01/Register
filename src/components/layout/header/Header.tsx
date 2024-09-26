"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import scss from "./Header.module.scss";

const Header = () => {
  const { data: session } = useSession();
  if (!session) {
    return (
      <>
        <button onClick={() => signIn('github')}>github</button>
        <button onClick={() => signIn('google')}>google</button>
        {/* <button onClick={() => signIn()}>lodin</button> */}
      </>
    );
  }
  return (
    <div className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
        {/* <img src={session?.user?.image} alt="ava" /> */}
      <h1>{session?.user?.name}</h1>
      <h1>{session?.user?.email}</h1>
      <button onClick={() => signOut()}>lagout</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
