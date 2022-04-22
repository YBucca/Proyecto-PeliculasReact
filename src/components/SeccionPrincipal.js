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
import {
	cambioLenguaje
} from "../utils/variables";

const SeccionPrincipal = () => {
	const { datos: peliculas, cargando } = useFetchApp("","movie", "popular", 1);
	const { datos: mejorPuntuadas, cargando: cargandoMejorPuntadas } =
		useFetchApp("","movie", "top_rated", 1);
	const { datos: peliculasTendencia, cargando: cargandoTendencia } = useFetchApp(
		"trending",
		"movie",
		"week",
		1
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
						mensaje={cambioLenguaje[context.lenguaje].populares}
						info={peliculas}
						cargando={cargandoGeneral}
					/>
					<Container
						sx={{
							bgcolor: context.modoClaro
								? "modo-claro"
								: "#221942",
							mb: 5,
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							p: 5,
							border: "1px solid #221942",
						}}
					>
						<Typography variant="h3" gutterBottom sx={{mb:4}}>
							{cambioLenguaje[context.lenguaje].mejorPuntuadas}
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
