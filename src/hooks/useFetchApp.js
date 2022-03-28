import { useState, useEffect } from "react";
const useFetchApp = (tipo, categoria) => {
	const [datos, setDatos] = useState([]);
	// const [cargando, setCargando] = useState(false);
	useEffect(() => {
		// setCargando(true);
		fetch(
			`https://api.themoviedb.org/3/${tipo}/${categoria}?api_key=457fa7dd417d06a0e15d7fe61f662df1`
		)
			.then((res) => res.json())
			.then((data) => setDatos(data.results));
		// setCargando(false);
		console.log("datos", datos);
	}, []);
	return datos;
};

export default useFetchApp;
