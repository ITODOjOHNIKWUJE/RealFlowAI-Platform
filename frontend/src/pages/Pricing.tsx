import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses just getting started with automation.',
      monthlyPrice: 497,
      annualPrice: 4470, // 10% discount
      features: [
        'AI Chatbot (1 implementation)',
        'Basic Email Automation',
        'Calendar Integration',
        'Lead Capture Forms',
        'Basic Analytics',
        'Email Support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      description: 'Comprehensive automation for growing businesses.',
      monthlyPrice: 997,
      annualPrice: 8973, // 10% discount
      features: [
        'Everything in Starter, plus:',
        'Multiple AI Chatbots (up to 3)',
        'Advanced Email & SMS Sequences',
        'CRM Integration',
        'Document Automation',
        'Advanced Analytics & Reporting',
        'Priority Support',
        'Monthly Strategy Call'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'Custom solutions for established businesses with complex needs.',
      monthlyPrice: null,
      annualPrice: null,
      features: [
        'Everything in Professional, plus:',
        'Unlimited AI Chatbots',
        'Custom Automation Development',
        'API Integrations',
        'White-label Solutions',
        'Dedicated Account Manager',
        'Custom Training & Onboarding',
        '24/7 Priority Support'
      ],
      popular: false
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-70"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/4"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Choose the plan that fits your business needs and growth goals. All plans include our core automation features and dedicated support.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-12">
              <div className="bg-gray-100 p-1 rounded-lg flex">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition ${
                    billingCycle === 'monthly'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('annual')}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition ${
                    billingCycle === 'annual'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Annual
                  <span className="ml-1 text-xs text-green-600 font-semibold">Save 10%</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-2xl border-2 p-8 ${
                    plan.popular
                      ? 'border-blue-500 shadow-xl scale-105'
                      : 'border-gray-200 shadow-sm hover:shadow-lg'
                  } transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    
                    <div className="mb-6">
                      {plan.monthlyPrice ? (
                        <>
                          <div className="text-4xl font-bold">
                            ${billingCycle === 'monthly' ? plan.monthlyPrice : Math.round(plan.annualPrice! / 12)}
                            <span className="text-lg text-gray-600 font-normal">/month</span>
                          </div>
                          {billingCycle === 'annual' && (
                            <div className="text-sm text-gray-500 mt-1">
                              Billed annually (${plan.annualPrice})
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="text-4xl font-bold">Custom</div>
                      )}
                    </div>
                    
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                          : plan.name === 'Enterprise'
                          ? 'bg-gray-900 hover:bg-gray-800 text-white'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                      }`}
                    >
                      {plan.name === 'Enterprise' ? 'Contact Us' : 'Get Started'}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4">What's included:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
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
              <p className="text-gray-600">
                Have questions about our pricing? We're here to help.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-2">Can I change plans later?</h3>
                <p className="text-gray-600 mb-6">
                  Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
                </p>
                
                <h3 className="font-semibold mb-2">Is there a setup fee?</h3>
                <p className="text-gray-600 mb-6">
                  No setup fees. We include onboarding and initial configuration in all our plans.
                </p>
                
                <h3 className="font-semibold mb-2">What's included in support?</h3>
                <p className="text-gray-600">
                  All plans include email support. Professional and Enterprise plans include priority support and strategy calls.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Do you offer custom solutions?</h3>
                <p className="text-gray-600 mb-6">
                  Yes, our Enterprise plan includes custom automation development tailored to your specific needs.
                </p>
                
                <h3 className="font-semibold mb-2">Is there a contract?</h3>
                <p className="text-gray-600 mb-6">
                  No long-term contracts required. You can cancel anytime with 30 days notice.
                </p>
                
                <h3 className="font-semibold mb-2">Do you offer training?</h3>
                <p className="text-gray-600">
                  Yes, we provide comprehensive training and onboarding to ensure you get the most out of your automation systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;

