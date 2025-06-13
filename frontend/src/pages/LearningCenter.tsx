import React from 'react';
import { Button } from '../components/ui/button';
import { ArrowRight, BookOpen, Video, FileText, Users, Award, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const LearningCenter: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-70"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/4"></div>
        
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
                  <li className="flex items-start">
                    <div className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0">•</div>
                    <span className="text-gray-700">Introduction to AI for Business</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0">•</div>
                    <span className="text-gray-700">Automation Opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0">•</div>
                    <span className="text-gray-700">ROI of AI Implementation</span>
                  </li>
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
                  <li className="flex items-start">
                    <div className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0">•</div>
                    <span className="text-gray-700">Chatbot Strategy & Design</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0">•</div>
                    <span className="text-gray-700">Conversation Flow Optimization</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0">•</div>
                    <span className="text-gray-700">Lead Qualification Techniques</span>
                  </li>
                </ul>
                <div className="text-purple-600 font-medium">Coming Soon</div>
              </div>

              {/* Module 3 */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Email & SMS Automation</h3>
                <p className="text-gray-600 mb-4">
                  Create personalized, automated communication sequences that nurture leads and clients.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0">•</div>
                    <span className="text-gray-700">Sequence Design Principles</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0">•</div>
                    <span className="text-gray-700">Personalization Strategies</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0">•</div>
                    <span className="text-gray-700">Performance Analytics</span>
                  </li>
                </ul>
                <div className="text-blue-600 font-medium">Coming Soon</div>
              </div>

              {/* Module 4 */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Client Onboarding Automation</h3>
                <p className="text-gray-600 mb-4">
                  Streamline your client onboarding process with automated workflows and document collection.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0">•</div>
                    <span className="text-gray-700">Onboarding Workflow Design</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0">•</div>
                    <span className="text-gray-700">Document Automation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0">•</div>
                    <span className="text-gray-700">Client Experience Optimization</span>
                  </li>
                </ul>
                <div className="text-purple-600 font-medium">Coming Soon</div>
              </div>

              {/* Module 5 */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Real Estate AI Automation</h3>
                <p className="text-gray-600 mb-4">
                  Specialized automation strategies and techniques for real estate professionals.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0">•</div>
                    <span className="text-gray-700">Property Listing Automation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0">•</div>
                    <span className="text-gray-700">Lead Nurturing for Real Estate</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0">•</div>
                    <span className="text-gray-700">Client Relationship Management</span>
                  </li>
                </ul>
                <div className="text-blue-600 font-medium">Coming Soon</div>
              </div>

              {/* Module 6 */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Lightbulb className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Advanced AI Integration</h3>
                <p className="text-gray-600 mb-4">
                  Take your automation to the next level with advanced AI integration techniques.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0">•</div>
                    <span className="text-gray-700">Custom AI Solution Design</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0">•</div>
                    <span className="text-gray-700">Multi-platform Integration</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0">•</div>
                    <span className="text-gray-700">Workflow Optimization</span>
                  </li>
                </ul>
                <div className="text-purple-600 font-medium">Coming Soon</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-gray-600 mb-8">
              Subscribe to our newsletter to be notified when our Learning Center launches and receive exclusive AI automation tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to start automating your business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Don't wait for the Learning Center. Get started with our AI automation solutions today.
            </p>
            <Link to="/contact">
              <Button className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-6 rounded-lg text-lg font-medium">
                Schedule Your Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearningCenter;
