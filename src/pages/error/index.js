import { Navigate, useRouteError, useLocation } from "react-router-dom";
import ForbiddenPage from "./forbidden-page";
import InternalServerPage from "./internal-server-page";
import NotFoundPage from "./not-found-page";

export function ErrorElement() {
  const error = useRouteError();
  const location = useLocation();

  if (error?.status === 404)
    return (
      <Navigate to="/404" state={{ path: location.pathname }} replace={false} />
    );
  if (error?.status === 403) return <Navigate to="/403" />;

  return <Navigate to="/500" />;
}

const errorRoutes = [
  {
    path: "/403",
    element: <ForbiddenPage />,
  },
  {
    path: "/404",
    element: <NotFoundPage />,
  },
  {
    path: "/500",
    element: <InternalServerPage />,
  },
];

export default errorRoutes;
