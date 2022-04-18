import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FavoriteIcon from "@mui/icons-material/Favorite";
const Footer = () => {
	return (
		<Box
			sx={{
				bgcolor: "#231942",
				color: "#9f86c0",
				height: 70,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				mt: 5,
			}}
		>
			<Typography
				sx={{
					fontWeight: "bold",
					textAlign: "center",
					m: 1,
				}}
			>
				Yanina Bucca
			</Typography>
			<a
				href="https://www.linkedin.com/in/yaninabucca/"
				target="_blank"
				rel="noopener"
				aria-label="Ir a mi linkedin"
			>
				<LinkedInIcon sx={{ color: "#9f86c0", m: 1 }} />
			</a>
			<a
				href="https://github.com/YBucca"
				target="_blank"
				rel="noopener"
				aria-label="Ir a mi linkedin"
			>
				<GitHubIcon sx={{ color: "#9f86c0", m: 1 }} />
			</a>
			<a
				href="mailto:yani.bucca@gmail.com"
				target="_blank"
				rel="noopener"
				aria-label="Ir a mi linkedin"
			>
				<FavoriteIcon sx={{ color: "#9f86c0", m: 1 }} />
			</a>
		</Box>
	);
};

export default Footer;
