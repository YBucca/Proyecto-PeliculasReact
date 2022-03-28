import './App.scss';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar"
import Peliculas from "./components/Peliculas"
import SeccionPrincipal from "./components/SeccionPrincipal";
import Buscar from "./components/Buscar";
import Footer from "./components/Footer"

const App = () => {
return (
	<BrowserRouter>
		<NavBar />
		<Routes>
			<Route path="/" element={<SeccionPrincipal />} />
			<Route path="/ultimos-lanzamientos" element={<Peliculas />} />
			{/* aca hacer dos componenetes diferentes para ultimos lanzamientos y otro para populares por mas que ambos muentren mismo info con diferentes fetch */}
			<Route path="/populares" element={<Peliculas />} />
			{/* <Route path="/peliculas/:idPelicula" element = {< DetallePelicula />} /> */}
			<Route path="/busqueda" element={<Buscar />} />
		</Routes>
		< Footer />
	</BrowserRouter>
);
}
export default App;
