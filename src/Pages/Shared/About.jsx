import React from 'react';

export default function About() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-12">
      <div className="sm:flex items-center">
        <div className="sm:w-1/2 p-6">
          <div className="flex justify-center mb-6">
            <img 
              src="https://i.imgur.com/WbQnbas.png" 
              alt="About Us" 
              className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
            />
          </div>
        </div>
        <div className="sm:w-1/2 p-6">
          <div className="text-center sm:text-left">
            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase text-lg">About us</span>
            <h2 className="my-4 font-bold text-3xl sm:text-4xl">About <span className="text-indigo-600">Our Company</span></h2>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi
              doloremque, fugiat illum magni minus nisi nulla numquam obcaecati placeat quia, repellat tempore
              voluptatum.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-16 text-4xl font-semibold">
        Why Us?
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-center">
          {[
            {
              src: "https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp",
              alt: "Latest Milling Machinery",
              title: " Machinery",
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
