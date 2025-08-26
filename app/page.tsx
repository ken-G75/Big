"use client"

import { useState } from "react"

const faqs = [
  {
    question: "What is Ralph Xpert?",
    answer: "Ralph Xpert is a platform designed to simplify your workflow and enhance productivity."
  },
  {
    question: "How can I get started?",
    answer: "Simply sign up, create an account, and you’ll be guided through the onboarding process."
  },
  {
    question: "Is there a free trial?",
    answer: "Yes, we offer a 14-day free trial with full access to all features."
  }
]

export default function Home() {
  const [openFaq, setOpenFaq] = useState<string | null>(null)

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-20 bg-[#0D1117] text-center">
        <h1 className="text-5xl font-bold text-white mb-6">Welcome to Ralph Xpert</h1>
        <p className="text-lg text-[#C9D1D9] max-w-2xl mx-auto">
          Streamline your business with our innovative platform.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 md:px-20 bg-[#161B22] text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-[#21262D] rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-[#2FD771]">Easy Setup</h3>
            <p className="text-[#C9D1D9] mt-2">Get started in minutes with our seamless onboarding process.</p>
          </div>
          <div className="p-6 bg-[#21262D] rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-[#2FD771]">Secure</h3>
            <p className="text-[#C9D1D9] mt-2">Your data is protected with enterprise-grade security.</p>
          </div>
          <div className="p-6 bg-[#21262D] rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-[#2FD771]">24/7 Support</h3>
            <p className="text-[#C9D1D9] mt-2">Our team is always here to help whenever you need us.</p>
          </div>
        </div>
      </section>

      {/* ✅ Fixed FAQ Section */}
      <section className="py-16 px-6 md:px-20 bg-[#161B22]">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">FAQ</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="border-b border-[#30363D] pb-4">
              <button
                className="w-full text-left p-4 hover:bg-[#21262D] rounded-lg transition-colors flex justify-between items-center"
                onClick={() => setOpenFaq(openFaq === faq.question ? null : faq.question)}
              >
                <span className="font-semibold text-white">{faq.question}</span>
                <span className="text-[#2FD771] text-xl font-bold">
                  {openFaq === faq.question ? "−" : "+"}
                </span>
              </button>
              {openFaq === faq.question && (
                <div className="px-4 pb-4 text-[#C9D1D9] bg-[#0D1117] rounded-lg mt-2">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
