//import { Material } from '../Material/Material';

export const MateriaList = ({ items, onDelete, onUpdate }) => {
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

          <button
            type="button"
            onClick={() => onUpdate({ id: item.id, title: Date.now() })}
          >
            Редактировать
          </button>
          <hr />
        </li>
      ))}
    </ul>
  );
};
//
