import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
const CarruselDos = ({ mensaje, info }) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<div>
			<Typography sx={{ color: "white" }} variant="h2" gutterBottom>
				{mensaje}
			</Typography>
			<Slider {...settings}>
				{info.map((elemento) => (
					<Card
						sx={{
							border: 1,
							width: "100%",
							height: "100vh",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							backgroundImage: `url("https://image.tmdb.org/t/p/original/${elemento.poster_path}")`,
							backgroundRepeat: "no-repeat",
							backgroundSize: "cover",
							backgroundPosition: "center",
							// filter:"brightness(50%)"
							/// no me gusta
						}}
					>
						<CardContent
							sx={{
								display: "flex",
								height: "500px",
								width: "900px",
							}}
						>
							<CardMedia
								component="img"
								image={`https://image.tmdb.org/t/p/w500/${elemento.poster_path}`}
								alt={elemento.title}
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
									{elemento.title}
								</Typography>
								<Typography variant="body1" gutterBottom>
									{elemento.overview}
								</Typography>
							</CardContent>
						</CardContent>
					</Card>
				))}
			</Slider>
		</div>
	);
};

export default CarruselDos;