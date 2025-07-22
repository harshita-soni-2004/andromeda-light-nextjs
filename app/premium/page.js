// pages/premium.tsx
import Head from "next/head";
import Link from "next/link";

export default function PremiumPage() {
  const plans = [
    {
      title: "Web Development",
      price: "\u20B97,999",
      features: [
        "Languages: HTML, CSS, JavaScript basics",

        "Tools: VS Code, Git, GitHub basics",

        "Frameworks (Intro): Bootstrap / Tailwind basics for responsive design",
        "Backend (Intro): Python Flask or Node.js basics",
        "Project: Build a modern 5-page responsive website",
        " Contact Form: Learn form validation & backend connection",
        "WhatsApp Chat: Add API button",
        " Hosting: cPanel or Hostinger walkthrough",
        "SSL: How to install & test HTTPS",
        "Admin Dashboard: Simple CRUD operation demo",
        "Deployment: Uploading site live, linking domain",
      ],
    },
    {
      title: " Mobile App Prototype ",
      price: "\u20B914,999",
      features: [
        "Tool: Figma for app UI/UX design",
        "Concepts: Wireframing, user flows, mobile design best practices",

        " Prototype: Clickable demo with navigation",
        " Tips: Roadmap for moving prototype to development",
        "Extras: Sharing prototype link with clients/investors",
      ],
    },
    {
      title: " AI/ML & Data Analytics Basics ",
      price: "\u20B99,999",
      features: [
        "Tools: Google Analytics setup",
        "Dashboards: Google Data Studio / Looker Studio basics",

        "Concepts: What is Machine Learning, how it works",

        " Use Cases: Customer segmentation, lead scoring examples",

        "Automation Ideas: Basic Zapier / Google Sheets automation",

        "Future Roadmap: Where to go next with AI tools",
      ],
    },
    {
      title: " Cybersecurity & IT Audit",
      price: "\u20B99,999",
      features: [
        "Tools: SSL Labs, security headers check",
        "Topics: Strong passwords, 2FA, backups",
        " Scanning: Free malware scanners, how to read results",

        " Fixes: What to do if your site gets hacked",

        "Data Protection: GDPR basics, simple privacy policy checklist",
      ],
    },
    {
      title: "  Digital Marketing",
      price: "\u20B99,999",
      features: [
        " SEO: Keywords research basics (Ubersuggest, Google Keyword Planner)",

        " On-Page SEO: Meta tags, headings, alt tags",

        " Tools: Google Search Console intro",

        " Google My Business: Setup & verify listing",

        " Social Media: Canva basics, design posts, scheduling tools (Buffer/Hootsuite)",

        " Content Strategy: 3-month plan template",

        " Traffic: Basic blogging ideas, backlinks intro",
      ],
    },
  ];
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-gray-900 text-white transition-all duration-500 ease-in-out">
        <Head>
          <meta
            name="description"
            content="Upgrade to TFS Techno Premium and unlock advanced features."
          />
        </Head>
        {/* Pricing Section */}
        <div className="text-center mb-12  py-28">
          <h1 className="text-4xl md:text-5xl text-white font-bold mb-4">
            Techno Future Software
          </h1>
          <p className="text-lg text-white">
            Where Knowledge Meets Practical Skills
          </p>
          <h6 className="text-white"> Premium | TFS Techno</h6>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto pb-8  ">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`${plan.color} rounded-xl p-6 shadow-lg border border-zinc-700 hover:border-pink-500 transition-all`}
            >
              <h2 className="text-xl font-bold mb-2 text-white  text-center pb-">
                {plan.title}
              </h2>
              <p className="text-2xl font-bold mb-4 ">{plan.price}</p>
              <ul className="space-y-2 text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-400">✅</span> {feature}
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <button className="mt-6 w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold py-2 rounded shadow-md">
                  Purchase plan
                </button>
              </Link>
            </div>
          ))}
        </div>
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

        <section className="text-center px-6 relative overflow-hidden ">
          <div className="max-w-4xl mx-auto z-10 relative pt-20">
            <h1 className="text-5xl font-extrabold mb-6 animate-fade-in-up text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-red-500">
              Upgrade to Premium
            </h1>
            <p className="text-lg text-gray-300 mb-8 pt-11 animate-fade-in-up delay-100">
              Unlock unlimited features, premium tools, and dedicated support to
              scale your business.
            </p>
            <Link href="/contact">
              <button className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white px-8 py-3 rounded-xl font-semibold shadow-xl transition transform hover:scale-105">
                Get Premium Version Now
              </button>
            </Link>
          </div>

          {/* Background Lights */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500 opacity-20 rounded-full -z-10 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-500 opacity-20 rounded-full -z-10 blur-2xl animate-ping"></div>
        </section>
      </main>
    </>
  );
}
