import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";

export default function LoginPage() {
  return (
    <Box
      height="full"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box flex={1}>
        <Heading marginBottom={6}>Login</Heading>
        <FormControl
          display="flex"
          flexDirection="column"
          gap={4}
          marginBottom="4"
        >
          <Box>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="example@kangaroo.com"
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
              type="password"
              placeholder="••••••••"
              borderTop="none"
              borderLeft="none"
              borderRight="none"
              borderBottom="1px solid gray.200"
              rounded="none"
            />
          </Box>
          <Link color="blue.500" textAlign="right">
            Forgot password?
          </Link>
          <Box>
            <Button
              type="submit"
              width="full"
              backgroundColor="black"
              color="white"
              height={12}
              borderRadius="12px"
              marginTop={4}
            >
              Login
            </Button>
          </Box>
        </FormControl>
        <Text textAlign="center" marginBottom={4} color="gray.500">
          Or
        </Text>
        <Box width="full" display="flex" gap={4} marginBottom={4}>
          <Button
            width="full"
            height={12}
            display="flex"
            gap="4"
            backgroundColor="white"
            border="1px"
            borderColor="gray.200"
            borderRadius="12px"
          >
            <Image
              boxSize="20px"
              src="/google_logo.svg"
              alt="Google logo"
            ></Image>
            Continue with Google
          </Button>
        </Box>
        <Text textAlign="center" color="gray.500">
          Don't have an account? <Link color="blue.500">Register</Link>
        </Text>
      </Box>
    </Box>
  );
}
