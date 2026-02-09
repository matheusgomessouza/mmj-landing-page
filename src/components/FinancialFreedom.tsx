import React from 'react';

export default function FinancialFreedom() {
  return (
    <div className="bg-[#2D3C25] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-emerald-200 font-semibold tracking-wide uppercase">
            Financial Freedom
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Achieve your money goals faster
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="text-center">
            <div className="flex justify-center h-12 w-12 rounded-md bg-[#91C478] text-white items-center mx-auto">
              <i className="fas fa-piggy-bank text-xl"></i>
            </div>
            <h3 className="mt-4 text-lg font-medium text-white">Save More</h3>
            <p className="mt-2 text-base text-emerald-100">
              Our smart algorithms help identify savings opportunities you
              didn't know existed.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center h-12 w-12 rounded-md bg-[#91C478] text-white items-center mx-auto">
              <i className="fas fa-chart-pie text-xl"></i>
            </div>
            <h3 className="mt-4 text-lg font-medium text-white">
              Spend Smarter
            </h3>
            <p className="mt-2 text-base text-emerald-100">
              Real-time spending insights help you make better financial
              decisions daily.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center h-12 w-12 rounded-md bg-[#91C478] text-white items-center mx-auto">
              <i className="fas fa-rocket text-xl"></i>
            </div>
            <h3 className="mt-4 text-lg font-medium text-white">Grow Wealth</h3>
            <p className="mt-2 text-base text-emerald-100">
              Personalized investment recommendations tailored to your risk
              profile and goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
