import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
const ListaItem = ({ titulo, imagen, link }) => {
	return (
		<Box sx={{ display: "flex", p: 1, alignItems: "center" }}>
			<Avatar alt={titulo} src={imagen} />
			<Typography variant="h5" sx={{ p: 2 }}>
				{titulo}
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
