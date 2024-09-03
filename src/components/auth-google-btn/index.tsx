import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "../ui/button";
import GoogleIcon from "@/lib/icons/google";

const GoogleAuth = () => {
  const router = useRouter();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const pop = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        router.push("/");
        toast.success("Вы успешно вошли в аккаунт!");
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <Button
      onClick={() => {
        pop();
      }}
      variant="ghost"
      className=" flex justify-center items-center gap-3 rounded-none border border-gray-200"
    >
      <GoogleIcon />

      <p className=" font-bold tracking-[2px]">Продолжить через Google</p>
    </Button>
  );
};
// style={{ color: "#de3b2b" }}
export default GoogleAuth;
