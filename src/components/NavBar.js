import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";

const NavBar = () => {
	return (
		<Box
			sx={{
				flexGrow: 1,
				mb:2,
			}}
		>
			<AppBar
				sx={{
					bgcolor: "#231942",
				}}
				position="static"
			>
				<Toolbar>
					<LocalMoviesIcon sx={{ fontSize: 50 }} />
					<List
						component="nav"
						sx={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "flex-end",
							alignItems: "center",
						}}
					>
						<ListItem button>
							<Link
								style={{
									textDecoration: "none",
									color: "#9f86c0",
								}}
								to="/"
							>
								Home
							</Link>
						</ListItem>
						<ListItem button>
							<Link
								style={{
									textDecoration: "none",
									color: "#9f86c0",
								}}
								to="/ultimos-lanzamientos"
							>
								Ultimos Lanzamientos
							</Link>
						</ListItem>
						<ListItem button>
							<Link
								style={{
									textDecoration: "none",
									color: "#9f86c0",
								}}
								to="/populares"
							>
								Populares
							</Link>
						</ListItem>
						<ListItem button>
							<Link
								style={{
									textDecoration: "none",
									color: "#9f86c0",
								}}
								to="/busqueda"
							>
								Buscar
							</Link>
						</ListItem>
					</List>
				</Toolbar>
			</AppBar>
		</Box>
		
	);
};
export default NavBar;
