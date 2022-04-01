import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
const Detalle = () => {
	const params = useParams();
	const [pelicula, setPelicula] = useState([]);
	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${params.idPelicula}?api_key=457fa7dd417d06a0e15d7fe61f662df1&language=es`
		)
			.then((res) => res.json())
			.then((data) => setPelicula(data));
	}, []);
	console.log(pelicula);
	return (
		<div className="Detalle">
			<Card
				sx={{
					border: 1,
					width: "100%",
					height: "100vh",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					backgroundImage: `url("https://image.tmdb.org/t/p/original/${pelicula.poster_path}")`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "center",
					/// no me gusta
				}}
			>
				<CardContent
					sx={{ display: "flex", height: "500px",width:"900px"}}
				>
					<CardMedia
						component="img"
						image={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
						alt={pelicula.title}
						sx={{ width: "300px" }}
					/>
					<CardContent
						sx={{
							display: "flex",
							flexDirection: "column",
							width: "500px",
							bgcolor: "white",
							opacity: 0.2,
							//ver
						}}
					>
						<Typography variant="h4" gutterBottom>
							{pelicula.title}
						</Typography>
						<Typography variant="body1" gutterBottom>
							{pelicula.overview}
						</Typography>
						<Typography variant="body1" gutterBottom>
							<a
								style={{
									textDecoration: "none",
									color: "violet",
								}}
								href={pelicula.homepage}
								target="_blank"
							>
								{pelicula.homepage}
							</a>
						</Typography>
						{pelicula?.genres?.map((elemento) => (
							<Typography variant="body1" gutterBottom>
								{elemento.genres}
							</Typography>
						))}
					</CardContent>
				</CardContent>
			</Card>
		</div>
	);
};

export default Detalle;
