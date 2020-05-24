import ShelfListItem from './shelf-list-item';

const ShelvesList = ({ shelves = [] }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 w-full">
      {shelves.map((shelf) => (
        <ShelfListItem key={shelf.id} {...shelf} />
      ))}
    </div>
  );
};

export default ShelvesList;
