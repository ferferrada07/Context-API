import './styles.css'

// Components
import Navbar from "./assets/components/Navbar";

//Context
import PhotosContextProvider from "./assets/context/Usecontext";

// Hooks
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Views
import Home from "./assets/views/Home";
import Favoritos from "./assets/views/Favoritos";

export default function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<PhotosContextProvider>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/favoritos" element={<Favoritos />} />
					</Routes>
				</PhotosContextProvider>
			</BrowserRouter>
		</div>
	);
}
