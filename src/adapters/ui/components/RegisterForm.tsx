import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { addUserAsync } from "@/services/userService";

interface RegisterFormProps {
  setShowLoginForm: (show: boolean) => void;
  setError: (error: string) => void;
  error: string;
  handleSubmit: (formData: any) => Promise<void>;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  setShowLoginForm,
  setError,
  error,
}) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitRegister = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      const { email, password, username } = formData;
      const result = await (dispatch as any)(
        addUserAsync({ email, password, username })
      );
      if (addUserAsync.rejected.match(result)) {
        setError(result.payload as string);
        setFormData({ username: "", email: "", password: "" });
      } else {
        router.push("/panel");
      }
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmitRegister}>
      {error && (
        <div className="flex justify-center items-center">
          <span className="text-white bg-red-400 shadow-lg shadow-red-300 rounded-md py-2 px-4">
            {error}
          </span>
        </div>
      )}
      <div className="relative">
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          className="block w-full px-4 py-2 mt-1 text-center text-brand-300 bg-transparent border-b-2 border-brand-200 appearance-none focus:outline-none focus:ring-0 focus:border-brand-300 peer"
          placeholder=" "
          onChange={handleOnChange}
        />
        <label
          htmlFor="username"
          className="absolute text-sm text-brand-300 dark:text-brand-200 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-brand-400 peer-focus:dark:text-brand-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Username
        </label>
      </div>
      <div className="relative">
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          className="block w-full px-4 py-2 mt-1 text-center text-brand-300 bg-transparent border-b-2 border-brand-200 appearance-none focus:outline-none focus:ring-0 focus:border-brand-300 peer"
          placeholder=" "
          onChange={handleOnChange}
        />
        <label
          htmlFor="email"
          className="absolute text-sm text-brand-300 dark:text-brand-200 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-brand-400 peer-focus:dark:text-brand-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Email
        </label>
      </div>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          value={formData.password}
          className="block w-full px-4 py-2 mt-1 text-center text-brand-300 bg-transparent border-b-2 border-brand-200 appearance-none focus:outline-none focus:ring-0 focus:border-brand-300 peer"
          placeholder=" "
          onChange={handleOnChange}
        />
        <label
          htmlFor="password"
          className="absolute text-sm text-brand-300 dark:text-brand-200 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-brand-400 peer-focus:dark:text-brand-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Password
        </label>
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center pr-3"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-brand-300"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M1 9a9 9 0 0116 0 9 9 0 01-16 0zm9-7a7 7 0 017 7 7 7 0 01-7 7 7 7 0 01-7-7zm-4 7a4 4 0 118 0 4 4 0 01-8 0z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-brand-300"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M1.707 2.293a1 1 0 011.414 0l14 14a1 1 0 01-1.414 1.414l-2.031-2.031A8.964 8.964 0 019 17C4.477 17 1 13 1 9c0-1.326.322-2.577.892-3.686L1.293 3.707a1 1 0 010-1.414zm5.614 3.47A4 4 0 009 4c.707 0 1.372.184 1.953.504l-1.67 1.67A4.018 4.018 0 009 6a4 4 0 00-1.679.363zM3.707 7.293A7.964 7.964 0 003 9c0 1.32.322 2.577.892 3.686l1.479-1.48a4.002 4.002 0 01-1.253-3.913zM12.979 14.686l1.479-1.479A8.048 8.048 0 0015 9c0-.707-.09-1.392-.256-2.042L9.659 9.659A4.002 4.002 0 0112.979 14.686z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </div>
      <button
        type="submit"
        className="block w-full px-4 py-2 font-semibold text-brand-50 bg-brand-200 rounded-lg hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-opacity-50"
      >
        Sign Up
      </button>
      <div className="flex justify-between">
        <span className="text-brand-200">Already have an Account?</span>
        <button
          type="button"
          className="text-brand-200"
          onClick={() => {
            setError("");
            setShowLoginForm(true);
          }}
        >
          Sign In
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
