import ShelfListItem from './shelf-list-item';

const ShelvesList = ({ shelves = [] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
      {shelves.map((shelf) => (
        <ShelfListItem key={shelf.id} {...shelf} />
      ))}
    </div>
  );
};

export default ShelvesList;
