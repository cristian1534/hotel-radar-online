import React, { useState } from "react";
import Modal from "@/adapters/ui/components/customs/Modal";
import { useRouter } from "next/navigation";
import { routes } from "@/domain/utils/routes";
import { useDispatch } from "react-redux";
import { logoutUserAsync } from "@/services/user/userService";
import useAuthentication from "./customs/useAuthentication";

export default function Header() {
  const [isModalOpen, setModalOpen] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useAuthentication();

  const logOut = () => {
    (dispatch as any)(logoutUserAsync());
    router.push("/");
  };

  const closeModal = () => setModalOpen(false);
  const openModal = () => setModalOpen(true);

  return (
    <div>
      {user && (
        <>
          <div className="bg-gray-800/80 backdrop-blur-sm border-b border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center">
                  <div className="text-xl font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 inline-block text-transparent bg-clip-text">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 inline-block mr-2 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    HotelRadar
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <button
                    onClick={openModal}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-400 transition-all duration-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Management
                  </button>
                  
                  <button
                    onClick={logOut}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg text-gray-300 border border-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-400 transition-all duration-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Modal isOpen={isModalOpen} onClose={closeModal} options={routes} />
        </>
      )}
    </div>
  );
}
