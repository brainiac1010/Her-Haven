import React, { useState } from 'react';
import { useDeleteOrderMutation, useGetAllOrdersQuery } from '../../../../../redux/features/orders/orderApi';
import { formateDate } from '../../../../../utils/formateDate';
import { Link } from 'react-router-dom';
import UpdateOrderModal from './UpdateOrderModal';

const ManageOrder = () => {
    const { data: orders, error, isLoading, refetch } = useGetAllOrdersQuery();
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deleteOrder] = useDeleteOrderMutation();

    const handleEditOrder = (order) => {
        setSelectedOrder(order);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedOrder(null);
    };

    const handleDeleteOrder = async (orderId) => {
        try {
            await deleteOrder(orderId).unwrap();
            alert("Order deleted successfully!!");
            refetch();
        } catch (error) {
            console.error("Failed to delete order:", error);
        }
    };

    if (isLoading) return <div className="p-4 text-center">Loading...</div>;
    if (error) return <div className="p-4 text-center text-red-500">Something went wrong!</div>;

    return (
        <div className='p-4 sm:p-6'>
            <h2 className='text-xl sm:text-2xl font-semibold mb-4'>Manage Orders</h2>


            <div className="hidden md:block overflow-x-auto">
                <table className='min-w-full text-sm sm:text-base bg-white border border-gray-200 rounded-lg'>
                    <thead className='bg-gray-100'>
                        <tr>
                            <th className='py-3 px-4 border-b text-left'>Order ID</th>
                            <th className='py-3 px-4 border-b text-left'>Customer</th>
                            <th className='py-3 px-4 border-b text-left'>Status</th>
                            <th className='py-3 px-4 border-b text-left'>Date</th>
                            <th className='py-3 px-4 border-b text-left'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className='py-3 px-4 border-b'>{order?.orderId}</td>
                                    <td className='py-3 px-4 border-b'>{order?.email}</td>
                                    <td className='py-3 px-4 border-b'>
                                        <span className={`inline-block px-3 text-xs py-1 text-white rounded-full ${getStatusColor(order?.status)}`}>
                                            {order?.status}
                                        </span>
                                    </td>
                                    <td className='py-3 px-4 border-b'>{formateDate(order?.updatedAt)}</td>
                                    <td className='py-3 px-4 border-b'>
                                        <div className="flex items-center space-x-2">
                                            <Link to="#" className="text-blue-600 hover:underline">View</Link>
                                            <button onClick={() => handleEditOrder(order)} className="text-green-600 hover:underline">Edit</button>
                                            <button onClick={() => handleDeleteOrder(order?._id)} className="text-red-600 hover:underline">Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                {/* update order modal */}
                {
                    selectedOrder && (
                        <UpdateOrderModal
                            order={selectedOrder}
                            isOpen={isModalOpen}
                            onClose={handleCloseModal}
                        ></UpdateOrderModal>
                    )
                }
            </div>


            <div className="md:hidden space-y-4">
                {
                    orders?.map((order, index) => (
                        <div key={index} className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
                            <div className="mb-2">
                                <span className="font-medium">Order ID:</span> {order?.orderId}
                            </div>
                            <div className="mb-2">
                                <span className="font-medium">Customer:</span> {order?.email}
                            </div>
                            <div className="mb-2">
                                <span className="font-medium">Status:</span>{" "}
                                <span className={`inline-block px-3 py-1 text-xs text-white rounded-full ${getStatusColor(order?.status)}`}>
                                    {order?.status}
                                </span>
                            </div>
                            <div className="mb-2">
                                <span className="font-medium">Date:</span> {formateDate(order?.updatedAt)}
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 gap-2 mt-3">
                                <Link to="#" className="bg-blue-500 hover:bg-blue-600 text-white text-sm py-1 px-3 rounded text-center">View</Link>
                                <button onClick={() => handleEditOrder(order)} className="bg-green-500 hover:bg-green-600 text-white text-sm py-1 px-3 rounded">Edit</button>
                                <button onClick={() => handleDeleteOrder(order?._id)} className="bg-red-500 hover:bg-red-600 text-white text-sm py-1 px-3 rounded">Delete</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

const getStatusColor = (status) => {
    switch (status) {
        case 'pending': return 'bg-yellow-500';
        case 'processing': return 'bg-blue-500';
        case 'shipped': return 'bg-green-500';
        case 'completed': return 'bg-gray-400';
        default: return 'bg-gray-300';
    }
};

export default ManageOrder;
