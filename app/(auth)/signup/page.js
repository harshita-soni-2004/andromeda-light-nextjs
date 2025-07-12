import Head from "next/head";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <>
      <Head>
        <title>Sign Up | TFS Techno</title>
        <meta
          name="description"
          content="Create your TFS Techno account and start your premium journey."
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4 py-16 relative">
        {/* Animated Background Glow */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-700 rounded-full blur-3xl opacity-40 animate-pulse z-0"></div>

        <div className="bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl w-full max-w-md p-8 z-10">
          <h2 className="text-3xl font-extrabold text-white text-center mb-6">
            Create Your Account
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm text-white mb-1">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-transparent border border-white/20 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm text-white mb-1">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 bg-transparent border border-white/20 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm text-white mb-1">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 bg-transparent border border-white/20 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white py-2 rounded-xl font-semibold mt-2"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-sm text-gray-400 mt-6">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-pink-400 font-medium hover:underline"
            >
              Log in
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
