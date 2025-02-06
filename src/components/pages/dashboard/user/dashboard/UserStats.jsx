import React from 'react';

const UserStats = ({ stats }) => {
    console.log(stats);
    return (
        <div className='my-5 space-y-4'>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {[
                    { label: 'Total Payments', value: stats?.totalPayments, fixed: 2 },
                    { label: 'Total Reviews', value: stats?.totalReviews, fixed: 0 },
                    { label: 'Total Purchased Products', value: stats?.totalPurchasedProducts, fixed: 0 }
                ].map((item, index) => (
                    <div key={index} className='bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:border-primary cursor-pointer hover:scale-105 transition-all duration-200'>
                        <h2 className='text-xl font-semibold mb-2'>{item.label}</h2>
                        <p className='text-2xl font-bold'>
                            {item.value ? parseFloat(item.value).toFixed(item.fixed) : "N/A"}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserStats;
