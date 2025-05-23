import { React, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { restaurants } from '../materials/datas.js';

console.log(restaurants);

const content = restaurants.map(({id, name, menu, reviews}) => {
	const menuList = menu.map(({id, name, price}) =>
		<li key={id}>{name} ({price})</li>
	);
	const reviewsList = reviews.map(({id, user, text, rating}) =>
		<li key={id}>
			{user} ({rating}): {text}
		</li>
	);
	return <div key={id}>
		<h2>{name}</h2>
		<ul>
			<h3>Меню</h3>
			{menuList}
		</ul>
		<ul>
			<h3>Отзывы</h3>
			{reviewsList}
		</ul>
	</div>;
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
	{content}
  </StrictMode>,
);
