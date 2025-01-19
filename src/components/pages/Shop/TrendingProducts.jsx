import { useState } from "react"
import ProductCards from "./ProductCards"
import { useFetchAllProductsQuery } from "../../../redux/features/products/products.Api";

const TrendingProducts = () => {

    const [visibleProducts, setVisibleProducts] = useState(8);
    const loadMoreProducts = () => {
        setVisibleProducts(prevCount => prevCount + 4)

    }
    const { data: { products = [], totalPages, totalProducts } = {}, error, isLoading } = useFetchAllProductsQuery({});

    console.log(products)
    return (
        <section className="section__container product__container">
            <h2 className="section__header">Trending Products</h2>
            <p className="section__subheader ">
                Discover the hottest trends! Elevate your style with our curated collection of womens fashion products.
            </p>


            {/* Products Cards */}
            <div className="mt-12">
                <ProductCards products={products.slice(0, visibleProducts)} ></ProductCards>
            </div>
            {/* load more product btn */}
            <div className="product__btn">
                {
                    visibleProducts < products.length && (
                        <button className="btn" onClick={loadMoreProducts}>Load More</button>
                    )
                }
            </div>
        </section>
    )
}

export default TrendingProducts