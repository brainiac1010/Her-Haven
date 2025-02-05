import React from 'react';

const UserStats = ({ stats }) => {
    console.log(stats);
    return (
        <div className='my-5 space-y-4'>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className='bg-white shadow-md rounded-lg p-6 border-gray-200 hover:border-primary cursor-pointer hover:scale-105 transition-all duration-200 '>
                    <h2 className='text-xl font font-semibold mb-2'>Total Payments</h2>
                    <p className='text-2xl font-bold'>{stats?.totalPayments ? parseFloat(stats.totalPayments).toFixed(2) : "N/A"}</p>
                </div>
            </div>
        </div>
    );
}

export default UserStats;
