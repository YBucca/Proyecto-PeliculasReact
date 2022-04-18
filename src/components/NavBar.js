import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import { useContext, useState } from "react";
import Context from "../context/Context";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import IconButton from "@mui/material/IconButton";
import Selectlang from "./Selectlang";
import { cambioLenguaje } from "../utils/variables";
import Hamburger from "hamburger-react";

const NavBar = () => {
	const [mostrarMenu, setMostrarMenu] = useState(false);
	const handleClickMenu = () => {
		setMostrarMenu(!mostrarMenu); //ver ??
	};
	const context = useContext(Context);
	const handleClick = () => {
		context.setModoClaro(!context.modoClaro);
	};

	return (
		<Box
			sx={{
				mb: 1,
				width: "100%",
			}}
		>
			<AppBar
				sx={{
					bgcolor: "#231942",
					p: 2,
					fontSize: 20,
				}}
				position="static"
			>
				{/* solo que se muestre en mobile ?? */}
				<Hamburger
					label="Show menu"
					className="btn-burger"
					toggled={mostrarMenu}
					toggle={setMostrarMenu}
					onClick={handleClickMenu}
				/>
				{mostrarMenu && (
					<Toolbar>
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
							className="nav-bar"
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
									{
										cambioLenguaje[context.lenguaje]
											.navPopulares
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
				)}
			</AppBar>
		</Box>
	);
};
export default NavBar;
