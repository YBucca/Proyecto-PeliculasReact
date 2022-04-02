import ListaPeliculas from "./ListaPeliculas";
import useFetchApp from "../hooks/useFetchApp";
import "../App.scss";
import Carrusel from "./Carrusel";
import Loader from "./Loader";
import CarruselDos from "./CarruselDos";

const SeccionPrincipal = () => {
	const { datos: peliculas, cargando } = useFetchApp("","movie", "popular");
	const { datos: mejorPuntuadas, cargando: cargandoMejorPuntadas } =
		useFetchApp("","movie", "top_rated");
	const { datos: peliculasTendencia, cargando: cargandoTendencia } = useFetchApp(
		"trending",
		"movie",
		"week"
	);
	const cargandoGeneral = cargando || cargandoMejorPuntadas || cargandoTendencia;

	return (
		<div className="home">
			<Loader cargando={cargandoGeneral} />
			
			{!cargandoGeneral && (
				<>
					<CarruselDos
						mensaje="Peliculas que son Tendencia"
						info={peliculasTendencia}
						cargando={cargandoGeneral}
					/>
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
			)}
		</div>
	);
};
export default SeccionPrincipal;
