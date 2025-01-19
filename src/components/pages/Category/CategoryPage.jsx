
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import ProductCards from '../Shop/ProductCards';
import { useFetchAllProductsQuery } from '../../../redux/features/products/products.Api';

const CategoryPage = () => {

    const { categoryName } = useParams();
    const { data: { products = [], totalPages, totalProducts } = {}, error, isLoading } = useFetchAllProductsQuery({});
    // console.log(categoryName)

    const [filteredProducts, setfilteredProducts] = useState([]);
    useEffect(() => {
        const filtered = products.filter((product) => product.category === categoryName.toLowerCase())
        setfilteredProducts(filtered)
    }, [categoryName])


    // useEffect(() => {
    //     window.scrollTo(0, 0)
    // })
    return (
        <>
            <section className='section__container bg-primary-light'>
                <h2 className='section__header capitalize'>{categoryName}</h2>
                <p className='section__subheader'>Browse a diverse range of categories, from Her Haven dresses to versatile accessories. Elevate your style today!</p>
            </section>

            {/* products card */}

            <div className='section__container'>
                <ProductCards products={filteredProducts}></ProductCards>
            </div>
        </>
    )
}

export default CategoryPage