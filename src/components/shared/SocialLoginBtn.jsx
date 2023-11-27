import { FaGoogle } from "react-icons/fa";
import useAuthInfo from "../../hooks/useAuthInfo";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLoginBtn = () => {
  const { signInWithGoogle, setPhoto, setName } = useAuthInfo();
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        navigate(location.state ? location.state : "/");
        setPhoto(result?.user?.photoURL);
        setName(result?.user?.displayName);
        Swal.fire({
          icon: "success",
          title: "Login successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        const errorCode = err.code;
        const errMessage = errorCode.replace("auth/", "");
        Swal.fire({
          icon: "error",
          title: errMessage,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="w-full rounded px-8 pb-4 pt-2">
      <button
        onClick={handleGoogleLogin}
        className="btn btn-neutral btn-block rounded"
      >
        <FaGoogle />
        Login with Google
      </button>
    </div>
  );
};

export default SocialLoginBtn;
