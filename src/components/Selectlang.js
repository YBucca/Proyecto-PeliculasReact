import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LanguageIcon from "@mui/icons-material/Language";

const Selectlang = () => {
	const [lenguaje, setLenguaje] = useState("");

	const handleChange = (e) => {
		setLenguaje(e.target.value);
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
					value={lenguaje}
					onChange={handleChange}
					autoWidth
					label="lenguaje"
					sx={{color:"white"}}
				>
					<MenuItem value="es">Español</MenuItem>
					<MenuItem value="in">Inglés</MenuItem>
					<MenuItem value="port">Português</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
};

export default Selectlang;
