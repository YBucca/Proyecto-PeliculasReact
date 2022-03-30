import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";


const Carrusel = ({ mensaje, info}) => {
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
		<Container
			maxWidth="false"
			sx={{ bgcolor: "#221942", height: 700 }}
		>
			<Typography sx={{ color: "white" }} variant="h2" gutterBottom>
				{mensaje}
			</Typography>
			<Slider {...settings}>
				{info.map((elemento) => (
					<Cards
						key={elemento.id}
						titulo={elemento.title}
						imagen={elemento.poster_path}
					/>
				))}
			</Slider>
		</Container>
	);
};
export default Carrusel;
