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
import Context from "./context/Context";
import { useState } from "react";

const App = () => {
	const [modoClaro, setModoClaro] = useState(false);

	const context = {
		modoClaro: modoClaro,
		setModoClaro: setModoClaro,
	};
	return (
		<BrowserRouter>
			<Context.Provider value={context}>
				<div className={modoClaro ? "modo-claro" : "modo-oscuro"}>
					<NavBar />
					<Routes>
						<Route path="/" element={<SeccionPrincipal />} />
						<Route
							path="/ultimos-lanzamientos"
							element={<UltimosLanzamientos />}
						/>
						<Route path="/populares" element={<Populares />} />
						<Route
							path="/movie/:idPelicula"
							element={<Detalle />}
						/>
						<Route path="/busqueda" element={<Buscar />} />
						<Route path="*" element={<Error />} />
					</Routes>
					<Footer />
				</div>
			</Context.Provider>
		</BrowserRouter>
	);
};
export default App;
