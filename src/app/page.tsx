"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addUserAsync, loginUserAsync } from "@/services/userService";
import Loader from "@/adapters/ui/components/customs/Loader";
import LoginForm from "@/adapters/ui/components/LoginForm";
import RegisterForm from "@/adapters/ui/components/RegisterForm";
import { RootState } from "@/adapters/ui/redux/store/store";

export default function Home() {
  const router = useRouter();
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.user);

  const handleSubmitRegister = async (formData: any) => {
    try {
      const { email, password, username } = formData;
      const result = await dispatch<any>(
        addUserAsync({ email, password, username })
      );
      if (addUserAsync.rejected.match(result)) {
        setError(result.payload as string);
      } else {
        router.push("/panel");
      }
    } catch (err: any) {
      console.log(err);
    }
  };

  const handleSubmitLogin = async (formData: any) => {
    try {
      const { email, password } = formData;
      const result = await dispatch<any>(loginUserAsync({ email, password }));
      if (loginUserAsync.rejected.match(result)) {
        setError(result.payload as string);
      } else {
        router.push("/panel");
      }
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-brand-300">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Image
            src="https://res.cloudinary.com/dutafv5us/image/upload/v1717507288/HotelRadarLogo_z5jpt3.png"
            alt="Panel-Logo"
            width={400}
            height={400}
            priority={true}
          />
          <div className="max-w-sm w-full p-8 space-y-6 bg-white rounded-lg shadow-lg shadow-brand-50 mb-5">
            <h2 className="text-3xl font-bold text-center uppercase text-brand-100 dark:text-brand-200">
              <span className="text-green-300 text-sm mr-5">Online</span>
              Dashboard
            </h2>
            {showLoginForm ? (
              <LoginForm
                setShowLoginForm={setShowLoginForm}
                setError={setError}
                error={error}
                handleSubmit={handleSubmitLogin}
              />
            ) : (
              <RegisterForm
                setShowLoginForm={setShowLoginForm}
                setError={setError}
                error={error}
                handleSubmit={handleSubmitRegister}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}
