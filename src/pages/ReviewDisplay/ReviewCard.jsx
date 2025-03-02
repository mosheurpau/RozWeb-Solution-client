import { FaStar } from 'react-icons/fa'; // For displaying stars in the rating

const ReviewCard = ({ review }) => {
  return (
    <div className="text-white shadow-lg rounded-lg p-6  mx-auto border-2">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={review.img}
          alt="User Avatar"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h2
            style={{ fontFamily: 'Dancing Script, cursive' }}
            className="lg:text-2xl text-xl text-center font-bold text-[#6582F6]">
            {review.userName}
          </h2>
          <div className="flex items-center">
            {Array.from({ length: review.rating }, (_, i) => (
              <FaStar key={i} className="text-yellow-500" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-white">{review.comment}</p>
    </div>
  );
};
export default ReviewCard;
