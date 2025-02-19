import React, { useState } from 'react';
import { useDeleteProductMutation, useFetchAllProductsQuery } from '../../../../../redux/features/products/products.Api';
import { formateDate } from '../../../../../utils/formateDate';
import { Link } from 'react-router-dom';

const ManageProduct = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(12);
    const { data: { products = [], totalPages, totalProducts } = {}, isLoading, error, refetch } = useFetchAllProductsQuery({
        category: '',
        color: '',
        minPrice: '',
        maxPrice: '',
        page: currentPage,
        limit: productsPerPage,
    });
    // console.log(products)

    //pagination
    const startProduct = (currentPage - 1) * productsPerPage + 1;
    const endProduct = startProduct + products.length - 1;
    const handlePageChange = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };


    const [deleteProduct] = useDeleteProductMutation()
    const handleDeleteProduct = async (id) => {
        try {

            const response = await deleteProduct(id).unwrap();
            alert("Product Deleted Successfully!")
            await refetch()
        } catch (error) {
            console.error("Error deleting product", error)
        }
    }
    return (
        <>
            {isLoading && (
                <div className="flex justify-center items-center h-screen">
                    <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-red-600"></div>
                </div>
            )}

            {error && <div className="text-red-600 text-center">Error loading products...</div>}

            <section className="py-1 bg-blueGray-50">
                <div className="w-full mb-12 xl:mb-0 px-4 mx-auto">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                        <div className="rounded-t px-4 py-3 border-0 flex justify-between items-center">
                            <h3 className="font-semibold text-base text-blueGray-700">All Products</h3>
                            <button className="bg-indigo-500 text-white px-3 py-1 rounded text-xs font-bold uppercase transition-all duration-150">
                                See all
                            </button>
                        </div>

                        <div className="block w-full overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-blueGray-50">
                                        <th className="px-6 py-3 text-xs uppercase font-semibold text-left border border-blueGray-100">No.</th>
                                        <th className="px-6 py-3 text-xs uppercase font-semibold text-left border border-blueGray-100">Product Name</th>
                                        <th className="px-6 py-3 text-xs uppercase font-semibold text-left border border-blueGray-100">Publishing Date</th>
                                        <th className="px-6 py-3 text-xs uppercase font-semibold text-left border border-blueGray-100">Edit</th>
                                        <th className="px-6 py-3 text-xs uppercase font-semibold text-left border border-blueGray-100">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.length > 0 ? (
                                        products.map((product, index) => (
                                            <tr key={product._id} className="border-t">
                                                <td className="px-6 py-4 text-xs">{(currentPage - 1) * productsPerPage + index + 1}</td>
                                                <td className="px-6 py-4 text-xs">{product?.name}</td>
                                                <td className="px-6 py-4 text-xs">{formateDate(product?.createdAt)}</td>
                                                <td className="px-6 py-4 text-xs cursor-pointer">
                                                    <Link to={`/dashboard/update-product/${product._id}`} className="text-blue-500 hover:text-primary hover:font-semibold hover:text-sm">
                                                        Edit
                                                    </Link>
                                                </td>
                                                <td className="px-6 py-4 text-xs">
                                                    <button onClick={() => handleDeleteProduct(product?._id)} className="bg-red-600 px-2 py-1 text-white rounded">Delete</button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="5" className="text-center text-gray-500 py-4">No products found.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center space-x-2 my-4">
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
                            >
                                Previous
                            </button>
                            <span className="px-4 py-1 border rounded">{currentPage} / {totalPages}</span>
                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ManageProduct;
