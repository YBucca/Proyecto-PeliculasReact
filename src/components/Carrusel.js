import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

const Carrusel = ({ mensaje, info }) => {
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,
		// autoplay:true,
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
		<Container maxWidth="xl" sx={{ bgcolor: "#221942", mb:5}}>
			<Typography sx={{ color: "white" }} variant="h3" gutterBottom>
				{mensaje}
			</Typography>
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
