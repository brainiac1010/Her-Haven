import OrderSummary from "./OrderSummary";


const CartModal = ({ products, isOpen, onClose }) => {
    return (
        <div
            className={`fixed z-[1000] inset-0 bg-black bg-opacity-80 transition-opacity 
            ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            style={{ transition: 'opacity 300ms' }}
        >
            <div
                className={`fixed right-0 top-0 md:w-1/3 w-full bg-white h-full overflow-y-auto transition-transform 
                ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                style={{ transition: 'transform 300ms cubic-bezier(0.25,0.46,0.45,0.94)' }}
            >
                <div className="p-4 mt-4">

                    <div className="flex justify-between items-center mb-4 border-b pb-2">
                        <h4 className="text-xl font-semibold text-gray-800">Your Cart</h4>
                        <button
                            onClick={onClose}
                            className="text-gray-600 hover:text-gray-900 transition"
                        >
                            <i className="ri-close-circle-line text-2xl"></i>
                        </button>
                    </div>

                    {/* card details */}

                    <div className="cart-items">
                        {products.length === 0 ? (
                            <div className="text-center text-gray-500 mt-4">
                                Your cart is empty
                            </div>
                        ) : (
                            products.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col md:flex-row items-start md:items-center justify-between 
                                    shadow-md p-4 mb-4 border rounded-lg bg-gray-50 hover:shadow-lg transition"
                                >

                                    <div className="flex items-center w-full">
                                        <span className="mr-4 px-2 py-1 bg-primary text-white rounded-full text-sm font-bold">
                                            {index + 1}
                                        </span>
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-16 h-16 object-cover mr-4 rounded-lg"
                                        />
                                        <div className="flex-grow">
                                            <h5 className="text-lg font-medium text-gray-800">{item.name}</h5>
                                            <p className="text-gray-600 text-sm mt-1">
                                                ${Number(item.price).toFixed(2)}
                                            </p>
                                        </div>
                                    </div>


                                    <div
                                        className="flex flex-row items-center justify-end mt-4 md:mt-0 space-x-4 w-full md:w-auto"
                                    >
                                        <button
                                            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 
                                            hover:bg-primary hover:text-white transition"
                                        >
                                            -
                                        </button>
                                        <span className="text-gray-700 text-sm">{item.quantity}</span>
                                        <button
                                            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 
                                            hover:bg-primary hover:text-white transition"
                                        >
                                            +
                                        </button>
                                        <button
                                            className="text-red-500 hover:text-red-700 text-sm font-medium transition"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* calculation  */}
                    {
                        products.length > 0 && (

                            <OrderSummary></OrderSummary>
                        )

                    }

                </div>
            </div>
        </div>
    );
};

export default CartModal;
