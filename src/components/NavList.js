import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import IconButton from "@mui/material/IconButton";
import { useContext} from "react";
import Context from "../context/Context";
import Selectlang from "./Selectlang";
import { cambioLenguaje } from "../utils/variables";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
const NavList = ({ handleClick, className }) => {
	const context = useContext(Context);
	return (
		<Toolbar className={className}>
			<Link
				style={{
					textDecoration: "none",
					color: "white",
				}}
				to="/"
			>
				<LocalMoviesIcon
					sx={{ fontSize: 70 }}
					className="icono-principal"
				/>
			</Link>
			<List
				component="nav"
				sx={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
				}}
				className={className}
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
							width: "195px",
						}}
						to="/ultimos-lanzamientos"
					>
						{cambioLenguaje[context.lenguaje].navLanzamientos}
					</Link>
				</ListItem>
				<ListItem button>
					<Link
						style={{
							textDecoration: "none",
							color: "#9f86c0",
							width: "100%",
						}}
						to="/populares"
					>
						{cambioLenguaje[context.lenguaje].navPopulares}
					</Link>
				</ListItem>
				<ListItem button>
					<SearchIcon sx={{ fontSize: 30, color: "#9f86c0" }} />
					<Link
						style={{
							textDecoration: "none",
							color: "#9f86c0",
							width: "100%",
						}}
						to="/busqueda"
					>
						{cambioLenguaje[context.lenguaje].navBuscar}
					</Link>
				</ListItem>
			</List>
			<Box
				sx={{
					display: "flex",
					width: "80%",
					justifyContent: "flex-end",
				}}
				className="box-nav"
			>
				<IconButton
					color="secondary"
					aria-label="cambio de tema oscuro a claro"
					onClick={handleClick}
				>
					{context.modoClaro ? (
						<NightlightIcon sx={{ fontSize: 30 }} />
					) : (
						<LightModeIcon sx={{ fontSize: 30 }} />
					)}
				</IconButton>
				<Selectlang />
			</Box>
		</Toolbar>
	);
};

export default NavList
