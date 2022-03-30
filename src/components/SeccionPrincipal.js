import ListaPeliculas from "./ListaPeliculas";
import useFetchApp from "../hooks/useFetchApp";
import "../App.scss";
import Carrusel from "./Carrusel";
import Loader from "./Loader";

const SeccionPrincipal = () => {
	const { datos: peliculas, cargando } = useFetchApp("movie", "popular");
	const { datos: mejorPuntuadas, cargando: cargandoMejorPuntadas } =
		useFetchApp("movie", "top_rated");
	const cargandoGeneral = cargando || cargandoMejorPuntadas;

	return (
		<div className="home">
			<h2>Seccion Principal</h2>
			<Loader cargando={cargandoGeneral} />
			{/* <Carrusel mensaje="Peliculas que son tendencia" info={peliculasTendencia}  />  */}
			{/* ver url trending/movie/week */}
		{!cargandoGeneral && 
		<>
			<Carrusel
				mensaje="Peliculas populares"
				info={peliculas}
				cargando={cargandoGeneral}
			/>

			<ListaPeliculas
				titulo="Peliculas mejor puntuadas"
				info={mejorPuntuadas}
				cargando={cargandoGeneral}
			/>
		</>
		}
		</div>
	);
};
export default SeccionPrincipal;
