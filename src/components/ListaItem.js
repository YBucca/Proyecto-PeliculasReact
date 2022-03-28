import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
const ListaItem = ({titulo, imagen,link}) => {
	return (
		<Box sx={{ display: "flex", p: 1, alignItems: "center" }}>
			<Avatar
				alt={titulo}
				src={imagen}
			/>
			<Typography
				variant="h5"
				sx={{ p:2 }}
			>
				{titulo}
			</Typography>
			{/* link de react router para ir al detalle  */}

		</Box>
	);
};

export default ListaItem;
