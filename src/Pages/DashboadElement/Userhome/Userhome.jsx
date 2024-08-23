import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import useAxiosSecure from '../../../Hooks/AxiosSequre';
import useCart from '../../../Hooks/usecart';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Userhome() {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item?.price, 0);

  const data = {
    labels: ['Total Price', 'Product Count'], // Labels for the chart
    datasets: [
      {
        label: 'Metrics',
        data: [totalPrice, cart.length], // Data points
        backgroundColor: ['#36A2EB', '#FF6384'],
        borderColor: ['#36A2EB', '#FF6384'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Total Price and Product Count',
      },
    },
  };

  return (
    <div className="p-4 sm:p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">User Dashboard</h1>
      
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-700 mb-4">Overview</h2>
        
        <div className="relative w-full h-64 sm:h-80">
          <Line data={data} options={options} />
        </div>
      </div>
      
      <div className="mt-8">
        <button className="relative bg-blue-700 hover:bg-blue-800 duration-300 py-2 px-4 text-blue-100 rounded">
          Product
          <span className="absolute bg-green-700 text-green-100 px-2 py-1 text-xs font-bold rounded-full -top-3 -right-3">
            {cart.length}
          </span>
        </button>

        <button type="button" className="bg-blue-700 py-2 px-3 rounded-md text-white gap-1 ml-4">
          <span className="m-2">Total Price:</span>
          <span className="bg-teal-500 font-bold text-white text-center py-1 px-2 text-lg rounded">
            ${totalPrice}
          </span>
        </button>
      </div>
    </div>
  );
}
