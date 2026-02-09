import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#2D3C25]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-emerald-100 tracking-wider uppercase">
              Product
            </h3>
            <ul className="mt-4 space-y-4">
              {['Features', 'Pricing', 'Security', 'Integrations'].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-base text-white hover:text-emerald-300"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-emerald-100 tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              {['About', 'Blog', 'Careers', 'Press'].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-base text-white hover:text-emerald-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-emerald-100 tracking-wider uppercase">
              Resources
            </h3>
            <ul className="mt-4 space-y-4">
              {['Documentation', 'Guides', 'Support', 'Community'].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-base text-white hover:text-emerald-300"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-emerald-100 tracking-wider uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-4">
              {['Privacy', 'Terms', 'Cookie Policy', 'GDPR'].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-base text-white hover:text-emerald-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-white pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <Link href="#" className="text-emerald-200 hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link href="#" className="text-emerald-200 hover:text-white">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link href="#" className="text-emerald-200 hover:text-white">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link href="#" className="text-emerald-200 hover:text-white">
              <i className="fab fa-linkedin-in"></i>
            </Link>
          </div>
          <p className="mt-8 text-base text-emerald-100 md:mt-0 md:order-1">
            &copy; 2023 My Money Journey. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
