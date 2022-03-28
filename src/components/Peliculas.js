import "./PeliculaSeries.scss";
import useFetchApp from "../hooks/useFetchApp";
import Cards from "./Cards";
const Peliculas = ({ mensaje }) => {
	// const [peliculas, setPeliculas] = useState([]);
	// useEffect(() => {
	// 	fetch(
	// 		`https://api.themoviedb.org/3/movie/${url}?api_key=457fa7dd417d06a0e15d7fe61f662df1`
	// 	)
	// 		.then((res) => res.json())
	// 		.then((data) => setPeliculas(data.results));
	// }, []);
	const peliculas = useFetchApp("movie", "popular");
	console.log("peliculas", peliculas);
	return (
		<>
			<h1>{mensaje}</h1>
			<div className="container">
				{peliculas.map(pelicula => (
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
