const RatingsPicker = ({ rating, onClick }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="flex items-center mt-1 scale-150 justify-center">
      {stars.map((star) => {
        const isActive = star <= rating;

        return (
          <svg
            key={star}
            onClick={() => onClick(star)}
            className={`w-12 h-12 mr-1 cursor-pointer fill-current ${
              isActive ? 'text-yellow-600' : 'text-gray-200 hove:text-yellow-600'
            }`}
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        );
      })}
    </div>
  );
};

export default RatingsPicker;
