import { FaGoogle } from "react-icons/fa";

const SocialLoginBtn = () => {
  return (
    <div className="w-full rounded px-8 pb-4 pt-2">
      <button className="btn btn-neutral btn-block rounded">
        <FaGoogle />
        Login with Google
      </button>
    </div>
  );
};

export default SocialLoginBtn;
