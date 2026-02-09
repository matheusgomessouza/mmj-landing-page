import React from 'react';

export default function Testimonials() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-[#33452A] font-semibold tracking-wide uppercase">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What our users say
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="testimonial-card p-6 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-center">
              <div>
                <div className="text-sm font-medium text-gray-900">
                  Sarah Johnson
                </div>
                <div className="text-sm text-gray-500">Marketing Director</div>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-600 italic">
                &rdquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                reprehenderit, at obcaecati corrupti dignissimos ipsa nesciunt
                inventore recusandae ut unde quibusdam repellat consectetur
                totam. Ratione laudantium dolores odit aliquam accusamus?&quot;
              </p>
            </div>
            <div className="mt-4 flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <i
                  key={s}
                  className={`fas fa-star text-[#91C478] ${s > 1 ? 'ml-1' : ''}`}
                ></i>
              ))}
            </div>
          </div>

          <div className="testimonial-card p-6 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-center">
              <div>
                <div className="text-sm font-medium text-gray-900">
                  Michael Chen
                </div>
                <div className="text-sm text-gray-500">Software Engineer</div>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-600 italic">
                &rdquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                reprehenderit, at obcaecati corrupti dignissimos ipsa nesciunt
                inventore recusandae ut unde quibusdam repellat consectetur
                totam. Ratione laudantium dolores odit aliquam accusamus?&quot;
              </p>
            </div>
            <div className="mt-4 flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <i
                  key={s}
                  className={`fas fa-star text-[#91C478] ${s > 1 ? 'ml-1' : ''}`}
                ></i>
              ))}
            </div>
          </div>

          <div className="testimonial-card p-6 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-center">
              <div>
                <div className="text-sm font-medium text-gray-900">
                  David Wilson
                </div>
                <div className="text-sm text-gray-500">
                  Small Business Owner
                </div>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-600 italic">
                &rdquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                reprehenderit, at obcaecati corrupti dignissimos ipsa nesciunt
                inventore recusandae ut unde quibusdam repellat consectetur
                totam. Ratione laudantium dolores odit aliquam accusamus?&quot;
              </p>
            </div>
            <div className="mt-4 flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <i
                  key={s}
                  className={`fas fa-star text-[#91C478] ${s > 1 ? 'ml-1' : ''}`}
                ></i>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
