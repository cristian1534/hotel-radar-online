import React, { useEffect } from "react";
import { Inter } from "next/font/google";
import useAuthentication from "@/adapters/ui/components/customs/useAuthentication";
import { useRouter } from "next/navigation";
import Loader from "@/adapters/ui/components/customs/Loader";


const inter = Inter({ subsets: ["latin"] });

interface FirebaseUser {
  displayName: string | null;
}

const Panel: React.FC = () => {
  const user: FirebaseUser | null = useAuthentication();
  const router = useRouter();


  useEffect(() => {
    if (!user) {
      const redirectTimer = setTimeout(() => {
        router.push("/");
      }, 2000);

      return () => clearTimeout(redirectTimer);
    }
  }, [user, router]);

  if (!user) {
    return (
      <div
        className={`flex min-h-screen items-center justify-center bg-brand-300 ${inter.className}`}
      >
        <Loader />
      </div>
    );
  }

  return (
    <div
      className={`flex min-h-screen items-center justify-center bg-brand-300 ${inter.className}`}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg shadow-brand-50 text-center">
        <h1 className="text-3xl font-bold mb-4 text-brand-300">
          Welcome {user.displayName}!
        </h1>
        <p className="text-lg text-brand-300">Time to Work!.</p>
      </div>
    </div>
  );
};

export default Panel;
