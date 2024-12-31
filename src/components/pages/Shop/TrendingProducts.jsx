import { useState } from "react"
import ProductCards from "./ProductCards"
import products from '../../../data/product.json'

const TrendingProducts = () => {

    const [visibleProducts, setVisibleProducts] = useState(8);
    const loadMoreProducts = () => {
        setVisibleProducts(prevCount => prevCount + 4)

    }
    return (
        <section className="section__container product__container">
            <h2 className="section__header">Tranding Products</h2>
            <p className="section__subheader ">
                Discover the hottest trends! Elevate your style with our curated collection of women's fashion products.
            </p>


            {/* Products Cards */}
            <div className="mt-12">
                <ProductCards products={products.slice(0,visibleProducts)} ></ProductCards>
            </div>
            {/* load more product btn */}
            <div className="product__btn">
                {
visibleProducts< products.length &&(
    <button className="btn" onClick={loadMoreProducts}>Load More</button>
)
                }
            </div>
        </section>
    )
}

export default TrendingProducts