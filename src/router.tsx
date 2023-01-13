import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Header from "./containers/Header";
import LinearSpinner from "./containers/LinearSpinner";

const ErrorPage = lazy(() => import("./pages/Error"));
const Home = lazy(() => import("./pages/Home"));
const Info = lazy(() => import("./pages/Info"));
const Login = lazy(() => import("./pages/Login"));
const Profile = lazy(() => import("./pages/Profile"));
const Search = lazy(() => import("./pages/Search"));

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
      <Suspense fallback={<></>}>{props.children}</Suspense>
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
