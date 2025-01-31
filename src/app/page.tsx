"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import Loader from "@/adapters/ui/components/customs/Loader";
import LoginForm from "@/adapters/ui/components/LoginForm";
import RegisterForm from "@/adapters/ui/components/RegisterForm";
import { RootState } from "@/adapters/ui/redux/store/store";
import { FirebaseUserRepository } from "@/adapters/infrastructure/firebase/user/firebaseUserRepository";
import { UserEntity } from "@/domain/user/UserEntity";
import { useError } from "@/adapters/ui/errors/errorContext";

export default function Home() {
  const router = useRouter();
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);
  const userRepository = new FirebaseUserRepository();
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.user);
  const error = useSelector((state: RootState) => state.user.error);
  const { setError } = useError();

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
      setError(err.message);
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
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900">
      {loading ? (
        <Loader />
      ) : (
        <div className="w-full max-w-md px-6">
          <div className="mb-8 text-center">
            <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-indigo-400 to-purple-400 inline-block text-transparent bg-clip-text flex items-center justify-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              HotelRadar
            </div>
            <p className="text-gray-400 text-lg">Management System</p>
          </div>
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-700">
            <div className="text-center space-y-2 mb-6">
              <div className="inline-flex items-center justify-center gap-2">
                <span className="flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-green-500 text-sm font-medium">Online</span>
              </div>
              <h2 className="text-3xl font-bold text-white">Dashboard</h2>
            </div>
            {errorVisible && (
              <div className="mb-6">
                <div className="bg-red-500/10 border-l-4 border-red-500 p-4 rounded">
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
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
        </div>
      )}
    </div>
  );
}
