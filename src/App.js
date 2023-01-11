import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import pageRoutes from "./pages";
import theme from "./theme/default";

function App() {
  const router = createBrowserRouter(pageRoutes);
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
export default App;
