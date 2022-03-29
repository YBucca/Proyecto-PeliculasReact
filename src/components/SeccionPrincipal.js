
import ListaPeliculas from "./ListaPeliculas";
import useFetchApp from "../hooks/useFetchApp";
import "../App.scss";
import Carrusel from "./Carrusel";


const SeccionPrincipal = () => {
	const peliculasPopulares = useFetchApp("movie", "popular");
	return (
		<div className="home">
			<h2>Seccion Principal</h2>
			{/* <Carrusel mensaje="Peliculas que son tendencia" info={peliculasTendencia}  />  */}
			{/* ver url trending/movie/week */}
			<Carrusel mensaje="Peliculas populares" info={peliculasPopulares} />

			<ListaPeliculas
				titulo="Peliculas mejor puntuadas"
				url="top_rated"
				tipo="movie"
			/>
		
		</div>
	);
};
export default SeccionPrincipal;
