"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import Loader from "@/adapters/ui/components/customs/Loader";
import LoginForm from "@/adapters/ui/components/LoginForm";
import RegisterForm from "@/adapters/ui/components/RegisterForm";
import { RootState } from "@/adapters/ui/redux/store/store";
import { FirebaseUserRepository } from "@/adapters/infrastructure/firebase/firebaseUserRepository";
import { UserEntity } from "@/domain/UserEntity";

export default function Home() {
  const router = useRouter();
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);
  const userRepository = new FirebaseUserRepository();
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.user);
  const error = useSelector((state: RootState) => state.user.error);
  

  useEffect(() => {
    if (error) {
      setErrorVisible(true);
      const timer = setTimeout(() => {
        setErrorVisible(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleSubmitRegister = async (formData: any) => {
    try {
      const { email, password, username } = formData;
      const result = await userRepository.addUser(
        { email, password, username } as UserEntity,
        dispatch
      );
      if (result) {
        router.push("/panel");
      }
    } catch (err: any) {
      console.log(err);
    }
  };

  const handleSubmitLogin = async (formData: any) => {
    try {
      const { email, password } = formData;
      const result = await userRepository.loginUser(
        { email, password } as UserEntity,
        dispatch
      );
      if (result) {
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
            {errorVisible && (
              <div className="flex justify-center items-center">
                <span className="text-white bg-red-400 shadow-lg shadow-red-300 rounded-md py-2 px-4">
                  {error}
                </span>
              </div>
            )}
            {showLoginForm ? (
              <LoginForm
                setShowLoginForm={setShowLoginForm}
                handleSubmit={handleSubmitLogin}
              />
            ) : (
              <RegisterForm
                setShowLoginForm={setShowLoginForm}
                handleSubmit={handleSubmitRegister}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}
