import { Link, useParams } from 'react-router-dom';
import RatingStar from '../../../RatingStar';
import { useDispatch } from "react-redux"
import { useFetchProductByIdQuery } from '../../../../redux/features/products/products.Api';
import { addToCart } from '../../../../redux/features/cart/cartSlice';
import ReviewsCard from '../reviews comment/ReviewsCard';

const SingleProduct = () => {
    const { id } = useParams();
    console.log("Product ID:", id);

    const dispatch = useDispatch();

    const { data, error, isLoading } = useFetchProductByIdQuery(id);
    // console.log(data)
    const SingleProduct = data?.product || {};
    // console.log(SingleProduct)
    const productReviews = data?.reviews || [];
    // console.log(productReviews);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }


    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Error Loading Product Details.</p>
    return (
        <>
            <section className='section__container bg-primary-light'>
                <h2 className='section__header capitalize'>Single Product Page</h2>
                <div className='section__subheader space-x-2'>


                    <span className='hover:text-primary'>
                        <Link to='/'>Home</Link>
                    </span>

                    <i className="ri-arrow-right-s-line"></i>
                    <span className='hover:text-primary'>
                        <Link to='/shop'>Shop</Link>
                    </span>


                    <i className="ri-arrow-right-s-line"></i>
                    <span className='hover:text-primary'>
                        {SingleProduct.name}
                    </span>

                </div>
            </section>


            <section className='section__container mt-8'>
                <div className='flex flex-col items-center md:flex-row gap-8'>
                    {/* product  img */}
                    <div className='md:w-1/2 w-full'>
                        <img className='rounded-md w-full h-auto' src={SingleProduct?.image} alt="" />
                    </div>
                    <div className='md:w-1/2 w-full'>
                        <h3 className='text-2xl font-semibold mb-4'>{SingleProduct?.name}</h3>
                        <p className="text-xl text-primary mb-4">
                            ${SingleProduct?.price}
                            {SingleProduct?.oldPrice && (
                                <span className="ml-2">
                                    <s>${SingleProduct?.oldPrice}</s>
                                </span>
                            )}
                        </p>

                        <p className='text-gray-700 mb-4'>{SingleProduct?.description}</p>

                        {/* aditional product info */}

                        <div>

                            <div className='flex flex-col space-y-2'><p> <strong>Category:</strong> {SingleProduct.category}</p>
                                <p> <strong>Color:</strong> {SingleProduct?.color}</p>

                                <div className='flex gap-1 items-center'>
                                    <strong>Rating: </strong>
                                    <RatingStar rating={SingleProduct?.rating}></RatingStar>
                                </div></div>


                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleAddToCart(SingleProduct)

                                }}
                                className='mt-6 px-6 py-3 bg-primary text-white rounded-md'>Add to cart </button>

                        </div>

                    </div>

                </div>
            </section>

            {/* display review  */}

            <section className='section__container mt-8'>
              
             <ReviewsCard productReviews={productReviews}></ReviewsCard>
            </section>

        </>
    );
};

export default SingleProduct;
