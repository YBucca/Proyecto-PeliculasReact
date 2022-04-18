import ListaItem from "./ListaItem";
import Grid from "@mui/material/Grid";

const ListaPeliculas = ({ info }) => {
	return (
		<Grid container>
			<Grid
				item
				xs={12}
				md={12}
				sx={{
					height: "500px",
					backgroundColor: "#9f86c0",
					overflowY: "scroll",
					pl: 5,
					pr: 5,
				}}
			>
				{info.map((elemento) => (
					<ListaItem
						key={elemento.id}
						titulo={elemento.title}
						imagen={`https://image.tmdb.org/t/p/w300/${elemento.poster_path}`}
						link={elemento.id}
						puntaje={elemento.vote_average}
					/>
				))}
			</Grid>
		</Grid>
	);
};

export default ListaPeliculas;
