import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-12">
      <div className="sm:flex items-center">
        <div className="sm:w-1/2 p-6" data-aos="fade-right">
          <div className="flex justify-center mb-6">
            <img 
              src="https://i.imgur.com/WbQnbas.png" 
              alt="About Us" 
              className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
            />
          </div>
        </div>
        <div className="sm:w-1/2 p-6" data-aos="fade-left">
          <div className="text-center sm:text-left">
            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase text-lg">About us</span>
            <h2 className="my-4 font-bold text-3xl sm:text-4xl">
              About <span className="text-indigo-600">Our Company</span>
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi
              doloremque, fugiat illum magni minus nisi nulla numquam obcaecati placeat quia, repellat tempore
              voluptatum.
            </p>
          </div>
        </div>
      </div>

      {/* Map and Address Section */}
      <div className="bg-gray-100" data-aos="fade-up">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Visit Our Location</h2>
            <p className="mt-4 text-lg text-gray-500">
             Hey welcome to my site . you visit and best product sell better performance.
            </p>
          </div>
          <div className="mt-16 lg:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-lg overflow-hidden">
              <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.7432274516934!2d90.399452815431!3d23.777176584577907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf52f8ec25d7%3A0xd2e0d7b4c03c7f3d!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1693572525402!5m2!1sen!2sus"
  width="100%"
  height="480"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
></iframe>

              </div>
              <div>
                <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                  <div className="px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-900">Our Address</h3>
                    <p className="mt-1 text-gray-600">123 Main St, San Francisco, CA 94105</p>
                  </div>
                  <div className="border-t border-gray-200 px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                    <p className="mt-1 text-gray-600">Monday - Friday: 9am - 5pm</p>
                    <p className="mt-1 text-gray-600">Saturday: 10am - 4pm</p>
                    <p className="mt-1 text-gray-600">Sunday: Closed</p>
                  </div>
                  <div className="border-t border-gray-200 px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-900">Contact</h3>
                    <p className="mt-1 text-gray-600">Email: info@example.com</p>
                    <p className="mt-1 text-gray-600">Phone: +1 23494 34993</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Us Section */}
      <div className="text-center mt-16 text-4xl font-semibold">
        Why Us?
      </div>

      <div className="container mx-auto px-4 py-12" data-aos="fade-up">
        <div className="flex flex-wrap justify-center">
          {[
            {
              src: "https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp",
              alt: "Latest Milling Machinery",
              title: "Machinery",
            },
            {
              src: "https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp",
              alt: "Reasonable Rates",
              title: "Reasonable Rates",
            },
            {
              src: "https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp",
              alt: "Time Efficiency",
              title: "Time Efficiency",
            },
            {
              src: "https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp",
              alt: "Expertise in Industry",
              title: "Expertise in Industry",
            }
          ].map((item, index) => (
            <div key={index} className="p-4 md:w-1/4 sm:w-1/2">
              <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="w-32 h-32 mb-4 object-cover rounded-full shadow-md"
                />
                <h2 className="text-lg font-semibold text-gray-900">{item.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
