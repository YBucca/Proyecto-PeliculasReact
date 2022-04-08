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
				p: 1,
				alignItems: "center",
				justifyContent: "space-between",
			}}
		>
			<Avatar alt={titulo} src={imagen} />
			<Typography variant="h5" sx={{ ml: 2 }}>
				{titulo}
			</Typography>
			<Stack spacing={1}>
				<Rating
					name="half-rating-read"
					defaultValue={puntaje}
					precision={0.5}
					readOnly
				/>
			</Stack>
			<Typography variant="h6" sx={{ p: 2 }}>
				{puntaje}
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
