import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import UltimosLanzamientos from "./components/UltimosLanzamientos";
import Populares from "./components/Populares";
import SeccionPrincipal from "./components/SeccionPrincipal";
import Buscar from "./components/Buscar";
import Footer from "./components/Footer";
import Detalle from "./components/Detalle";
import Error from "./components/Error";

const App = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" element={<SeccionPrincipal />} />
				<Route
					path="/ultimos-lanzamientos"
					element={<UltimosLanzamientos />}
				/>
				{/* aca hacer dos componenetes diferentes para ultimos lanzamientos y otro para populares por mas que ambos muentren mismo info con diferentes fetch */}
				<Route path="/populares" element={<Populares />} />
				<Route path="/movie/:idPelicula" element={<Detalle />} />
				<Route path="/busqueda" element={<Buscar />} />
				<Route path="*" element={<Error />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};
export default App;
