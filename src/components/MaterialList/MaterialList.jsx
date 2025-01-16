//import { Material } from '../Material/Material';

export const Material = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <p>
            <b>Название: </b>
            {item.title}
          </p>
          <p>
            <b>Ссылка: </b> {item.link}
          </p>
          <button type="button" onClick={() => onDelete(item.id)}>
            Удалить
          </button>
          <hr />
        </li>
      ))}
    </ul>
  );
};
