import React, { useState, useEffect } from 'react';
import { useUpdateOrderStatusMutation } from '../../../../../redux/features/orders/orderApi';

const UpdateOrderModal = ({ order, isOpen, onClose, onUpdate }) => {
    const [status, setStatus] = useState(order?.status || '');
    const [updateOrderStatus, { isLoading, error }] = useUpdateOrderStatusMutation();

    // Sync status when order changes
    useEffect(() => {
        if (order) {
            setStatus(order.status || '');
        }
    }, [order]);

    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        await handleUpdateOrderStatus();
        onUpdate?.(); // optional callback
        onClose();    // close modal
        window.location.reload(); // reload the page after updating the status
    };

    // Handle actual update mutation
    const handleUpdateOrderStatus = async () => {
        try {
            await updateOrderStatus({ id: order?._id, status });
        } catch (error) {
            console.error("Failed to update order status:", error);
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            role="dialog"
            aria-modal="true"
        >
            <div className="bg-white w-full max-w-md mx-auto rounded-lg p-6 relative shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Update Order Status</h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Order ID:</label>
                        <input
                            type="text"
                            value={order?.orderId || ''}
                            readOnly
                            className="w-full px-4 py-2 border rounded-md bg-gray-100 cursor-not-allowed"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Customer Email:</label>
                        <input
                            type="text"
                            value={order?.email || ''}
                            readOnly
                            className="w-full px-4 py-2 border rounded-md bg-gray-100 cursor-not-allowed"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="status">
                            Status:
                        </label>
                        <select
                            id="status"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md"
                        >
                            <option value="">-- Select Status --</option>
                            <option value="pending">Pending</option>
                            <option value="processing">Processing</option>
                            <option value="shipped">Shipped</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>

                    {error && (
                        <p className="text-sm text-red-600">Failed to update status. Please try again.</p>
                    )}

                    <div className="flex justify-end space-x-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-sm rounded"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`px-4 py-2 text-white text-sm rounded ${
                                isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                            }`}
                        >
                            {isLoading ? 'Updating...' : 'Update'}
                        </button>
                    </div>
                </form>

                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-lg"
                >
                    &times;
                </button>
            </div>
        </div>
    );
};

export default UpdateOrderModal;
