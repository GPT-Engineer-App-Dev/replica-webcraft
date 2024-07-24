import React from 'react';
import { Heart, Twitter, Github, Youtube, Linkedin } from 'lucide-react';

const DiscordIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" fill="currentColor"/>
  </svg>
);

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow bg-gradient-to-b from-black via-gray-900 to-black text-white">
        {/* Header */}
        <header className="flex justify-between items-center p-4">
          <div className="flex items-center">
            <Heart className="w-6 h-6 mr-2 fill-white" />
            <span className="font-semibold">lovable</span>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>GPT Engineer</li>
              <li>Vision</li>
              <li>News</li>
              <li>Careers</li>
            </ul>
          </nav>
        </header>

        {/* Separator */}
        <div className="border-t border-gray-800"></div>

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center text-center px-4 py-16">
          <div className="w-32 h-32 mb-8">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="url(#paint0_linear)" />
              <defs>
                <linearGradient id="paint0_linear" x1="2" y1="3" x2="22" y2="21" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4ADE80" />
                  <stop offset="0.5" stopColor="#3B82F6" />
                  <stop offset="1" stopColor="#FACC15" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h1 className="text-4xl font-bold mb-4">The last piece of software.</h1>
          <p className="max-w-2xl mb-12">
            We're building software that builds software. Our <span className="underline">vision</span> is to unlock
            human creativity — by enabling anyone to create software.
          </p>
          <div className="mb-8">
            <img src="https://lovable.dev/gptengineer.svg" alt="GPTEngineer" className="w-[100px] h-[100px] mx-auto" />
          </div>
          <h2 className="text-2xl font-semibold mb-8">It starts with an AI software engineer.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl">
            {['For Everyone', 'For Developers', 'For Agencies'].map((title, index) => (
              <div key={index} className="bg-black p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold mb-4 flex items-center justify-between">
                  {title}
                  <span>&gt;</span>
                </h3>
                <p className="text-sm">
                  {index === 0 && "Chat with AI to build and deploy web apps, with no technical knowledge needed."}
                  {index === 1 && "Collaborate in chat and code with an AI engineer, to build at lightning speed."}
                  {index === 2 && "Partner with AI to streamline web app creation, iteration, and support."}
                </p>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white p-8">
        <div className="flex justify-between items-start max-w-6xl mx-auto">
          <div className="flex items-center">
            <Heart className="w-6 h-6 mr-2 fill-white" />
            <span className="font-semibold">lovable</span>
          </div>
          <div className="flex space-x-16">
            <div>
              <h4 className="font-semibold mb-4">GPT Engineer</h4>
              <ul className="space-y-2">
                <li>Overview</li>
                <li>For Everyone</li>
                <li>For Developers</li>
                <li>For Agencies</li>
                <li>Get early access ↗</li>
                <li>Login ↗</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>Vision</li>
                <li>News</li>
                <li>Careers</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-6 mt-12">
          <Twitter className="w-6 h-6" />
          <Github className="w-6 h-6" />
          <DiscordIcon className="w-6 h-6" />
          <Youtube className="w-6 h-6" />
          <Linkedin className="w-6 h-6" />
        </div>
      </footer>
    </div>
  );
};

export default Index;