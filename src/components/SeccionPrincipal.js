
import Peliculas from "./Peliculas";
import Series from "./Series";
import ListaMejorPuntuadas from "./ListaMejorPuntuadas";
import "./PeliculaSeries.scss";
const SeccionPrincipal = () => {
	return (
		<div className="home">
			<h2>Seccion Principal</h2>
			<Peliculas mensaje="Peliculas populares" url="popular" />
			<Series mensaje="Series populares" url="popular" />
			{/* cambiar el fetch y agregar carrusel arriba */}
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
