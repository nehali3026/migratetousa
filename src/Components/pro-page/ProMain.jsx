import { jwtDecode } from "jwt-decode";
import Footer from "../Footer/Footer";
import Dashboard from "./Dashboard/Dashboard";
import Login from "./Login/Login";
import { useMemo, useState } from "react";

function validateToken(token) {
  try {
    return jwtDecode(token);
  } catch (error) {
    console.error("Token validation failed:", error.message);
    return null;
  }
}

const isTokenValid = (token) => {
  const decoded = validateToken(token);
  if (!decoded) return false;

  const currentTime = Math.floor(Date.now() / 1000); // Convert to seconds
  return decoded.exp > currentTime; // Check if token is still valid
};

const ProMain = () => {
  const [token, setToken] = useState(sessionStorage.getItem("access-token"));
  // const token = sessionStorage.getItem("access-token");
  const accessToken = useMemo(() => {
    return isTokenValid(token) ? token : "";
  }, [token]);
  return (
    <div>
      {accessToken ? <Dashboard /> : <Login {...{ setToken }} />}
      <Footer />
    </div>
  );
};

export default ProMain;
