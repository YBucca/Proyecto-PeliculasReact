
import ListaMejorPuntuadas from "./ListaMejorPuntuadas";
import useFetchApp from "../hooks/useFetchApp";
import "./PeliculaSeries.scss";
import Carrusel from "./Carrusel";


const SeccionPrincipal = () => {
	const peliculas = useFetchApp("movie", "popular");
	const series = useFetchApp("tv", "popular");
	return (
		<div className="home">
			<h2>Seccion Principal</h2>
			<Carrusel mensaje="Peliculas populares" info={peliculas}  />
			<Carrusel mensaje="Series populares" info={series} />
	
			<ListaMejorPuntuadas
				titulo="Peliculas mejor puntuadas"
				url="top_rated"
				tipo="movie"
			/>
			<ListaMejorPuntuadas
				titulo="Series mejor puntuadas"
				url="top_rated"
				tipo="tv"
			/>
		</div>
	);
};
export default SeccionPrincipal;
