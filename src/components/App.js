import PaintingList from './PaintingList';
import paintings from './paintings.json';
import Section from './Section';
export const App = () => {
  return (
    <div>
      <Section title="Топ недели">
        <PaintingList items={paintings} />
        <PaintingList items={paintings} />
      </Section>

      <Section title="Лучшее ">
        <PaintingList items={paintings} />
      </Section>
    </div>
  );
};
