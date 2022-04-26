import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Loader = ({ cargando }) => {
	return (
		cargando && (
			<Box
				sx={{
					display: "flex",
					position: "absolute",
					top: "400px",
				}}
			>
				<CircularProgress color="secondary" size="100px" />
			</Box>
		)
	);
};
export default Loader;
