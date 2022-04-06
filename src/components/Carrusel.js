import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Context from "../context/Context";

const Carrusel = ({ mensaje, info }) => {
	const context = useContext(Context);
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<Container
			maxWidth="xl"
			sx={{
				bgcolor: context.modoClaro ? "modo-claro" : "modo-oscuro",
				mb: 5,
				p: 5,
			}}
		>
			<Box sx={{ display: "flex", alignItems: "center",p:2 }}>
				<Typography variant="h3">{mensaje}</Typography>
				<Link
					style={{
						textDecoration: "none",
						color: "white",
					}}
					to="/populares"
				>
					<Fab
						size="small"
						color="secondary"
						aria-label="ir a películas populares"
						sx={{ml:3}}
					>
						<ArrowForwardIosIcon />
					</Fab>
				</Link>
			</Box>

			<Slider {...settings}>
				{info.map((elemento) => (
					<Link
						style={{
							textDecoration: "none",
							color: "#9f86c0",
						}}
						to={`/movie/${elemento.id}`}
						key={elemento.id}
					>
						<Cards
							titulo={elemento.title}
							imagen={elemento.poster_path}
						/>
					</Link>
				))}
			</Slider>
		</Container>
	);
};
export default Carrusel;
