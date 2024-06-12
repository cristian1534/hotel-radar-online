import React from "react";
import { useRouter } from "next/router";


interface Options {
    id: string;
    name: string;
    href: string;
}

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    options: Options[];
}

export default function Modal({ isOpen, onClose, options }:ModalProps) {
  const router = useRouter();

  const handleClick = (href:string) => {
    router.push(`/${href}`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-4">
        <div className="flex justify-between items-center border-b mb-4">
          <h2 className="text-xl font-bold text-brand-300">Select area</h2>
          <button
            onClick={onClose}
            className="text-brand-300 hover:text-brand-700"
          >
            &times;
          </button>
        </div>
        <div className="space-y-4">
          {options &&
            options.map((option: Options) => (
              <button
                key={option.id}
                onClick={() => handleClick(option.href)}
                className="block w-full px-4 py-2 bg-brand-200 text-white rounded-lg hover:bg-brand-300"
              >
                {option.name}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}
