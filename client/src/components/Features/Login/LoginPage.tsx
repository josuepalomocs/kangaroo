import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { FirebaseAuthContext } from "../../Providers/FirebaseAuthProvider";
import { redirect } from "react-router-dom";
import { useFormik } from "formik";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { firebaseAuth } from "../../../lib/firebase";
import firebase from "firebase/compat";
import {
  logInUsingEmailAndPassword,
  logInUsingGooglePopup,
} from "../../../services/authServices";

export default function LoginPage() {
  const user = useContext(FirebaseAuthContext);

  if (user) {
    redirect("/");
  }

  const loginFormik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (values) => {
      logInUsingEmailAndPassword(values.email, values.password);
    },
  });

  return (
    <Container paddingY={8}>
      <Box
        height="full"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box flex={1}>
          <Heading marginBottom={8}>Login</Heading>
          <Box width="full" display="flex" gap={4} marginBottom={8}>
            <Button
              width="full"
              height={12}
              display="flex"
              gap="4"
              backgroundColor="white"
              border="1px"
              borderColor="gray.200"
              borderRadius="12px"
              onClick={logInUsingGooglePopup}
            >
              <Image
                boxSize="20px"
                src="/google_logo.svg"
                alt="Google logo"
              ></Image>
              Continue with Google
            </Button>
          </Box>
          <Divider marginBottom={8} />
          <Box marginBottom={8}>
            <form onSubmit={loginFormik.handleSubmit}>
              <FormControl display="flex" flexDirection="column" gap={4}>
                <Box>
                  <FormLabel>Email</FormLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="example@kangaroo.com"
                    onChange={loginFormik.handleChange}
                    value={loginFormik.values.email}
                    borderTop="none"
                    borderLeft="none"
                    borderRight="none"
                    borderBottom="1px solid gray.200"
                    rounded="none"
                  />
                </Box>
                <Box>
                  <FormLabel>Password</FormLabel>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    onChange={loginFormik.handleChange}
                    value={loginFormik.values.password}
                    borderTop="none"
                    borderLeft="none"
                    borderRight="none"
                    borderBottom="1px solid gray.200"
                    rounded="none"
                  />
                </Box>
                <Box textAlign="right">
                  <Link color="black">Forgot password?</Link>
                </Box>
                <Box>
                  <Button
                    type="submit"
                    width="full"
                    backgroundColor="black"
                    color="white"
                    height={12}
                    borderRadius="12px"
                  >
                    Login
                  </Button>
                </Box>
              </FormControl>
            </form>
          </Box>
          <Box textAlign="center">
            <Text color="gray.500">
              Don't have an account?{" "}
              <Link href="/register" color="black">
                Register
              </Link>
            </Text>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
