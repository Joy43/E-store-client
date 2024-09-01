import React from 'react';
import Marquee from "react-fast-marquee";

const feedbackData = [
  {
    id: 1,
    product: "  I may not show it but I can't live without the code editor",
    name: "John Doe",
    role: "Web Developer",
    imageUrl: "https://images.unsplash.com/photo-1632910121591-29e2484c0259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxjb2RlcnxlbnwwfDB8fHwxNzEwMTY0NjIzfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    product: "   I may not show it but I can't live without React",
    name: "Jane Smith",
    role: "Frontend Developer",
    imageUrl: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxjb2RlcnxlbnwwfDB8fHwxNzEwMTY0NjIzfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    product: "  I may not show it but I can't live without the code editor",
    name: "John Doe",
    role: "Web Developer",
    imageUrl: "https://images.unsplash.com/photo-1632910121591-29e2484c0259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxjb2RlcnxlbnwwfDB8fHwxNzEwMTY0NjIzfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 4,
    product: "  I may not show it but I can't live without the code editor",
    name: "ms Doe",
    role: "Web Developer",
    imageUrl: "https://images.unsplash.com/photo-1632910121591-29e2484c0259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxjb2RlcnxlbnwwfDB8fHwxNzEwMTY0NjIzfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  
];

function Feedback() {
  return (
   <div>
<h1 className='text-center m-6 justify-center font-semibold text-2xl'>Feedback Our Client</h1>
<Marquee 
      gradient={false} 
      speed={50} 
      pauseOnHover={true}
      className="marquee-container"
    >
      {feedbackData.map((feedback) => (
        <div 
          key={feedback.id} 
          className="inline-block text-sm leading-6 mx-4 m-8"
        >
          <div 
            className="relative flex flex-col-reverse p-6 rounded-lg"
            style={{
              backgroundColor: "#F6F5F2", 
              color: "#1351D8",
              boxShadow: "7px 7px 15px #d1d1d1, -7px -7px 15px #ffffff"
            }}
          >
            <blockquote className="mt-6">
              <p className="text-slate-700 ">
               {feedback.product}.
              </p>
            </blockquote>
            <figcaption className="flex items-center space-x-4">
              <img
                src={feedback.imageUrl}
                alt={feedback.name}
                className="flex-none w-14 h-14 rounded-full object-cover"
                loading="lazy"
                decoding="async"
                style={{
                  boxShadow: "4px 4px 8px #d1d1d1, -4px -4px 8px #ffffff"
                }}
              />
              <div className="flex-auto">
                <div 
                  className="text-base font-semibold"
                  style={{ color: "#1351D8" }}
                >
                  {feedback.name}
                </div>
                <div className="mt-0.5 text-black ">
                  {feedback.role}
                </div>
              </div>
            </figcaption>
          </div>
        </div>
      ))}
    </Marquee>
   </div>
  );
}

export default Feedback;
