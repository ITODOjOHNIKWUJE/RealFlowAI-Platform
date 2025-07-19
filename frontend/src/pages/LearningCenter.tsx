import React from 'react';
import { BookOpen, Video } from 'lucide-react';

const LearningCenter: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
              RealFlow AI Learning Center
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Master AI automation for your business with our comprehensive learning resources, tutorials, and best practices.
            </p>
            <div className="inline-block px-4 py-1 bg-blue-100 rounded-full mb-4">
              <p className="text-sm font-medium text-blue-700">Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Resources Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">What You'll Learn</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our learning center will provide comprehensive resources to help you maximize the value of AI automation in your business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Module 1 */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">AI Automation Fundamentals</h3>
                <p className="text-gray-600 mb-4">
                  Learn the basics of AI automation and how it can transform your business operations.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="text-gray-700"> Introduction to AI for Business</li>
                  <li className="text-gray-700"> Automation Opportunities</li>
                  <li className="text-gray-700"> ROI of AI Implementation</li>
                </ul>
                <div className="text-blue-600 font-medium">Coming Soon</div>
              </div>

              {/* Module 2 */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Video className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Chatbot Mastery</h3>
                <p className="text-gray-600 mb-4">
                  Design and implement effective AI chatbots that convert visitors into qualified leads.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="text-gray-700"> Conversational Design</li>
                  <li className="text-gray-700"> NLP Basics</li>
                  <li className="text-gray-700"> Deployment Strategies</li>
                </ul>
                <div className="text-purple-600 font-medium">Coming Soon</div>
              </div>

              {/* You can add more modules here later */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearningCenter;

