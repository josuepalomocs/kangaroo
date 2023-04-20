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
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { firebaseAuth } from "../../../lib/firebase";
import {
  logInUsingGooglePopup,
  registerUser,
} from "../../../services/authServices";

export default function RegisterPage() {
  const user = useContext(FirebaseAuthContext);

  if (user) {
    redirect("/");
  }

  const registerFormik = useFormik({
    initialValues: { username: "", email: "", password: "", cpassword: "" },
    onSubmit: (values) => {
      registerUser(
        values.username,
        values.email,
        values.password,
        values.cpassword
      );
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
          <Heading marginBottom={8}>Register</Heading>
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
            <form onSubmit={registerFormik.handleSubmit}>
              <FormControl display="flex" flexDirection="column" gap={4}>
                <Box>
                  <FormLabel>Username</FormLabel>
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="kangaroo"
                    onChange={registerFormik.handleChange}
                    value={registerFormik.values.username}
                    borderTop="none"
                    borderLeft="none"
                    borderRight="none"
                    borderBottom="1px solid gray.200"
                    rounded="none"
                  />
                </Box>
                <Box>
                  <FormLabel>Email</FormLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="example@kangaroo.com"
                    onChange={registerFormik.handleChange}
                    value={registerFormik.values.email}
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
                    onChange={registerFormik.handleChange}
                    value={registerFormik.values.password}
                    borderTop="none"
                    borderLeft="none"
                    borderRight="none"
                    borderBottom="1px solid gray.200"
                    rounded="none"
                  />
                </Box>
                <Box>
                  <FormLabel>Confirm password</FormLabel>
                  <Input
                    id="cpassword"
                    name="cpassword"
                    type="password"
                    placeholder="••••••••"
                    onChange={registerFormik.handleChange}
                    value={registerFormik.values.cpassword}
                    borderTop="none"
                    borderLeft="none"
                    borderRight="none"
                    borderBottom="1px solid gray.200"
                    rounded="none"
                  />
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
                    Register
                  </Button>
                </Box>
              </FormControl>
            </form>
          </Box>
          <Box textAlign="center">
            <Text color="gray.500">
              Already have an account?{" "}
              <Link href="/login" color="black">
                Login
              </Link>
            </Text>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
