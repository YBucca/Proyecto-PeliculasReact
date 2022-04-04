import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { useContext } from "react";
import Context from "../context/Context";
const Cards = ({ titulo, imagen }) => {
		const context = useContext(Context);
	return (
		<Card
			sx={{
				width: 330,
				height: 530,
				bgcolor: context.modoClaro ? "#9f86c0" : "transparent",
				position: "relative",
				m: 1,
			}}
		>
			<CardContent sx={{ textAlign: "center" }}>
				<CardMedia
					sx={{ width: "100%", height: "440px" }}
					component="img"
					image={`https://image.tmdb.org/t/p/w300/${imagen}`}
					alt={`Poster de ${titulo}`}
				/>
				<Typography
					variant="h6"
					gutterBottom
					sx={{
						mt: 2,
						color: context.modoClaro ? "modo-claro" : "white",
					}}
				>
					{titulo}
				</Typography>
			</CardContent>
		</Card>
	);
};
export default Cards;
