import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ListaItem from "./ListaItem";


const ListaMejorPuntuadas = ({ titulo, url, tipo }) => {
  const [mejorPuntuadas, setMejorPuntuadas]= useState([])
  useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/${tipo}/${url}?api_key=457fa7dd417d06a0e15d7fe61f662df1&language=es`
		)
			.then((res) => res.json())
			.then((data) => setMejorPuntuadas(data.results));
	}, [])

	return (
		<>
			<Box sx={{ border: "1px solid grey", m: 10, p: 10 }}>
				<Typography variant="h3" gutterBottom>
					{titulo}
				</Typography>
				{mejorPuntuadas.map((elemento) => (
					<ListaItem
						key={elemento.id}
						titulo={
							tipo == "movie" ? elemento.title : elemento.name
						}
						imagen={`https://image.tmdb.org/t/p/w300/${elemento.poster_path}`}
						link={`/${elemento.id}`} 
						// link para rutas de detalle
					/>
				))}
			</Box>
		</>
	);
};

export default ListaMejorPuntuadas;
