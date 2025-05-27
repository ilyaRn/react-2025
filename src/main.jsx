import { React, StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./components/app.jsx";


createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>,
);

// Компоненты - блюда, меню, отзывы
// состояние по id, нейминг соответсвуте тому что содержится внутри переменной
// компоненты - это папки
// добавить проверки на пустой рендер