// pages/login.tsx
import Head from "next/head";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Login | TFS Techno</title>
        <meta
          name="description"
          content="Access your TFS Techno account and manage your premium features."
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center px-4 py-16 relative overflow-hidden text-white">
        {/* Glowing Background Blobs */}
        <div className="absolute w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-30 -top-20 -left-20 animate-ping"></div>
        <div className="absolute w-96 h-96 bg-purple-700 rounded-full blur-3xl opacity-20 -bottom-20 -right-10 animate-pulse"></div>

        <div className="backdrop-blur-md bg-white/5 border border-white/10 shadow-2xl rounded-2xl w-full max-w-md p-8 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-center text-white mb-6">
            Welcome Back
          </h2>

          <form className="space-y-6">
            <div>
              <label className="block text-sm text-gray-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 bg-black/30 text-white border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 bg-black/30 text-white border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white py-2 rounded-xl font-semibold mt-2 shadow-lg hover:shadow-pink-500/40 transition transform hover:scale-105"
            >
              Log In
            </button>
          </form>

          <p className="text-center text-sm text-gray-400 mt-6">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="text-pink-400 font-medium hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
