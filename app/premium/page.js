// pages/premium.tsx
import Head from "next/head";
import Link from "next/link";

export default function PremiumPage() {
  return (
    <>
      <Head>
        <title>Premium | TFS Techno</title>
        <meta
          name="description"
          content="Upgrade to TFS Techno Premium and unlock advanced features."
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-gray-900 text-white transition-all duration-500 ease-in-out">
        {/* Hero Section */}
        <section className="text-center py-28 px-6 relative overflow-hidden ">
          <div className="max-w-4xl mx-auto z-10 relative pt-20">
            <h1 className="text-5xl font-extrabold mb-6 animate-fade-in-up text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-red-500">
              Upgrade to Premium
            </h1>
            <p className="text-lg text-gray-300 mb-8 pt-11 animate-fade-in-up delay-100">
              Unlock unlimited features, premium tools, and dedicated support to
              scale your business.
            </p>
            <Link href="/signup">
              <button className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white px-8 py-3 rounded-xl font-semibold shadow-xl transition transform hover:scale-105">
                Get Premium Version Now
              </button>
            </Link>
          </div>

          {/* Background Lights */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500 opacity-20 rounded-full -z-10 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-500 opacity-20 rounded-full -z-10 blur-2xl animate-ping"></div>
        </section>

        {/* Features Section */}
        <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Unlimited Access", "Priority Support", "Advanced Insights"].map(
            (title, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-zinc-800 to-zinc-700 rounded-2xl p-6 shadow-md hover:shadow-2xl transition duration-300 transform hover:scale-105 animate-fade-in-up"
              >
                <h3 className="text-xl font-bold text-orange-400 mb-2">
                  {title}
                </h3>
                <p className="text-gray-300">
                  {title === "Unlimited Access"
                    ? "No restrictions on tools, projects, or collaborations."
                    : title === "Priority Support"
                      ? "Direct chat with our premium support engineers 24/7."
                      : "Custom dashboards and analytics built for you."}
                </p>
              </div>
            ),
          )}
        </section>

        {/* Pricing Section */}
        <section className="text-center py-20 bg-gradient-to-br from-zinc-800 to-zinc-900">
          <h2 className="text-3xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 animate-fade-in-up">
            Choose Your Plan
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-10 px-6">
            {/* Monthly Plan */}
            <div className="border border-zinc-700 rounded-2xl p-8 w-full md:w-1/3 shadow-sm bg-zinc-800 animate-fade-in-up hover:shadow-xl transition transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-2 text-orange-400">
                Monthly Plan
              </h3>
              <p className="text-4xl font-bold text-orange-300 mb-4">
                $9<span className="text-base font-normal">/month</span>
              </p>
              <button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-6 py-2 rounded-xl transition-all">
                Choose Plan
              </button>
            </div>

            {/* Yearly Plan */}
            <div className="bg-gradient-to-r from-pink-600 to-red-600 text-white rounded-2xl p-8 w-full md:w-1/3 shadow-lg animate-fade-in-up transform hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-2">Yearly Plan</h3>
              <p className="text-4xl font-bold mb-4">
                $90<span className="text-base font-normal">/year</span>
              </p>
              <button className="bg-white text-pink-600 hover:bg-pink-100 px-6 py-2 rounded-xl font-semibold">
                Save 25%
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
