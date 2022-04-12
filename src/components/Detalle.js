import { useEffect, useState, useContext } from "react";
import Context from "../context/Context";
import { useParams } from "react-router-dom";
import "../App.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import Video from "./Video";
import { cambioLenguaje } from "../utils/variables";
const Detalle = () => {
	const params = useParams();
	const contexto = useContext(Context);
	const [pelicula, setPelicula] = useState([]);
	const [verVideo, setVerVideo] = useState(false);
	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${params.idPelicula}?api_key=457fa7dd417d06a0e15d7fe61f662df1&language=${contexto.lenguaje}`
		)
			.then((res) => res.json())
			.then((data) => setPelicula(data));
	}, [contexto.lenguaje]);

	const handleClickVerVideo = () => {
		setVerVideo(true);
	};
	const handleClickCerrarVideo = () => {
		setVerVideo(false);
	};

	return (
		<div className="detalle" key={pelicula.id}>
			{verVideo && (
				<Video handleClickCerrarVideo={handleClickCerrarVideo} />
			)}
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
					className="detalle-container"
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
						className="detalle-img"
					/>
					<CardContent className="detalle-info">
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
						</Stack>
						<Typography variant="body1" gutterBottom>
							{cambioLenguaje[contexto.lenguaje].duracion} :
							{pelicula.runtime}
							{cambioLenguaje[contexto.lenguaje].minutos}.
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
								{cambioLenguaje[contexto.lenguaje].genero}:
							</Typography>
							{pelicula?.genres?.map((elemento) => (
								<Typography
									variant="body1"
									gutterBottom
									key={elemento.id}
								>
									{elemento.name}
								</Typography>
							))}
						</Stack>
						<CardActions>
							<IconButton
								aria-label="ver trailer"
								onClick={handleClickVerVideo}
								sx={{
									color: "white",
									"&:hover": {
										color: "violet",
									},
								}}
							>
								<PlayCircleFilledWhiteIcon
									sx={{
										fontSize: 45,
										color: "white",
										"&:hover": {
											color: "violet",
										},
									}}
								/>
								Tráiler
							</IconButton>
						</CardActions>
					</CardContent>
				</CardContent>
			</Card>
		</div>
	);
};

export default Detalle;
