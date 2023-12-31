import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLoginBtn from "../../components/shared/SocialLoginBtn";
import { useState } from "react";
import ErrorAlert from "../../components/utility/ErrorAlert";
import imageUpload from "../../utility/imageUpload";
import useAuthInfo from "../../hooks/useAuthInfo";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Register = () => {
  const axiosSecure = useAxiosSecure();
  const [error, setError] = useState(null);
  const { createUser, loading, setLoading, setName, setPhoto } = useAuthInfo();
  const navigate = useNavigate();
  const location = useLocation();
  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoFile = form.photo.files[0];

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const hasUppercase = /[A-Z]/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (!emailRegex.test(email)) {
      return setError("Email not valid");
    }

    if (password.length < 6) {
      return setError("Password less than 6 characters");
    }

    if (!hasUppercase) {
      return setError("Password don't have a capital letter");
    }

    if (!hasSpecialCharacter) {
      return setError("Password don't have a special character");
    }

    setError("");
    const photo = await imageUpload(photoFile);

    createUser(email, password)
      .then((result) => {
        event.target.reset();
        navigate(location.state ? location.state : "/");

        // update profile
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            axiosSecure
              .post("/users", { name: name, image: photo, email: email })
              .then(() => {
                setError(null);
                Swal.fire({
                  icon: "success",
                  title: "Account created successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
              });

            setName(name);
            setPhoto(photo);
          })
          .catch((err) => console.log("During update profile", err.message));
      })
      .catch((err) => {
        setLoading(false);
        const errorCode = err.code;
        const errMessage = errorCode.replace("auth/", "");
        setError(errMessage);
      });
  };

  return (
    <div className="hero min-h-screen bg-black/50 bg-blend-overlay bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1535350356005-fd52b3b524fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] py-16">
      <div className="card shrink-0 w-full max-w-sm shadow rounded bg-base-100">
        <form onSubmit={handleRegister} className="card-body pb-2">
          {error && <ErrorAlert>{error}</ErrorAlert>}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input input-bordered rounded"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              name="photo"
              type="file"
              className="file-input rounded file-input-bordered file-input-info w-full max-w-xs"
              required
            />
          </div>
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
                You already have an account?
                <Link to="/login" className="link link-hover ml-1">
                  Login
                </Link>
              </span>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary rounded bg-third border-none hover:ring text-black hover:ring-primary">
              {loading ? (
                <span className="loading loading-spinner text-accent"></span>
              ) : (
                "Register"
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

export default Register;
