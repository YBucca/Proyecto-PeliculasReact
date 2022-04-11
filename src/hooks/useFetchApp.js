import { useState, useEffect, useContext } from "react";
import Context from "../context/Context";
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
	const contexto = useContext(Context);
	useEffect(() => {
		setCargando(true);
		fetch(
			`${urlBase}${definirCategoria(
				tendencia,
				tipo,
				categoria
			)}?${apiKey}${queryLenguaje}=${
				contexto.lenguaje
			}${queryPage}=${page}`
		)
			.then((res) => res.json())
			.then((data) => {
				setDatos(data.results);
				setTotalPages(data.total_pages);
				setCargando(false);
			});
	}, [contexto.lenguaje, page]);
	return {
		datos: datos,
		cargando: cargando,
		totalPages: totalPages,
	};
};

export default useFetchApp;
