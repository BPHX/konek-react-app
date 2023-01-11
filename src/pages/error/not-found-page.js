import { useLocation } from "react-router-dom";

function NotFoundPage() {
  const { state } = useLocation();

  return <>Error 404: Page could not be found {state?.path}</>;
}

export default NotFoundPage;
