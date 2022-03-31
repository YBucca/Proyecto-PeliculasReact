import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ListaItem from "./ListaItem";
import { Link } from "react-router-dom";

const ListaPeliculas = ({ titulo, info }) => {
	return (
		<>
			<Box
				sx={{
					border: "1px solid grey",
					m: 10,
					p: 10,
				}}
			>
				<Typography variant="h3" gutterBottom>
					{titulo}
				</Typography>

				{info.map((elemento) => (
					<Link
						to={`/movie/${elemento.id}`}
						key={elemento.id}
						style={{
							textDecoration: "none",
							color: "black",
						}}
					>
						<ListaItem
							titulo={elemento.title}
							imagen={`https://image.tmdb.org/t/p/w300/${elemento.poster_path}`}
							// link={`/${elemento.id}`}
							// link para rutas de detalle se lo debo agregar al boton con la flecha
						/>
					</Link>
				))}
			</Box>
		</>
	);
};

export default ListaPeliculas;
