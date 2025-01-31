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
      <div className={`flex min-h-screen items-center justify-center bg-brand-300 ${inter.className}`}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gray-900 ${inter.className}`}>
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-700">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-500/10 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 inline-block text-transparent bg-clip-text">
              Welcome back, {user.displayName}!
            </h1>
            <p className="text-lg text-gray-400 mb-8">
              Your hotel management dashboard is ready for you.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-indigo-500/50 hover:bg-gray-800/90 transition-all duration-300">
                <h3 className="text-lg font-semibold text-indigo-400 mb-2">Bookings</h3>
                <p className="text-gray-400">Manage your hotel reservations</p>
              </div>
              <div className="p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-indigo-500/50 hover:bg-gray-800/90 transition-all duration-300">
                <h3 className="text-lg font-semibold text-indigo-400 mb-2">Rooms</h3>
                <p className="text-gray-400">Update room availability</p>
              </div>
              <div className="p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-indigo-500/50 hover:bg-gray-800/90 transition-all duration-300">
                <h3 className="text-lg font-semibold text-indigo-400 mb-2">Reports</h3>
                <p className="text-gray-400">View analytics and insights</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );

};

export default Panel;
