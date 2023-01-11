// import SignInPage from "./sign-in";
import SignOutPage from "./sign-out";

const authRoutes = [
  {
    path: "/landing",
    element: null,
  },
  {
    path: "/sign-in",
    element: null,
  },
  {
    path: "/sign-out",
    element: <SignOutPage />,
  },
];

export default authRoutes;
