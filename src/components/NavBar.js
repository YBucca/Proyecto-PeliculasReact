import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import { useContext} from "react";
import Context from "../context/Context";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import IconButton from "@mui/material/IconButton";
import Selectlang from "./Selectlang";
import { cambioLenguaje } from "../utils/variables";

const NavBar = () => {
	const context = useContext(Context);
	const handleClick = () => {
		context.setModoClaro(!context.modoClaro);
	};
	return (
		<Box
			sx={{
				flexGrow: 1,
				mb: 2,
			}}
		>
			<AppBar
				sx={{
					bgcolor: "#231942",
					p: 2,
					fontSize:20
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
									width: "100px",
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
									width: "200px",
								}}
								to="/ultimos-lanzamientos"
							>
								{
									cambioLenguaje[context.lenguaje]
										.navLanzamientos
								}
							</Link>
						</ListItem>
						<ListItem button>
							<Link
								style={{
									textDecoration: "none",
									color: "#9f86c0",
									width: "100px",
								}}
								to="/populares"
							>
								{cambioLenguaje[context.lenguaje].navPopulares}
							</Link>
						</ListItem>
						<ListItem button>
							<Link
								style={{
									textDecoration: "none",
									color: "#9f86c0",
									width: "100px",
								}}
								to="/busqueda"
							>
								{cambioLenguaje[context.lenguaje].navBuscar}
							</Link>
						</ListItem>
					</List>
					<Box
						sx={{
							position: "relative",
							left: 650,
							display: "flex",
						}}
					>
						<IconButton
							color="secondary"
							aria-label="cambio de tema oscuro a claro"
							onClick={handleClick}
						>
							{context.modoClaro ? (
								<NightlightIcon />
							) : (
								<LightModeIcon />
							)}
						</IconButton>
						<Selectlang />
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
export default NavBar;
