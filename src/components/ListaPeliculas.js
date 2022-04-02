import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ListaItem from "./ListaItem";

const ListaPeliculas = ({ titulo, info }) => {
	return (
		<>
			<Box
				sx={{
					border: "1px solid grey",
					m: 10,
					p: 10,
					backgroundColor: "#9f86c0",
				}}
			>
				<Typography variant="h3" gutterBottom color="text.secondary">
					{titulo}
				</Typography>

				{info.map((elemento) => (
					<ListaItem
						key={elemento.id}
						titulo={elemento.title}
						imagen={`https://image.tmdb.org/t/p/w300/${elemento.poster_path}`}
						link={elemento.id}
					/>
				))}
			</Box>
		</>
	);
};

export default ListaPeliculas;
