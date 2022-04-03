import ListaPeliculas from "./ListaPeliculas";
import useFetchApp from "../hooks/useFetchApp";
import "../App.scss";
import Carrusel from "./Carrusel";
import Loader from "./Loader";
import CarruselDos from "./CarruselDos";
import { useContext } from "react";
import Context from "../context/Context";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const SeccionPrincipal = () => {
	const { datos: peliculas, cargando } = useFetchApp("","movie", "popular");
	const { datos: mejorPuntuadas, cargando: cargandoMejorPuntadas } =
		useFetchApp("","movie", "top_rated");
	const { datos: peliculasTendencia, cargando: cargandoTendencia } = useFetchApp(
		"trending",
		"movie",
		"week"
	);
	const context = useContext(Context);
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
						mensaje="Películas populares"
						info={peliculas}
						cargando={cargandoGeneral}
					/>
					<Container maxWidth="xl" sx={{ bgcolor: "#221942", mb: 5 , display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center",p:5}}>
						<Typography
							variant="h3"
							gutterBottom
						>
							Películas mejor puntuadas
						</Typography>
						<ListaPeliculas
							titulo="Películas mejor puntuadas"
							info={mejorPuntuadas}
							cargando={cargandoGeneral}
						/>
					</Container>

					
				</>
			)}
		</div>
	);
};
export default SeccionPrincipal;
