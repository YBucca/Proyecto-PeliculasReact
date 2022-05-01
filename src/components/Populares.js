import "../App.scss";
import { Link } from "react-router-dom";
import useFetchApp from "../hooks/useFetchApp";
import Cards from "./Cards";
import Loader from "./Loader";
import Paginado from "./Paginado";
import { useState, useContext } from "react";
import { cambioLenguaje } from "../utils/variables";
import Context from "../context/Context";
import Typography from "@mui/material/Typography";
const Populares = () => {
	const contexto = useContext(Context);
	const [page, setPage] = useState(1);
	const {
		datos: peliculas,
		cargando,
		totalPages,
	} = useFetchApp("", "movie", "popular", page);
	const handleChange = (event, value) => {
		setPage(value);
	};
	return (
		<div className="section-flex">
			<Typography variant="h3" gutterBottom sx={{mt:4}}>
				{cambioLenguaje[contexto.lenguaje].navPopulares}
			</Typography>
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
				</div>
			)}
			<Paginado
				handleChange={handleChange}
				page={page}
				totalPages={totalPages > 500 ? 500 : totalPages}
			/>
		</div>
	);
};
export default Populares;
