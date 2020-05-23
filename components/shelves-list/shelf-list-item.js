const ShelfListItem = ({ title, category }) => {
  return (
    <div className="w-10">
      Shelf ({title}, {category})
    </div>
  );
};

export default ShelfListItem;
