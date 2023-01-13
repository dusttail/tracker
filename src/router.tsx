import { createBrowserRouter } from "react-router-dom";
import Header from "./containers/Header";
import LinearSpinner from "./containers/LinearSpinner";
import ErrorPage from "./pages/Error";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Search from "./pages/Search";

const errorElement = (
  <>
    <Header />
    <LinearSpinner />
    <ErrorPage />
  </>
);

function PageWrapper(props: React.PropsWithChildren) {
  return (
    <>
      <Header />
      <LinearSpinner />
      {props.children}
    </>
  );
}

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    errorElement,
  },
  {
    path: "/",
    element: (
      <PageWrapper>
        <Home />
      </PageWrapper>
    ),
    errorElement,
  },
  {
    path: "/profile",
    element: (
      <PageWrapper>
        <Profile />
      </PageWrapper>
    ),
    errorElement,
  },
  {
    path: "/search",
    element: (
      <PageWrapper>
        <Search />
      </PageWrapper>
    ),
    errorElement,
  },
  {
    path: "/info",
    element: (
      <PageWrapper>
        <Info />
      </PageWrapper>
    ),
    errorElement,
  },
]);
