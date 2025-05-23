import { React, StrictMode } from "react";
import { createRoot } from "react-dom/client";


import { Header} from "./components/header.jsx";
import { Restaurants } from "./components/restaurants";
import { Footer } from "./components/footer.jsx";


createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Header />
		<Restaurants />
		<Footer />
	</StrictMode>,
);
