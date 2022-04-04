import { useState, useEffect } from "react";
import {
	urlBase,
	apiKey,
	queryLenguaje,
	queryPage,
	definirCategoria,
} from "../utils/variables";
const useFetchApp = (tendencia, tipo, categoria, page) => {
	const [datos, setDatos] = useState([]);
	const [totalPages, setTotalPages] = useState(1);
	const [cargando, setCargando] = useState(false);
	useEffect(() => {
		setCargando(true);
		fetch(
			`${urlBase}${definirCategoria(
				tendencia,
				tipo,
				categoria
			)}?${apiKey}${queryLenguaje}=es${queryPage}=${page}`
		)
			.then((res) => res.json())
			.then((data) => {
				setDatos(data.results);
				setTotalPages(data.total_pages);
				setCargando(false);
			});
	}, [page]);
	return {
		datos: datos,
		cargando: cargando,
		totalPages: totalPages,
	};
};

export default useFetchApp;
