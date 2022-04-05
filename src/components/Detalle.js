import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
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
	console.log("detalle", pelicula);
	return (
		<div className="detalle">
			<Box
				sx={{
					height: "100%",
					width: "100%",
					position: "absolute",
					backgroundColor: "black",
					opacity: 0.5,
				}}
			/>
			<Card
				sx={{
					border: 1,
					width: "100%",
					height: "100vh",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					backgroundImage: `url("https://image.tmdb.org/t/p/original/${pelicula.backdrop_path}")`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<CardContent
					sx={{
						display: "flex",
						height: "500px",
						width: "1000px",
						position: "relative",
						zIndex: 5,
						color: "white",
					}}
				>
					<CardMedia
						component="img"
						image={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
						alt={pelicula.title}
						sx={{ width: "400px", height: "600px" }}
					/>
					<CardContent
						sx={{
							display: "flex",
							flexDirection: "column",
							width: "600px",
						}}
					>
						<Typography variant="h4" gutterBottom>
							{pelicula.title}
						</Typography>
						<Stack spacing={1}>
							<Rating
								name="half-rating-read"
								defaultValue={pelicula.vote_average}
								precision={0.5}
								readOnly
							/>
							{/* VER PORQUE NO FUNCIONA CON MALE*/}
						</Stack>
						<Typography variant="body1" gutterBottom>
							Duración : {pelicula.runtime} minutos.
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
						<Stack spacing={1} direction="row">
							<Typography variant="body1" gutterBottom>
								Género:
							</Typography>
							{pelicula?.genres?.map((elemento) => (
								<Typography variant="body1" gutterBottom>
									{elemento.name}
								</Typography>
							))}
						</Stack>
					</CardContent>
				</CardContent>
			</Card>
		</div>
	);
};

export default Detalle;
