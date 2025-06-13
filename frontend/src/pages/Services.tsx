import React from 'react';
import { Button } from '../components/ui/button';
import { ArrowRight, CheckCircle, Bot, Calendar, MessageSquare, FileText, BarChart3, Settings } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-70"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/4"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
              AI Automation Services
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Powerful, practical automation solutions designed specifically for real estate professionals and service-based businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-16">
            {/* Service 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-block px-4 py-1 bg-blue-100 rounded-full mb-4">
                  <p className="text-sm font-medium text-blue-700">Lead Generation</p>
                </div>
                <h2 className="text-3xl font-bold mb-4">AI Chatbots & Lead Capture</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Convert more website visitors into qualified leads with intelligent chatbots that engage, qualify, and book appointments 24/7.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Customized qualification questions based on your ideal client profile</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Instant responses to common questions and property inquiries</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Seamless calendar integration for booking appointments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Lead data capture and CRM integration</span>
                  </li>
                </ul>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="order-1 md:order-2 bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-2xl">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <Bot className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gray-100 rounded-lg p-4">
                      <p className="text-gray-700">Hi there! I'm the RealFlow AI assistant. Are you looking to buy, sell, or just exploring the market?</p>
                    </div>
                    <div className="bg-blue-100 rounded-lg p-4 ml-8">
                      <p className="text-blue-700">I'm interested in selling my property.</p>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-4">
                      <p className="text-gray-700">Great! To provide you with an accurate home valuation, could you share your property address?</p>
                    </div>
                    <div className="bg-blue-100 rounded-lg p-4 ml-8">
                      <p className="text-blue-700">123 Main Street, Anytown</p>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-4">
                      <p className="text-gray-700">Thanks! Would you prefer to schedule a call with our agent or receive a digital valuation report?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-8 rounded-2xl">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                    <Calendar className="h-8 w-8 text-purple-600" />
                  </div>
                  <div className="space-y-4">
                    <div className="bg-purple-50 rounded-lg p-4">
                      <p className="font-medium text-purple-800">Appointment Scheduled</p>
                      <p className="text-gray-700">Property Viewing: 123 Main Street</p>
                      <p className="text-gray-700">Date: June 5, 2025 at 2:00 PM</p>
                      <p className="text-gray-700">Client: John Smith</p>
                    </div>
                    <div className="flex space-x-2">
                      <div className="bg-green-100 rounded-lg p-3 flex-1 text-center">
                        <p className="text-green-700 font-medium">Confirmed</p>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3 flex-1 text-center">
                        <p className="text-gray-700 font-medium">Reschedule</p>
                      </div>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-4">
                      <p className="text-gray-700 font-medium">Automated Reminders</p>
                      <p className="text-gray-600 text-sm">24 hours before appointment</p>
                      <p className="text-gray-600 text-sm">1 hour before appointment</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="inline-block px-4 py-1 bg-purple-100 rounded-full mb-4">
                  <p className="text-sm font-medium text-purple-700">Client Management</p>
                </div>
                <h2 className="text-3xl font-bold mb-4">Booking & Scheduling Automation</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Eliminate scheduling headaches with smart booking systems that sync with your calendar and send automated reminders.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Client self-scheduling with customizable availability</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Automated email and SMS reminders to reduce no-shows</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Calendar integration with Google, Outlook, and iCal</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Custom intake forms to gather information before meetings</span>
                  </li>
                </ul>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Service 3 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-block px-4 py-1 bg-blue-100 rounded-full mb-4">
                  <p className="text-sm font-medium text-blue-700">Client Nurturing</p>
                </div>
                <h2 className="text-3xl font-bold mb-4">Email & SMS Automation</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Build relationships at scale with personalized email and SMS sequences that nurture leads and keep clients engaged.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">AI-powered personalized messaging that resonates with recipients</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Behavior-triggered sequences based on client actions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Automated follow-ups for leads and past clients</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Performance analytics to optimize open and response rates</span>
                  </li>
                </ul>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="order-1 md:order-2 bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-2xl">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <MessageSquare className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gray-100 rounded-lg p-4">
                      <p className="font-medium">Follow-up Sequence: New Lead</p>
                      <div className="mt-3 space-y-2">
                        <div className="bg-white border border-gray-200 rounded p-2">
                          <p className="text-sm text-gray-700">Day 1: Initial Contact</p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded p-2">
                          <p className="text-sm text-gray-700">Day 3: Value Proposition</p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded p-2">
                          <p className="text-sm text-gray-700">Day 5: Case Study</p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded p-2">
                          <p className="text-sm text-gray-700">Day 7: Booking Invitation</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="text-blue-700 font-medium">Performance Metrics</p>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <div className="bg-white rounded p-2 text-center">
                          <p className="text-gray-600 text-xs">Open Rate</p>
                          <p className="text-blue-700 font-medium">68%</p>
                        </div>
                        <div className="bg-white rounded p-2 text-center">
                          <p className="text-gray-600 text-xs">Response Rate</p>
                          <p className="text-blue-700 font-medium">42%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 4 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-8 rounded-2xl">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                    <FileText className="h-8 w-8 text-purple-600" />
                  </div>
                  <div className="space-y-4">
                    <div className="bg-purple-50 rounded-lg p-4">
                      <p className="font-medium text-purple-800">Document Automation</p>
                      <div className="mt-3 space-y-2">
                        <div className="flex items-center bg-white border border-gray-200 rounded p-2">
                          <FileText className="h-4 w-4 text-gray-500 mr-2" />
                          <p className="text-sm text-gray-700">Property Listing Agreement</p>
                        </div>
                        <div className="flex items-center bg-white border border-gray-200 rounded p-2">
                          <FileText className="h-4 w-4 text-gray-500 mr-2" />
                          <p className="text-sm text-gray-700">Client Intake Form</p>
                        </div>
                        <div className="flex items-center bg-white border border-gray-200 rounded p-2">
                          <FileText className="h-4 w-4 text-gray-500 mr-2" />
                          <p className="text-sm text-gray-700">Property Disclosure</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <p className="text-green-700 font-medium">Status: Ready for Signature</p>
                      <div className="mt-2">
                        <Button variant="outline" size="sm" className="w-full border-green-200 text-green-700">
                          Send to Client
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="inline-block px-4 py-1 bg-purple-100 rounded-full mb-4">
                  <p className="text-sm font-medium text-purple-700">Document Management</p>
                </div>
                <h2 className="text-3xl font-bold mb-4">Document Automation</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Streamline paperwork with automated document generation, collection, and processing for faster client onboarding.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Automated document generation with client data</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">E-signature integration for paperless transactions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Secure document storage and organization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Automated reminders for missing documents</span>
                  </li>
                </ul>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Service 5 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-block px-4 py-1 bg-blue-100 rounded-full mb-4">
                  <p className="text-sm font-medium text-blue-700">Data Management</p>
                </div>
                <h2 className="text-3xl font-bold mb-4">CRM Integration & Workflow Automation</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Connect your existing tools and centralize your data with seamless CRM integrations and automated workflows.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Integration with popular CRM systems (Salesforce, HubSpot, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Automated data entry and synchronization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Custom workflow automation for your specific processes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Real-time reporting and analytics dashboards</span>
                  </li>
                </ul>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="order-1 md:order-2 bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-2xl">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <BarChart3 className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gray-100 rounded-lg p-4">
                      <p className="font-medium">Workflow Automation</p>
                      <div className="mt-3 flex items-center">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <p className="text-blue-700 font-medium">1</p>
                        </div>
                        <div className="flex-1 h-1 bg-blue-200 mx-2"></div>
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <p className="text-blue-700 font-medium">2</p>
                        </div>
                        <div className="flex-1 h-1 bg-blue-200 mx-2"></div>
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <p className="text-blue-700 font-medium">3</p>
                        </div>
                      </div>
                      <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                        <p className="text-xs text-gray-700">Lead Capture</p>
                        <p className="text-xs text-gray-700">Nurture</p>
                        <p className="text-xs text-gray-700">Close</p>
                      </div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="text-blue-700 font-medium">CRM Dashboard</p>
                      <div className="mt-3 space-y-2">
                        <div className="bg-white rounded p-2">
                          <div className="flex justify-between">
                            <p className="text-sm text-gray-700">New Leads</p>
                            <p className="text-sm font-medium text-blue-700">24</p>
                          </div>
                        </div>
                        <div className="bg-white rounded p-2">
                          <div className="flex justify-between">
                            <p className="text-sm text-gray-700">In Progress</p>
                            <p className="text-sm font-medium text-blue-700">18</p>
                          </div>
                        </div>
                        <div className="bg-white rounded p-2">
                          <div className="flex justify-between">
                            <p className="text-sm text-gray-700">Closed Deals</p>
                            <p className="text-sm font-medium text-blue-700">7</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 6 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-8 rounded-2xl">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                    <Settings className="h-8 w-8 text-purple-600" />
                  </div>
                  <div className="space-y-4">
                    <div className="bg-purple-50 rounded-lg p-4">
                      <p className="font-medium text-purple-800">Custom Solution Design</p>
                      <div className="mt-3 space-y-2">
                        <div className="bg-white border border-gray-200 rounded p-2">
                          <p className="text-sm text-gray-700">1. Discovery & Requirements</p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded p-2">
                          <p className="text-sm text-gray-700">2. Solution Design</p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded p-2">
                          <p className="text-sm text-gray-700">3. Implementation</p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded p-2">
                          <p className="text-sm text-gray-700">4. Training & Support</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-4">
                      <p className="text-gray-700 font-medium">Tailored to Your Business</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Custom workflows, integrations, and automations designed specifically for your unique processes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="inline-block px-4 py-1 bg-purple-100 rounded-full mb-4">
                  <p className="text-sm font-medium text-purple-700">Custom Solutions</p>
                </div>
                <h2 className="text-3xl font-bold mb-4">Custom AI Solutions</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Tailored automation systems designed specifically for your business needs, workflows, and growth goals.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Comprehensive business process analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Custom automation development for unique workflows</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Integration with your existing technology stack</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Ongoing support, optimization, and scaling</span>
                  </li>
                </ul>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to transform your business with AI automation?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Schedule a free consultation to discuss your specific needs and goals.
            </p>
            <Button className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-6 rounded-lg text-lg font-medium">
              Get Your Free Automation Plan
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
