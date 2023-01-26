import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import pageRoutes from "./pages";
import theme from "./theme/default";
import { ConfigProvider } from "./hooks/use-config";
import { TokenProvider } from "./hooks/auth/use-token";

function App() {
  const router = createBrowserRouter(pageRoutes);
  return (
    <ThemeProvider theme={theme}>
      <ConfigProvider>
        <TokenProvider>
          <RouterProvider router={router} />
        </TokenProvider>
      </ConfigProvider>
    </ThemeProvider>
  );
}
export default App;
