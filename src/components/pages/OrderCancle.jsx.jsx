import React from "react";
import { XCircle } from "lucide-react";

const OrderCancelled = () => {
  return (
    <section className="min-h-screen bg-red-50 flex items-center justify-center px-4 py-12">
      <div className="bg-white shadow-xl rounded-3xl p-10 max-w-md w-full text-center border-t-8 border-red-400">
        <XCircle className="text-red-500 w-16 h-16 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-red-600 mb-2">Order Cancelled</h2>
        <p className="text-gray-600 mb-6">
          Your order has been successfully cancelled. If this was a mistake or you need further help, please contact support.
        </p>
        <a
          href="/"
          className="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-full transition"
        >
          Back to Home
        </a>
      </div>
    </section>
  );
};

export default OrderCancelled;
