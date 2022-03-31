import "../App.scss";
import { Link } from "react-router-dom";
import useFetchApp from "../hooks/useFetchApp";
import Cards from "./Cards";
import Loader from "./Loader";
const UltimosLanzamientos = () => {
		const { datos: peliculas, cargando } = useFetchApp(
			"",
			"movie",
			"upcoming"
		);

	return (
		<>
			<Loader cargando={cargando} />
			{!cargando && (
				<div className="container">
					{peliculas.map((pelicula) => (
						<Link
							to={`/movie/${pelicula.id}`}
							key={pelicula.id}
							style={{
								textDecoration: "none",
								color: "#9f86c0",
							}}
						>
							<Cards
								titulo={pelicula.title}
								imagen={pelicula.poster_path}
							/>
						</Link>
					))}
				</div>
			)}
		</>
	);
};
export default UltimosLanzamientos;
