import fire from "@/fire";
import { error } from "console";
import { sign } from "crypto";
import React, { use, useState } from "react";

type User = {
  user: null | {
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
  };
  admin: boolean;
} | null;

export default function useAuth() {
  const [user, setUser] = useState<User>(null);
  const [isloading, setIsLoading] = useState(false);

  async function login(email: string, password: string) {
    setIsLoading(true);
    return fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        setIsLoading(false);
        return res;
      })
      .catch((error) => {
        setIsLoading(false);
        return error;
      });
  }

  async function signup(
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) {
    setIsLoading(true);
    return fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (res) => {
        if (res.user) {
          setIsLoading(false);
          await res.user.updateProfile({
            displayName: `${firstName} ${lastName}`,
          });
        }
        return res;
      })
      .catch((error) => {
        setIsLoading(false);
        return error;
      });
  }

  async function logOut() {
    fire.auth().signOut();
  }

  async function authListener() {
    const unsubscribe = fire.auth().onAuthStateChanged((user) => {
      if (user) {
        const isAdmin = user.email === "admin888@gmail.com";
        setUser({
          user: {
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          admin: isAdmin,
        });
      } else {
        setUser({ user: null, admin: false });
      }
    });

    return () => unsubscribe();
  }

  return { login, signup, logOut, authListener, user, isloading };
}
