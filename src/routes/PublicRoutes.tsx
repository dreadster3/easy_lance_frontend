import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../app/login/Login";

function PublicRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default PublicRoutes;
