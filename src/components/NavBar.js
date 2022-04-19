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
import SearchIcon from "@mui/icons-material/Search";
import NavList from "./NavList";

const NavBar = () => {
	const [mostrarMenu, setMostrarMenu] = useState(false);
	const handleClickMenu = () => {
		setMostrarMenu(!mostrarMenu);
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
				<Hamburger
					label="Show menu"
					toggled={mostrarMenu}
					toggle={setMostrarMenu}
					onClick={handleClickMenu}
				/>
				{mostrarMenu && (
					<NavList className="nav-bar" handleClick={handleClick} />
				)}
				<NavList className="hidden" handleClick={handleClick} />
			</AppBar>
		</Box>
	);
};
export default NavBar;
