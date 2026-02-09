import React from 'react';

export default function Stats() {
  return (
    <div className="bg-[#2D3C25] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-emerald-200 font-semibold tracking-wide uppercase">
            Trusted by thousands
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Our users love My Money Journey
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <p className="text-5xl font-extrabold text-white">TBD</p>
              <p className="mt-2 text-base text-indigo-100">
                Customer satisfaction
              </p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-extrabold text-white">TBD</p>
              <p className="mt-2 text-base text-indigo-100">Active users</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-extrabold text-white">TBD</p>
              <p className="mt-2 text-base text-indigo-100">Assets managed</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-extrabold text-white">TBD</p>
              <p className="mt-2 text-base text-indigo-100">App Store rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
