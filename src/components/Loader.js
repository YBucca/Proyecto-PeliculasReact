import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Loader = ({cargando}) => {
	return (
	 cargando && <Box
			sx={{
				display: "flex",
				position: "relative",
				top: "700px",
				left: "700px",
			}}
		>
			<CircularProgress color="secondary" />
		</Box>
	);
};
export default Loader;
