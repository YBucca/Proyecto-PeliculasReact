import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Cards from "./Cards";
import { Link } from "react-router-dom";

const Buscar = () => {
	const [valorDelInput, setValorDelInput] = useState(""); // para hacer click en el boton enviar
	const [peliculas, setPeliculas] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams({ query: "" });
	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=457fa7dd417d06a0e15d7fe61f662df1&query=${searchParams.get(
				"query"
			)}`
		)
			.then((res) => res.json())
			.then((data) => {
				if (data.results) {
					setPeliculas(data.results);
				}
				// para que al buscar algo que no sea de la api , no se actualice y se borre todo. hacer una imagen de error
			});
	}, [searchParams]);

	const handleChange = (e) => {
		setValorDelInput(e.target.value);
	};
	const handleClick = (e) => {
		setSearchParams({
			query: valorDelInput,
		});
	};
	return (
		<div className="buscador">
			Buscar peliculas
			<input
				type="text"
				onChange={handleChange}
				value={valorDelInput}
			></input>
			<button onClick={handleClick}>Buscar</button>
			{peliculas.map((pelicula) => (
				<Link
					style={{
						textDecoration: "none",
						color: "#9f86c0",
					}}
					to={`/movie/${pelicula.id}`}
					key={pelicula.id}
				>
					<Cards
						titulo={pelicula.title}
						imagen={`https://image.tmdb.org/t/p/w300/${pelicula.poster_path}`}
					/>
				</Link>
			))}
		</div>
	);
};

export default Buscar;
