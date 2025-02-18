import React from 'react';
import { Pie, Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const AdminStatsChart = ({ stats }) => {
    // console.log(stats);

    const pieData = {
        labels: ['Total Orders', 'Total Products', 'Total Reviews', 'Total Users'],
        datasets: [
            {
                label: "Admin Stats",
                data: [
                    stats?.totalOrders || 0,
                    stats?.totalProducts || 0,
                    stats?.totalReviews || 0,
                    stats?.totalUsers || 0,
                ],
                backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0'],
                hoverBackgroundColor: ['#e55373', '#2d91db', '#e6b345', '#3aa5a5'],
            }
        ]
    };

    const data = new Array(12).fill(0);

    if (stats?.monthlyEarnings) {
        stats.monthlyEarnings.forEach((entry) => {
            if (entry.month >= 1 && entry.month <= 12) {
                data[entry.month - 1] = entry.earnings;
            }
        });
    }

    const lineData = {
        labels: [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ],
        datasets: [
            {
                label: 'Monthly Earnings',
                data,
                fill: false,
                backgroundColor: '#36a2eb',
                borderColor: '#007bff',
                tension: 0.1
            }
        ]
    };
    const options = {
        responsive: true,
        maintainAspectRatio: false,
    }

    return (
        <div className='mt-12 space-y-12'>
            <h3 className='text-xl font-semibold mb-4'>Admin Stats Overview</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {/* pie chart */}
                <div className='max-h-96 w-full md:h-96'>
                    <Pie data={pieData} options={options} />
                </div>
                {/* line chart */}
                <div className='max-h-96 w-full md:h-96' >

                    <h3>Monthly Earnings</h3>
                    <Line data={lineData} options={options} />
                </div>

            </div>
            <div>
                <p className='text-center font-bold'>Made with Arman</p>
            </div>
        </div>
    );
};

export default AdminStatsChart;
