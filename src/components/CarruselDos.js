import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.scss";
import Slider from "react-slick";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { cambioLenguaje } from "../utils/variables";
import { useContext } from "react";
import Context from "../context/Context";

const CarruselDos = ({ info }) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
	};
	const contexto = useContext(Context);
	return (
		<Container
			maxWidth="xl"
			sx={{
				bgcolor: "transparent",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
			className="container-carruselDos"
		>
			<Slider {...settings}>
				{info.map((elemento) => (
					<div key={elemento.id}>
						<Card
							sx={{
								border: 1,
								height: "500px",
								display: "flex",
								justifyContent: "center",
								alignItems: "flex-end",
								// ojo que si no existe backgrop_path, esto rompe. aca deberias usar tu image-not-found con un condicional
								backgroundImage: `url("https://image.tmdb.org/t/p/original/${elemento.backdrop_path}")`,
								backgroundRepeat: "no-repeat",
								backgroundSize: "cover",
								backgroundPosition: "center",
							}}
							className="card-carruselDos"
						>
							<CardContent
								sx={{
									display: "flex",
									width: "600px",
									flexDirection: "column",
									justifyContent: "flex-end",
									alignItems: "center",
									position: "relative",
									zIndex: 6,
									color: "white",
								}}
							>
								<Box
									sx={{
										height: "100%",
										width: "100%",
										position: "absolute",
										backgroundColor: "white",
										opacity: 0.2,
									}}
								/>
								<Typography
									variant="h4"
								
									className="titulo-pelicula"
									sx={{ color: "black",fontWeight:"bold" }}
								>
									{elemento.title}
								</Typography>
								<Typography
									variant="body1"
									gutterBottom
									className="letra-responsive"
								>
									{elemento.overview}
								</Typography>
								<CardActions>
									<Link
										style={{
											textDecoration: "none",
											color: "#9f86c0",
										}}
										to={`/movie/${elemento.id}`}
									>
										<Button variant="contained">
											{
												cambioLenguaje[
													contexto.lenguaje
												].btnVerMas
											}
											...
										</Button>
									</Link>
								</CardActions>
							</CardContent>
						</Card>
					</div>
				))}
			</Slider>
		</Container>
	);
};

export default CarruselDos;
