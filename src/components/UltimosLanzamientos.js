import "../App.scss";
import { Link } from "react-router-dom";
import useFetchApp from "../hooks/useFetchApp";
import Cards from "./Cards";
import Loader from "./Loader";
import { useState } from "react";
import Paginado from "./Paginado";
const UltimosLanzamientos = () => {
	const [page, setPage] = useState(1);
		const { datos: peliculas, cargando , totalPages} = useFetchApp(
			"",
			"movie",
			"now_playing",
			page
		);
			const handleChange = (event, value) => {
				setPage(value);
			};
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
								imagen={`https://image.tmdb.org/t/p/w300/${pelicula.poster_path}`}
							/>
						</Link>
					))}
					<Paginado
						handleChange={handleChange}
						page={page}
						totalPages={totalPages > 500 ? 500 : totalPages}
					/>
				</div>
			)}
		</>
	);
};
export default UltimosLanzamientos;
