import React from "react";
import {
  BookOpen,
  Sparkles,
  Brain,
  MessageSquare,
  Zap,
  Clock,
  Award,
} from "lucide-react";
import Image from "next/image";

export default function LandingPage() {
  const date = new Date();

  return (
    <div className="min-h-screen bg-[#f9f9f9] font-sans">
      {/* Navigation */}
      <nav className="flex items-center justify-between mx-auto w-full px-14 py-4 bg-white max-sm:px-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center">
            <Image src="/images/logo.svg" alt="Logo" width={40} height={40} />
          </div>
          <span className="text-xl font-bold">Converso</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-sm font-medium hover:text-[#fe5933] transition-colors"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-sm font-medium hover:text-[#fe5933] transition-colors"
          >
            How It Works
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium hover:text-[#fe5933] transition-colors"
          >
            Pricing
          </a>
        </div>
        <a
          href="/dashboard"
          className="border border-black rounded-full px-6 py-2.5 text-sm font-semibold flex items-center gap-2 cursor-pointer hover:bg-black hover:text-white transition-all"
        >
          Get Started
        </a>
      </nav>

      {/* Hero Section */}
      <main className="mx-auto px-14 max-w-[1400px] pt-6 max-sm:px-4">
        <section className="flex flex-col items-center text-center gap-6 py-16">
          <div className="inline-flex items-center gap-2 bg-white border border-black rounded-full px-4 py-2 text-sm font-medium">
            <Sparkles className="w-4 h-4 text-[#fe5933]" />
            AI-Powered Learning Platform
          </div>

          <h1 className="text-6xl md:text-7xl font-bold max-w-4xl leading-tight max-sm:text-4xl">
            Learn Anything with Your AI{" "}
            <span className="text-[#fe5933]">Companion</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl max-sm:text-lg">
            Create personalized learning companions that teach through natural
            voice conversations. Master any subject at your own pace with AI
            that adapts to you.
          </p>

          <div className="flex items-center gap-4 mt-4 max-sm:flex-col max-sm:w-full">
            <a
              href="/dashboard"
              className="bg-[#fe5933] text-white rounded-full px-8 py-4 text-lg font-semibold flex items-center gap-2 hover:bg-[#e54d2b] transition-all cursor-pointer"
            >
              Start Learning Free
              <Zap className="w-5 h-5" />
            </a>
            <button className="border-2 border-black rounded-full px-8 py-4 text-lg font-semibold hover:bg-black hover:text-white transition-all">
              Watch Demo
            </button>
          </div>

          {/* Hero Visual */}
          <div className="mt-16 w-full max-w-5xl">
            <div className="bg-white rounded-[2.5rem] border-2 border-black p-8 shadow-2xl max-sm:p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Science Card */}
                <div className="bg-gradient-to-br from-purple-200 to-purple-300 rounded-[2rem] border-2 border-black p-6 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="bg-black text-white rounded-full text-xs px-3 py-1.5">
                      Science
                    </span>
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold">
                    Neura the Brainy Explorer
                  </h3>
                  <p className="text-sm text-gray-700">
                    Neural Network of the Brain
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>45 mins duration</span>
                  </div>
                </div>

                {/* Maths Card */}
                <div className="bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-[2rem] border-2 border-black p-6 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="bg-black text-white rounded-full text-xs px-3 py-1.5">
                      Maths
                    </span>
                    <Brain className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold">
                    Countsy the Number Wizard
                  </h3>
                  <p className="text-sm text-gray-700">
                    Derivatives & Integrals
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>30 mins duration</span>
                  </div>
                </div>

                {/* Language Card */}
                <div className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-[2rem] border-2 border-black p-6 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="bg-black text-white rounded-full text-xs px-3 py-1.5">
                      Language
                    </span>
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold">
                    Verba the Vocabulary Builder
                  </h3>
                  <p className="text-sm text-gray-700">English Literature</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>30 mins duration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 max-sm:text-3xl">
              Why Choose Converso?
            </h2>
            <p className="text-xl text-gray-600 max-sm:text-lg">
              Learning reimagined through AI-powered conversations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-white rounded-[2rem] border-2 border-black p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-[#fe5933] rounded-2xl flex items-center justify-center mb-4">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">
                Personalized AI Companions
              </h3>
              <p className="text-gray-600">
                Create custom learning companions with unique personalities,
                voices, and teaching styles tailored to your needs.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-[2rem] border-2 border-black p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-purple-500 rounded-2xl flex items-center justify-center mb-4">
                <MessageSquare className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Voice Conversations</h3>
              <p className="text-gray-600">
                Learn through natural voice conversations that feel like talking
                to a real tutor, making education engaging and fun.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-[2rem] border-2 border-black p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Adaptive Learning</h3>
              <p className="text-gray-600">
                AI adapts to your learning pace, style, and knowledge level,
                ensuring optimal comprehension and retention.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-[2rem] border-2 border-black p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-yellow-500 rounded-2xl flex items-center justify-center mb-4">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Any Subject, Anytime</h3>
              <p className="text-gray-600">
                From science to languages, coding to history—learn any subject
                with companions designed for each discipline.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-[2rem] border-2 border-black p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Learn at Your Pace</h3>
              <p className="text-gray-600">
                No pressure, no deadlines. Learn when you want, how you want,
                with lessons that fit your schedule.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-[2rem] border-2 border-black p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-pink-500 rounded-2xl flex items-center justify-center mb-4">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Track Your Progress</h3>
              <p className="text-gray-600">
                Monitor your learning journey with detailed insights and
                celebrate milestones as you master new topics.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 max-sm:text-3xl">
              Get Started in 3 Simple Steps
            </h2>
            <p className="text-xl text-gray-600 max-sm:text-lg">
              Your AI learning journey begins here
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#fe5933] to-[#ff7a5c] rounded-full flex items-center justify-center text-white text-3xl font-bold mb-6">
                1
              </div>
              <h3 className="text-2xl font-bold mb-3">Create Your Companion</h3>
              <p className="text-gray-600">
                Pick a subject, name your AI companion, and customize their
                personality and voice to match your learning style.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-6">
                2
              </div>
              <h3 className="text-2xl font-bold mb-3">Start Conversations</h3>
              <p className="text-gray-600">
                Launch your lesson and engage in natural voice conversations
                with your AI companion as they guide you through topics.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-6">
                3
              </div>
              <h3 className="text-2xl font-bold mb-3">Master & Progress</h3>
              <p className="text-gray-600">
                Learn at your pace, track your progress, and watch as you master
                new subjects through engaging AI-powered education.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 mb-8">
          <div className="bg-[#2c2c2c] text-white rounded-[2.5rem] px-12 py-16 flex flex-col items-center text-center gap-6 max-sm:px-6">
            <div className="bg-[#fccc41] rounded-full px-4 py-2 text-black font-semibold text-sm">
              Start Learning Today
            </div>
            <h2 className="text-5xl font-bold max-w-3xl max-sm:text-3xl">
              Ready to Transform Your Learning Experience?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl max-sm:text-lg">
              Join thousands of learners who are mastering new skills through
              AI-powered conversations. Your personalized learning companion
              awaits.
            </p>
            <a
              href="/dashboard"
              className="bg-[#fe5933] text-white rounded-full px-10 py-5 text-xl font-semibold flex items-center gap-3 hover:bg-[#e54d2b] transition-all mt-4 cursor-pointer"
            >
              Build Your First Companion
              <Sparkles className="w-6 h-6" />
            </a>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 border-t-2 border-black">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-[#fe5933] mb-2">10K+</div>
              <div className="text-gray-600 font-medium">Active Learners</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#fe5933] mb-2">50+</div>
              <div className="text-gray-600 font-medium">Subject Areas</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#fe5933] mb-2">
                100K+
              </div>
              <div className="text-gray-600 font-medium">Lessons Completed</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#fe5933] mb-2">
                4.9/5
              </div>
              <div className="text-gray-600 font-medium">User Rating</div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t-2 border-black mt-20">
        <div className="mx-auto px-14 max-w-[1400px] py-12 max-sm:px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center justify-center">
                  <Image
                    src="/images/logo.svg"
                    alt="Logo"
                    width={40}
                    height={40}
                  />
                </div>
                <span className="text-xl font-bold">Converso</span>
              </div>
              <p className="text-gray-600 text-sm">
                AI-powered learning platform that makes education personal,
                engaging, and effective.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>
                  <a href="#" className="hover:text-[#fe5933]">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#fe5933]">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#fe5933]">
                    How It Works
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>
                  <a href="#" className="hover:text-[#fe5933]">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#fe5933]">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#fe5933]">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>
                  <a href="#" className="hover:text-[#fe5933]">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#fe5933]">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#fe5933]">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600 text-sm">
            © {date.getFullYear()} Converso. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
