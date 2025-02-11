import React from 'react';
import { useSelector } from 'react-redux';
import { useGetOrdersByEmailQuery } from '../../../../redux/features/orders/orderApi';

const UserPayments = () => {
    const { user } = useSelector((state) => state.auth);
    const { data: ordersdata, error, isLoading } = useGetOrdersByEmailQuery(user?.email);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-red-600"></div>
            </div>
        );
    }

    if (error) {
        return <div className="text-red-600 font-bold text-center">No Orders Found</div>;
    }

    const orders = ordersdata?.orders || [];
    const totalPayment = orders.reduce((acc, order) => acc + order.amount, 0).toFixed(2);
    
    return (
        <div className="py-6 px-4 bg-gray-100 min-h-screen">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Total Payments</h3>
            <p className="mb-5 text-lg font-medium text-gray-800 bg-white p-4 rounded shadow">
                Total Spent: <span className="text-green-600 font-bold">${totalPayment ? totalPayment : 0}</span>
            </p>
            <ul>
                {orders.map((item, index) => (
                    <li key={index} className="bg-white p-4 mb-4 rounded shadow">
                        <h5 className="font-medium text-gray-800 mb-2">Order #{index + 1}</h5>
                        <div className="text-lg font-semibold text-purple-700">
                            Order Amount: ${item?.amount.toFixed(2)}
                        </div>
                        <div className="flex md:flex-row items-center space-x-2 mt-2">
                            <span className="text-gray-600">
                                Date: {new Date(item?.createdAt).toLocaleString()}
                            </span>
                            <p className="text-gray-600">
                                | Status: 
                                <span className={`ml-2 py-[2px] px-2 text-sm rounded font-semibold ${
                                    item?.status === 'completed' ? 'bg-green-100 text-green-700' :
                                    item?.status === 'pending' ? 'bg-red-200 text-red-700' :
                                    item?.status === 'processing' ? 'bg-yellow-100 text-yellow-700' :
                                    'bg-blue-200 text-blue-700'
                                }`}>
                                    {item?.status}
                                </span>
                            </p>
                        </div>
                        <hr className="my-2 border-gray-300" />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserPayments;