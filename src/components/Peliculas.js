import "../App.scss";
import useFetchApp from "../hooks/useFetchApp";
import Cards from "./Cards";
const Peliculas = ({ mensaje }) => {
	const peliculas = useFetchApp("movie", "upcoming");

	return (
		<>
			<h1>{mensaje}</h1>
			<div className="container">
				{peliculas.map((pelicula) => (
					<Cards
						key={pelicula.id}
						titulo={pelicula.title}
						imagen={pelicula.poster_path}
					/>
				))}
			</div>
		</>
	);
};
export default Peliculas;
