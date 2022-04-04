import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

const CarruselDos = ({ info }) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
	};
	return (
		<Container maxWidth="xl" sx={{ bgcolor: "transparent", mb: 5 }}>
		
			<Slider {...settings}>
				{info.map((elemento) => (
					<>
						<Card
							key={elemento.id}
							sx={{
								border: 1,
								height: "500px",
								display: "flex",
								justifyContent: "center",
								alignItems: "flex-end",
								backgroundImage: `url("https://image.tmdb.org/t/p/original/${elemento.poster_path}")`,
								backgroundRepeat: "no-repeat",
								backgroundSize: "cover",
								backgroundPosition: "center",
							}}
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
									gutterBottom
									sx={{ color: "black" }}
								>
									{elemento.title}
								</Typography>
								<Typography variant="body1" gutterBottom>
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
											VER MAS...
										</Button>
									</Link>
								</CardActions>
							</CardContent>
						</Card>
					</>
				))}
			</Slider>
		</Container>
	);
};

export default CarruselDos;
