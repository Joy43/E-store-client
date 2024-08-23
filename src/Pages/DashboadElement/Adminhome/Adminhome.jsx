import React, { useRef, useEffect } from 'react';
import { useQuery } from "@tanstack/react-query";
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import useAxiosSecure from '../../../Hooks/AxiosSequre';

ChartJS.register(ArcElement, Tooltip, Legend);

function Adminhome() {
    const chartRef = useRef(null);
    const axiosSecure = useAxiosSecure();
    
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });

    const adminCount = users.filter(user => user.role === 'admin').length;
    const userCount = users.length - adminCount;

    const data = {
        labels: ['Admin', 'User'],
        datasets: [
            {
                label: '# of Users',
                data: [adminCount, userCount],
                backgroundColor: ['#FF6384', '#36A2EB'],
                hoverBackgroundColor: ['#FF4B72', '#339AF0'],
                borderColor: '#fff',
                borderWidth: 2,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    font: {
                        size: 14,
                        family: 'Arial, sans-serif',
                    },
                    color: '#4B5563', // Tailwind's gray-700
                },
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return `${tooltipItem.label}: ${tooltipItem.raw}`;
                    }
                }
            }
        },
    };

    useEffect(() => {
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();  // Destroy the chart instance on unmount
            }
        };
    }, []);

    return (
        <div className="p-4 sm:p-8 bg-gray-100 min-h-screen">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">Admin Dashboard</h1>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-700 mb-4">User Distribution</h2>
                <div className="relative w-full h-64 sm:h-80">
                    <Pie ref={chartRef} data={data} options={options} />
                </div>
            </div>
        </div>
    );
}

export default Adminhome;
