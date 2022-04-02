import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Footer = () => {
	return (
		<Box
			sx={{
				bgcolor: "#231942",
				color: "#9f86c0",
				height: 40,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				p: 2,
				mt: 5,
			}}
		>
			<Typography
				sx={{
					fontWeight: "bold",
					fontSize: 20,
					// fontFamily: "nunito",
				}}
			>
				<FavoriteIcon />
			</Typography>
		</Box>
	);
};

export default Footer;
