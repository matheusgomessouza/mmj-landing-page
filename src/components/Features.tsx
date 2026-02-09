import React from 'react';

export default function Features() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-[#33452A] font-semibold tracking-wide uppercase">
            Features
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to manage money
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Everything you need to take control of your finances in one
            beautiful interface.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative feature-card p-6 rounded-lg border border-gray-200 transition-all duration-300">
              <div className="flex justify-center h-12 w-12 rounded-md gradient-bg text-white items-center">
                <i className="fas fa-chart-line text-xl"></i>
              </div>
              <div className="mt-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Visual Spending
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  See exactly where your money goes with beautiful,
                  easy-to-understand charts and graphs.
                </p>
              </div>
            </div>

            <div className="relative feature-card p-6 rounded-lg border border-gray-200 transition-all duration-300">
              <div className="flex justify-center h-12 w-12 rounded-md gradient-bg text-white items-center">
                <i className="fas fa-bullseye text-xl"></i>
              </div>
              <div className="mt-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Goal Tracking
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Set financial goals and track your progress with personalized
                  milestones and reminders.
                </p>
              </div>
            </div>

            <div className="relative feature-card p-6 rounded-lg border border-gray-200 transition-all duration-300">
              <div className="flex justify-center h-12 w-12 rounded-md gradient-bg text-white items-center">
                <i className="fas fa-robot text-xl"></i>
              </div>
              <div className="mt-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  AI Insights
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Get smart recommendations based on your spending patterns and
                  financial habits.
                </p>
              </div>
            </div>

            <div className="relative feature-card p-6 rounded-lg border border-gray-200 transition-all duration-300">
              <div className="flex justify-center h-12 w-12 rounded-md gradient-bg text-white items-center">
                <i className="fas fa-shield-alt text-xl"></i>
              </div>
              <div className="mt-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Bank-Level Security
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  256-bit encryption and multi-factor authentication keep your
                  financial data safe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
