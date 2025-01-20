
import { useState } from "react"
import commentatorIcon from "../../../../assets/avatar.png"
import { formateDate } from "../../../../utils/formateDate"
import RatingStar from "../../../RatingStar"
import PostAReview from "./PostAReview"

const ReviewsCard = ({ productReviews }) => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const reviews = productReviews || []
    console.log(reviews)

    const handleOpenReviewModel = () => {
        setIsModalOpen(true)
    }

    const handleCloseReviewModel = () => {
        setIsModalOpen(false)
    }
    return (
        <div className="my-6 bg-white p-8">

            <div>
                {
                    reviews.length > 0 ? (<div>

                        <h3 className="text-lg font-medium">All Comments...</h3>
                        <div>
                            {
                                reviews.map((review, index) => (
                                    <div key={index} className="mt-4">
                                        <div className="flex gap-4 items-center">
                                            <img src={commentatorIcon} alt="" className="size-14" />
                                            <div className="space-y-1">
                                                <p className="text-lg font-medium underline capitalize underline-offset-4 text-purple-500">{review?.userId?.username}</p>
                                                <p className="text-[12px] italic">{formateDate(review?.updatedAt)}</p>
                                                <RatingStar rating={review?.rating}></RatingStar>
                                            </div>

                                            <div className="text-gray-600 mt-5 border p-8">
                                                <p className="md:w-4/5">{review?.comment}</p>
                                            </div>

                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>) : <p>No reviews yes!</p>
                }
            </div>

            {/* review  button added */}
            <div className="mt-12">
                <button
                    onClick={handleOpenReviewModel}
                    className="px-6 py-3 bg-primary text-white rounded-md">Add A Review</button>
            </div>
            {/* review modal */}
            <PostAReview isModalOpen={isModalOpen} handleClose={handleCloseReviewModel}></PostAReview>

        </div>
    )
}

export default ReviewsCard