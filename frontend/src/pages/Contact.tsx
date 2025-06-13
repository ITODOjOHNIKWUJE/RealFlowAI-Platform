import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { ArrowRight, Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission will be handled by backend integration
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
    });
    // Show success message (to be implemented)
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-70"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/4"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Ready to transform your business with AI automation? Contact us today for a free consultation and personalized automation plan.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and one of our automation experts will get back to you within 24 hours.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      placeholder="Tell us about your automation needs"
                    ></textarea>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl h-full">
                  <h2 className="text-3xl font-bold mb-6">Get Your Free Automation Plan</h2>
                  <p className="text-gray-700 mb-8">
                    Schedule a free 30-minute consultation with one of our automation experts to discuss your business needs and get a personalized automation plan.
                  </p>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg mb-8">
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <div className="space-y-6">
                    <h3 className="text-xl font-bold">Contact Information</h3>
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-blue-600 mr-3 mt-0.5" />
                      <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:hello@realflowai.com" className="text-blue-600 hover:underline">
                          hello@realflowai.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-blue-600 mr-3 mt-0.5" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <a href="tel:+1234567890" className="text-blue-600 hover:underline">
                          +1 (234) 567-890
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-blue-600 mr-3 mt-0.5" />
                      <div>
                        <p className="font-medium">Office</p>
                        <p className="text-gray-700">
                          123 Innovation Drive<br />
                          Tech Hub, Suite 456<br />
                          Lagos, Nigeria
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                    <p className="text-gray-700">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">
                Have questions about our services? Find answers below.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3">How quickly can you implement automation for my business?</h3>
                <p className="text-gray-700">
                  Most of our automation solutions can be implemented within 1-2 weeks, depending on complexity. Simple chatbots and email sequences can often be set up within days, while more complex integrations may take a bit longer.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3">Do I need technical knowledge to use your services?</h3>
                <p className="text-gray-700">
                  No technical knowledge is required. We handle all the technical aspects of implementation and provide user-friendly interfaces for managing your automation systems.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3">Can you integrate with my existing tools and systems?</h3>
                <p className="text-gray-700">
                  Yes, we integrate with most popular CRM systems, email marketing platforms, calendar tools, and other business software. During our consultation, we'll discuss your current tech stack and how we can seamlessly integrate with it.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-3">What kind of support do you provide after implementation?</h3>
                <p className="text-gray-700">
                  All our plans include ongoing support and maintenance. We monitor your automation systems, make adjustments as needed, and provide regular performance reports. Our team is always available to answer questions and provide assistance.
                </p>
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
              Get started today with a free consultation and personalized automation plan.
            </p>
            <Button className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-6 rounded-lg text-lg font-medium">
              Schedule Your Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
