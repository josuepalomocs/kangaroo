import MainPage from "./components/Features/Main/MainPage";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./components/Features/Login/LoginPage";
import RegisterPage from "./components/Features/Register/RegisterPage";
import { useContext } from "react";
import { FirebaseAuthContext } from "./components/Providers/FirebaseAuthProvider";

export default function App() {
  const user = useContext(FirebaseAuthContext);

  async function loginRegisterLoader() {
    if (user) {
      return redirect("/");
    }
    return null;
  }

  async function mainLoader() {
    if (!user) {
      return redirect("/login");
    }
    return null;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
      loader: mainLoader,
    },
    {
      path: "/login",
      element: <LoginPage />,
      loader: loginRegisterLoader,
    },
    {
      path: "/register",
      element: <RegisterPage />,
      loader: loginRegisterLoader,
    },
  ]);

  return <RouterProvider router={router} />;
}
