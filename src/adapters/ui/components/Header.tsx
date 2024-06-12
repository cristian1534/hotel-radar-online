import React, { useState } from "react";
import Modal from "@/adapters/ui/components/customs/Modal";
import { useRouter } from "next/navigation";
import { routes } from "@/domain/utils/routes";
import { useDispatch } from "react-redux";
import { logoutUserAsync } from "@/services/userService";
import useAuthentication from "./customs/useAuthentication";



export default function Header() {
  const [isModalOpen, setModalOpen] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useAuthentication();

  
  const logOut = () => {
    (dispatch as any)(logoutUserAsync());
    router.push("/");
  }
  

  const closeModal = () => setModalOpen(false);
  const openModal = () => setModalOpen(true);

  return (
    <div>
      {user && (
        <div className="p-5 bg-brand-50 flex justify-end">
          <button
            onClick={openModal}
            className="px-4 py-2 bg-brand-300 text-white rounded-lg shadow-md shadow-brand-300"
          >
            Management
          </button>
          <Modal isOpen={isModalOpen} onClose={closeModal} options={routes} />
          <div>
            <button
              className="px-4 py-2 ml-5 bg-brand-300 text-white rounded-lg shadow-md shadow-brand-300"
              onClick={logOut}
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
