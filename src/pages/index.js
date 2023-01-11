import { Outlet, useLocation } from "react-router-dom";
import authRoutes from "./auth";
import LandingPage from "./auth/landing";
import errorRoutes, { ErrorElement } from "./error";
import privateRoutes from "./private";

function PageLayout() {
  const location = useLocation();
  const isLanding = ["/sign-in", "/landing"].indexOf(location.pathname) > -1;
  return (
    <>
      {isLanding && <LandingPage />}
      <Outlet />
    </>
  );
}

const pageRoutes = [
  {
    path: "/",
    element: <PageLayout />,
    errorElement: <ErrorElement />,
    children: [...authRoutes, ...errorRoutes, ...privateRoutes],
  },
];

export default pageRoutes;
