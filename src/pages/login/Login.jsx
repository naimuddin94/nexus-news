import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLoginBtn from "../../components/shared/SocialLoginBtn";
import { useState } from "react";
import useAuthInfo from "../../hooks/useAuthInfo";
import Swal from "sweetalert2";
import ErrorAlert from "../../components/utility/ErrorAlert";

const Login = () => {
  const [error, setError] = useState(null);
  const { loginUser, loading, setLoading } = useAuthInfo();

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then(() => {
        navigate(location.state ? location.state : "/");
        Swal.fire({
          icon: "success",
          title: "Login successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        setError(null);
        e.target.reset();
      })
      .catch((err) => {
        setLoading(false);
        const errorCode = err.code;
        const errMessage = errorCode.replace("auth/", "");
        setError(errMessage);
      });
  };
  return (
    <div className="hero min-h-screen bg-black/50 bg-blend-overlay bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1535350356005-fd52b3b524fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
      <div className="card shrink-0 w-full max-w-sm shadow rounded bg-base-100">
        <form onSubmit={handleLogin} className="card-body pb-2">
          {error && <ErrorAlert>{error}</ErrorAlert>}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered rounded"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered rounded"
              required
            />
            <label className="label">
              <span className="label-text-alt text-sm">
                Are you new to here?
                <Link to="/register" className="link link-hover ml-1">
                  Register
                </Link>
              </span>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary rounded bg-third border-none hover:ring text-black hover:ring-primary">
              {loading ? (
                <span className="loading loading-spinner text-accent"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
        <hr />
        <SocialLoginBtn />
      </div>
    </div>
  );
};

export default Login;
