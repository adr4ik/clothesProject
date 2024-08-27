import fire from "@/fire";
import { error } from "console";
import { sign } from "crypto";
import React, { useState } from "react";

type User = { user: null | object; admin: boolean } | null;

export default function useAuth() {
  const [user, setUser] = useState<User>(null);

  async function login(email: string, password: string) {
    return fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => res)
      .catch((error) => error);
  }

  async function signup(
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) {
    return fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (res) => {
        if (res.user) {
          await res.user.updateProfile({
            displayName: `${firstName} ${lastName}`,
          });
        }
        return res;
      })
      .catch((error) => error);
  }

  async function logOut() {
    fire.auth().signOut();
  }

  async function authListener() {
    const unsubscribe = fire.auth().onAuthStateChanged((user) => {
      if (user) {
        const isAdmin = user.email === "admin888@gmail.com";
        setUser({ user: user, admin: isAdmin });
      } else {
        setUser({ user: null, admin: false });
      }
    });

    return () => unsubscribe();
  }

  return { login, signup, logOut, authListener, user };
}
