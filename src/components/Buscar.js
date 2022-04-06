import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Cards from "./Cards";
import Paginado from "./Paginado";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { FormControl, InputLabel, Input, Button } from "@mui/material";
import useFetchApp from "../hooks/useFetchApp";
import { useContext } from "react";
import Context from "../context/Context";
const Buscar = () => {
	const context = useContext(Context);
	const [page, setPage] = useState(1);
	const [valorDelInput, setValorDelInput] = useState("");
	const [peliculas, setPeliculas] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams({ query: "" });
	const [totalPaginas, setTotalPaginas] = useState(1)
	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=457fa7dd417d06a0e15d7fe61f662df1&query=${searchParams.get(
				"query"
			)}&page=${page}`
		)
			.then((res) => res.json())
			.then((data) => {
				if (data.results) {
					setPeliculas(data.results);
					setTotalPaginas(data.total_pages);
				} else {
				}
				// para que al buscar algo que no sea de la api , no se actualice y se borre todo. hacer una imagen de error
			});
	}, [searchParams, page]);
	const handleChange = (event, value) => {
		setPage(value);
	};
	const handleChangeInput = (e) => {
		setValorDelInput(e.target.value);
	};
	const handleClick = (e) => {
		setSearchParams({
			query: valorDelInput,
		});
	};
	return (
		<>
			<Grid
				container
				sx={{
					p: 3,
					bgcolor: context.modoClaro ? "transparent" : "#9f86c0",
				}}
			>
				<Grid item md={12}>
					<FormControl sx={{ width: "50%" }}>
						<InputLabel htmlFor="my-input">
							Ingresá una película
						</InputLabel>
						<Input
							id="buscador"
							aria-describedby="buscador-peliculas"
							onChange={handleChangeInput}
							value={valorDelInput}
						/>
					</FormControl>
					<Button
						onClick={handleClick}
						variant="contained"
						color="secondary"
						size="small"
						sx={{ m: 2 }}
					>
						Buscar
					</Button>
				</Grid>
			</Grid>
			<div className="buscador">
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
				<Paginado
					handleChange={handleChange}
					page={page}
					totalPages={totalPaginas > 500 ? 500 : totalPaginas}
				/>
			</div>
		</>
	);
};

export default Buscar;
