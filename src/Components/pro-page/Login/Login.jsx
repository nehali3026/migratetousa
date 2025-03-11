import axios from "axios";
import { useState } from "react";
import PropTypes from "prop-types";

const Login = ({ setToken }) => {
  const [userValues, setUserValues] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserValues({
      ...userValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_APP_BAKEND_URL}/auth/login`,
        {
          email: userValues.email,
          password: userValues.password,
        }
      );
      if (response.status === 200) {
        sessionStorage.setItem("access-token", response?.data?.token);
        setToken(response?.data?.token);
      }
      setLoading(false);
    } catch (error) {

      setError(error?.response?.data?.error || error?.message);
      setLoading(false);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 ">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between ">
          <a
            className="flex items-center gap-2 bg-(--bg-main) py-1 px-2 rounded-full"
            href="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className=" h-6 w-6 mr-2 font-thin"
            >
              <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
              <path d="m21.854 2.147-10.94 10.939"></path>
            </svg>
            <span className="font-bold text-xl">
              MoveToUSA<span className="text-purple-600">.co</span>
            </span>
          </a>
        </div>
      </header>
      <div className="pt-10 min-h-[calc(100vh-190px)]">
        <div className="rounded-xl border border-(--border-light-gray) bg-(--bg-main) text-(--text-primary-opacity) shadow w-full max-w-md mx-auto">
          <div className="flex flex-col space-y-1.5 p-6">
            <div className="tracking-tight text-2xl font-bold text-center">
              Login to Unlimited Search
            </div>
          </div>
          <div className="p-6 pt-0">
            <form className="space-y-4" onSubmit={(e) => handleSubmit(e)}>
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Email
                </label>
                <input
                  className="flex h-9 w-full rounded-[0.5rem] mt-2 border border-(--border-light-gray) bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  id="email"
                  type="email"
                  required
                  value={userValues?.email}
                  name="email"
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Password
                </label>
                <input
                  className="flex h-9 w-full rounded-[0.5rem] mt-2 border border-(--border-light-gray) bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  id="password"
                  type="password"
                  required
                  value={userValues?.password}
                  name="password"
                  onChange={handleInputChange}
                />
              </div>
              {error && (
                <div className="text-red-500 text-sm mb-4 text-center">
                  <div className="my-2 flex items-center justify-center gap-2 bg-red-50 p-3 rounded-lg border border-red-200">
                    <span>{error}</span>
                  </div>
                </div>
              )}
              <button
                className="inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-[0.5rem] text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-(--text-primary-hover) text-(--white) shadow hover:bg-(--text-primary-hover)/90 h-9 px-4 py-2 w-full"
                type="submit"
                disabled={loading}
              >
                {loading ? "Logging in...." : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
