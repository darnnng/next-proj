import { SignInForm } from "@/components/AuthForm/SignInForm";
import { GoogleButton } from "@/components/Button/GoogleButton";

export default async function Signin() {
  return (
    <>
      <h1>Sign In </h1>
      <GoogleButton />
      <SignInForm />
    </>
  );
}
