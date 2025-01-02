import React, { useState } from 'react';
import productsData from "../../../data/product.json";
import ProductCards from '../Shop/ProductCards';

const Search = () => {

    const [searchQuery, setSearchQuery] = useState('')
    const [filteredProducts, setFilteredProducts] = useState(productsData);


    const handleSearch = () => {
        const query = searchQuery.toLowerCase();

        const filtered = productsData.filter(product => product.name.toLowerCase().includes(query) || product.description.toLowerCase().includes(query))
        setFilteredProducts(filtered);
    }


    return (
        <>
            <section className='section__container bg-primary-light'>
                <h2 className='section__header capitalize'>Search Products</h2>
                <p className='section__subheader'>Browse a diverse range of categories, from Her Haven dresses to versatile accessories. Elevate your style today!</p>
            </section>

            <section className='section__container '>



                

                <div className='w-full gap-4 justify-center mb-12 flex flex-col md:flex-row items-center'>
                    <input type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className='search-bar w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out'
                        placeholder='search for products...' />


                    <button 
                    onClick={handleSearch}
                    className='search-button w-full md:w-auto py-2 px-8 bg-primary rounded text-white hover:bg-blue-600'>
                        Search
                    </button>
                </div>


                <ProductCards products={filteredProducts}></ProductCards>
            </section>
        </>
    )
}

export default Search