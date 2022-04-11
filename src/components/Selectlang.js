import { useContext } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LanguageIcon from "@mui/icons-material/Language";
import Context from "../context/Context";
const Selectlang = () => {
	const contexto = useContext(Context);
	const handleChange = (e) => {
	 contexto.setLenguaje(e.target.value);
	};
	return (
		<div>
			<FormControl sx={{ ml: 3, minWidth: 70 }}>
				<InputLabel id="demo-simple-select-autowidth-label">
					<LanguageIcon color="secondary" />
				</InputLabel>
				<Select
					labelId="demo-simple-select-autowidth-label"
					id="demo-simple-select-autowidth"
					value={contexto.lenguaje}
					onChange={handleChange}
					autoWidth
					label="lenguaje"
					sx={{ color: "white" }}
				>
					<MenuItem value="es">Español</MenuItem>
					<MenuItem value="en">Inglés</MenuItem>
					<MenuItem value="pt">Português</MenuItem>
					<MenuItem value="it">Italiano</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
};

export default Selectlang;
