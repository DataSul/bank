import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  let auth = { token: false }; 
  const token = localStorage.getItem("token"); 

  if (token) {
    auth.token = true; 
  }

  return auth.token ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;