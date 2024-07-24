import React from 'react';
import { Heart } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow bg-gradient-to-b from-black via-gray-900 to-black text-white">
        {/* Header */}
        <header className="flex justify-between items-center p-4">
          <div className="flex items-center">
            <Heart className="w-6 h-6 mr-2" />
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
          <div className="w-32 h-32 bg-gradient-to-br from-green-400 via-blue-500 to-yellow-400 rounded-full mb-8"></div>
          <h1 className="text-4xl font-bold mb-4">The last piece of software.</h1>
          <p className="max-w-2xl mb-12">
            We're building software that builds software. Our <span className="underline">vision</span> is to unlock
            human creativity — by enabling anyone to create software.
          </p>
          <div className="flex items-center mb-8">
            <Heart className="w-6 h-6 mr-2" />
            <span>GPTEngineer</span>
          </div>
          <h2 className="text-2xl font-semibold mb-8">It starts with an AI software engineer.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl">
            {['For Everyone', 'For Developers', 'For Agencies'].map((title, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg">
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
            <Heart className="w-6 h-6 mr-2" />
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
          <span>X</span>
          <span>GitHub</span>
          <span>Discord</span>
          <span>YouTube</span>
          <span>LinkedIn</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;