import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
const ListaItem = ({ titulo, imagen, link, puntaje }) => {
	return (
		<Box
			sx={{
				width: "100%",
				display: "flex",

				alignItems: "center",
				justifyContent: "space-between",
				borderBottom: "1px solid grey",
			}}
		>
			<Avatar alt={titulo} src={imagen} />
			<Typography
				variant="h5"
				sx={{ ml: 2 }}
				className="tamaño-responsive"
			>
				{titulo}
			</Typography>
			<Stack spacing={1}>
				<Rating
					name="half-rating-read"
					defaultValue={puntaje / 2}
					precision={0.5}
					readOnly
					className="tamaño-responsive"
				/>
			</Stack>
			<Typography
				variant="h6"
				sx={{ p: 2 }}
				className="tamaño-responsive"
			>
				{puntaje / 2}
			</Typography>
			<Link
				to={`/movie/${link}`}
				style={{
					textDecoration: "none",
					color: "black",
				}}
			>
				<Fab size="small" color="secondary" aria-label="add">
					<ArrowForwardIosIcon />
				</Fab>
			</Link>
		</Box>
	);
};

export default ListaItem;
