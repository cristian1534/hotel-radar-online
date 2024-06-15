import React, { createContext, useContext, ReactNode } from "react";
import { useDispatch } from "react-redux";
import {
  setError as setReduxError,
  clearError as clearReduxError,
} from "@/adapters/ui/redux/feature/userSlice";

interface ErrorContextProps {
  setError: (message: string) => void;
  clearError: () => void;
}

const ErrorContext = createContext<ErrorContextProps | undefined>(undefined);

export const ErrorProvider = ({ children }: { children: ReactNode }) => {
  const dispatch = useDispatch();

  const handleError = (message: string) => {
    dispatch(setReduxError(message));
  };

  const handleClearError = () => {
    dispatch(clearReduxError());
  };

  return (
    <ErrorContext.Provider
      value={{ setError: handleError, clearError: handleClearError }}
    >
      {children}
    </ErrorContext.Provider>
  );
};

export const useError = () => {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error("useError must be used within an ErrorProvider");
  }
  return context;
};
