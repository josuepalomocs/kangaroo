import { Container, Text, Button } from "@chakra-ui/react";
import { useContext } from "react";
import { FirebaseAuthContext } from "../../Providers/FirebaseAuthProvider";
import { redirect } from "react-router-dom";
import { signOut } from "firebase/auth";
import { firebaseAuth } from "../../../lib/firebase";

export default function MainPage() {
  const user = useContext(FirebaseAuthContext);

  if (!user) {
    redirect("/login");
  }

  function signOutUser() {
    signOut(firebaseAuth)
      .then(() => {
        console.log("User logged out.");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Container paddingY={8}>
      <Text>{user?.email} is logged in.</Text>
      <Button onClick={signOutUser}>Log out</Button>
    </Container>
  );
}
