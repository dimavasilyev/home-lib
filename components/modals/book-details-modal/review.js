const Review = ({ comment, rating }) => {
  return (
    <div className="flex">
      {comment && <div className="italic mr-4">- {comment}</div>}
      <span className="text-lg">{rating}</span>
      <svg className="w-6 h-6 mr-1 cursor-pointer fill-current text-yellow-600" viewBox="0 0 20 20">
        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
      </svg>
    </div>
  );
};

export default Review;
