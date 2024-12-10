import PaintingList from './PaintingList';
import paintings from './paintings.json';

export const App = () => {
  return (
    <div>
      <PaintingList items={paintings} />
    </div>
  );
};
