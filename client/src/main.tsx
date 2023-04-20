import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import FirebaseAuthProvider from "./components/Providers/FirebaseAuthProvider";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    blue: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a",
      950: "#172554",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <FirebaseAuthProvider>
        <App />
      </FirebaseAuthProvider>
    </ChakraProvider>
  </React.StrictMode>
);
