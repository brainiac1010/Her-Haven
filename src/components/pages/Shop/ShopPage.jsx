import { useEffect, useState } from 'react'

import productsData from '../../../data/product.json'
import ProductCards from './ProductCards';
import ShopFiltering from './ShopFiltering';
import { useFetchAllProductsQuery } from '../../../redux/features/products/products.Api';

const filters = {
    categories: ['all', 'accessories', 'dress', 'jewellery', 'cosmetics'],
    colors: ['all', 'black', 'red', 'gold', 'blue', 'silver', 'beige', 'green'],
    priceRanges: [
        { label: 'under $50', min: 0, max: 50 },
        { label: '$50-100', min: 50, max: 100 },
        { label: '$100-200', min: 100, max: 200 },
        { label: '$200 and above', min: 200, max: Infinity },
    ]
};

const ShopPage = () => {
    const [filtersState, setFiltersState] = useState({
        category: 'all',
        color: 'all',
        priceRange: ''
    });


    const [currentPage, setCurrentPage] = useState(1)
    const [ProductsPerPage] = useState(8);

    const { category, color, priceRange } = filtersState;
    const [minPrice, maxPrice] = priceRange.split('-').map(Number);

    const { data: { products = [], totalPages, totalProducts } = {}, error, isLoading } = useFetchAllProductsQuery({

        category: category !== "all" ? category : "",
        color: color !== "all" ? color : "",
        minPrice: isNaN(minPrice) ? "" : minPrice,
        maxPrice: isNaN(maxPrice) ? "" : maxPrice,
        page: currentPage,
        limit: ProductsPerPage,
    })


    //clear filter

    const clearFilters = () => {

        setFiltersState({
            category: 'all',
            color: 'all',
            priceRange: ''
        })
    }

    //handel page change
    const handlePageChange = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber)
        }
    }


    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error loading products.</div>
    const startProduct = (currentPage - 1) * ProductsPerPage + 1;
    const endProduct = startProduct + products.length - 1;

    return (
        <>
            <section className='section__container bg-primary-light'>
                <h2 className='section__header capitalize'>Shop Page</h2>
                <p className='section__subheader'>Explore top picks: Upgrade your style with our trending women's fashion collection.</p>
            </section>


            <section className='section__container'>
                <div className='flex flex-col md:flex-row md:gap-12 gap-8'>
                    {/* left arear */}
                    <ShopFiltering
                        filters={filters}
                        filtersState={filtersState}
                        setFiltersState={setFiltersState}
                        clearFilters={clearFilters}>
                    </ShopFiltering>

                    {/* right area */}
                    <div>
                        <h3 className='text-xl font-medium mb-4'>Products Available: {products.length}</h3>
                        <ProductCards products={products}></ProductCards>

                        {/* pagination control */}

                        <div className=' mt-6 flex justify-center'>
                            <button
                                disabled={currentPage === 1}
                                onClick={() => handlePageChange(currentPage - 1)}
                                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md mr-2 hover:bg-gray-400 hover:text-gray-900 transition-all duration-200">
                                Previous
                            </button>

                            {
                                [...Array(totalPages)].map((_, index) => (
                                    <button key={index}
                                        onClick={() => handlePageChange(index + 1)}
                                        className={`px-4 py-2 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'} 
                                        rounded-md mx-1
                                        `}
                                    >{index + 1}</button>
                                ))
                            }

                            <button

                                disabled={currentPage === totalPages}
                                onClick={() => handlePageChange(currentPage + 1)}
                                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md ml-2 hover:bg-gray-400 hover:text-gray-900 transition-all duration-200">
                                Next
                            </button>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ShopPage