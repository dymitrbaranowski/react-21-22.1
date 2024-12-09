import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import paintings from './components/paintings.json';

// const data = paintings[0];
// const data2 = paintings[1];

function Painting({ url, title, profileUrl, author, price, quantity }) {
  // const { url, title, profileUrl, author, price, quantity } = props;
  return (
    <div>
      <img src={url} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={profileUrl}>{author}</a>
      </p>
      <p>Цена: {price} кредитов</p>
      <p>Доступность:{quantity < 10 ? 'заканчивается' : 'есть в наличии'}</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
}

// ReactDOM.render(painting, document.querySelector('#root'));

const painting = paintings[1];

ReactDOM.createRoot(document.getElementById('root')).render(
  // <Painting
  //   url={painting.url}
  //   title={painting.title}
  //   author={painting.author.tag}
  //   profileUrl={painting.author.url}
  //   price={painting.price}
  // />
  <React.StrictMode>{<App />}</React.StrictMode>
);
