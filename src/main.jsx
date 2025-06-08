import { React, StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./components/app.jsx";
import "./reset.css";
import "./global.css";


createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>,
);