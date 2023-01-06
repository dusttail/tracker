import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/Error";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Settings from "./pages/Settings";

const errorElement = <ErrorPage />;

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    errorElement,
  },
  {
    path: "/",
    element: <Home />,
    errorElement,
  },
  {
    path: "/profile",
    element: <Profile />,
    errorElement,
    children: [
      {
        path: "/profile/settings",
        element: <Settings />,
        errorElement,
      },
    ],
  },
  {
    path: "/search",
    element: <Search />,
    errorElement,
  },
  {
    path: "/info",
    element: <Info />,
    errorElement,
  },
]);
