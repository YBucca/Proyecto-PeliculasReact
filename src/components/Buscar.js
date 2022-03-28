import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
const Buscar = () => {
	const [valorDelInput, setValorDelInput] = useState(""); // para hacer click en el boton enviar
	const [personajes, setPersonajes] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams({ query: "" });
	useEffect(() => {
		fetch(
			`https://rickandmortyapi.com/api/character?name=${searchParams.get(
				"query"
			)}`
		)
			.then((res) => res.json())
			.then((data) => {
				if (data.results) {
					setPersonajes(data.results);
				}
        // para que al buscar algo que no sea de la api , no se actualice y se borre todo. hacer una imagen de error
			});
	}, [searchParams]);

	const handleChange = (e) => {
		// setSearchParams({query: e.target.value}) al escribir solo en el input se modifica
		//al hacer click en el boton cambia el valor del input
		setValorDelInput(e.target.value);
	};
	const handleClick = (e) => {
		setSearchParams({
			query: valorDelInput,
		});
	};
	return (
		<div>
			Buscar pelis
			<input
				type="text"
				onChange={handleChange}
				value={valorDelInput}
			></input>
			<button onClick={handleClick}>enviar</button>
			{personajes.map((personaje) => (
				<h1>{personaje.name}</h1>
			))}
		</div>
	);
};

export default Buscar;
