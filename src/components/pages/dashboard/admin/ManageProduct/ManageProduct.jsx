import React, { useState } from 'react'
import { useFetchAllProductsQuery } from '../../../../../redux/features/products/products.Api'

const ManageProduct = () => {
    const [currentPage, setCurrentPage] = useState(1)

    const { } = useFetchAllProductsQuery({
        category: '',
        color: '',
        minPrice: '',
        maxPrice: '',
        page: currentPage,
        limit: ProductsPerPage
    })
    return (
        <div>Manage  Product working  </div>
    )
}

export default ManageProduct