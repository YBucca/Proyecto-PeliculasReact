import { useState, useEffect } from "react";
import {urlBase, apiKey, queryLenguaje, queryPage, definirCategoria } from "../utils/variables"
const useFetchApp = (tendencia, tipo, categoria) => {
	const [datos, setDatos] = useState([]);
	const [cargando, setCargando] = useState(false);
	useEffect(() => {
		setCargando(true);
		fetch(
			`${urlBase}${definirCategoria(
				tendencia,
				tipo,
				categoria
			)}?${apiKey}${queryLenguaje}=es`
		)
			.then((res) => res.json())
			.then((data) => setDatos(data.results));
		setCargando(false);
		console.log("datos", datos);
	}, []);
	return ({
		datos: datos,
		cargando: cargando,
	});
};

export default useFetchApp;
