import React from "react";
import { RootState } from "../redux/store/store";
import { useSelector, useDispatch } from "react-redux";
import { clearError } from "../redux/feature/user/userSlice";

const ErrorComponent: React.FC = () => {
  const { error } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  if (!error) return null;

  return (
    <div className="bg-brand-300 min-h-screen flex flex-col justify-center items-center">
      <div className="text-center text-2xl space-y-4">
        <h1>{error}</h1>
        <button
          className="bg-brand-200 py-2 px-2 mx-2 mt-2 mb-2 rounded-md shadow-md shadow-brand-50"
          onClick={() => dispatch(clearError())}
        >
          Dismiss
        </button>
      </div>
      <div className="mt-4">
        <span>This error will be reported to our Technical Department</span>
      </div>
    </div>
  );
};

export default ErrorComponent;
