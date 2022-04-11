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
					p:2
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
									width: "170px",
								}}
								to="/ultimos-lanzamientos"
							>
								Últimos Lanzamientos
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
					<Box sx={{ position: "relative", left: 650 , display:"flex"}}>
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
