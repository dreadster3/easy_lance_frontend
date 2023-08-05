import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../app/home/Home";
import { useAuth } from "../providers/AuthProvider";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

function AppRoutes() {
  const { isAuthenticated } = useAuth();

  console.log("isAuthenticated: ", isAuthenticated);

  return (
    <BrowserRouter>
      {isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />}
    </BrowserRouter>
  );
}

export default AppRoutes;
