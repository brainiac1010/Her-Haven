import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetReviewsByUserIdQuery } from "../../../../redux/features/reviews/reviews.Api";
import { useNavigate } from "react-router-dom";

const UserReviews = () => {
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth);
  const { data: reviews, error, isLoading } = useGetReviewsByUserIdQuery(user?.id);

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-red-600"></div>
      </div>
    );

  if (error) return <div className="text-center text-red-600">Failed to load user reviews</div>;
  const handelCartClick = () => {
    navigate('/shop')
  }
  return (
    <div className="py-6 px-4 md:px-8 lg:px-16">
      <h2 className="text-2xl font-bold mb-8 text-center">Your Given Reviews</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {reviews &&
          reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 border border-gray-300 cursor-pointer hover:scale-105 transition-transform duration-200 overflow-hidden break-words"
            >
              <p className="text-lg font-semibold mb-2">Rating: {review?.rating}</p>
              <p className="mb-2">
                <strong>Comment:</strong> {review?.comment}
              </p>
              <p className="text-sm text-gray-500 break-words">
                <strong>Product Id:</strong> {review?.productId}
              </p>
              <p className="text-sm text-gray-500">
                <strong>Date:</strong> {new Date(review?.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        <div
          onClick={handelCartClick}
          className="bg-gray-100 text-black flex  items-center justify-center rounded-lg p-6 border cursor-pointer hover:bg-primary hover:text-white transition-all duration-200">
          <span>+</span>
          <p>Add New Reviews</p>
        </div>
      </div>
    </div>
  );
};

export default UserReviews;
