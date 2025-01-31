import React from "react";
import { useRouter } from "next/navigation";  // Updated import


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

export default function Modal({ isOpen, onClose, options }: ModalProps) {
  const router = useRouter();

  const handleClick = (href: string) => {
    router.push(`/${href}`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] overflow-auto bg-black/60 backdrop-blur-sm flex justify-center items-center">
      <div className="relative z-[10000] bg-gray-800/90 rounded-2xl shadow-2xl max-w-md w-full p-6 border border-gray-700">
        <div className="flex justify-between items-center border-b border-gray-700 pb-4 mb-4">
          <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 inline-block text-transparent bg-clip-text">
            Select Area
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-2xl"
          >
            ×
          </button>
        </div>
        <div className="space-y-3">
          {options &&
            options.map((option: Options) => (
              <button
                key={option.id}
                onClick={() => handleClick(option.href)}
                className="block w-full px-4 py-3 bg-gray-700/50 text-gray-200 rounded-lg hover:bg-indigo-500 transition-all duration-200 text-left hover:pl-6"
              >
                {option.name}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}
