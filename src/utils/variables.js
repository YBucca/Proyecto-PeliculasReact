export const urlBase = "https://api.themoviedb.org/3/";
export const apiKey = "api_key=457fa7dd417d06a0e15d7fe61f662df1";
export const queryLenguaje = "&language";
export const queryPage = "&page";

export const definirCategoria = (tendencia, tipo, categoria) => {
	if (tendencia) {
		return `${tendencia}/${tipo}/${categoria}`;
	} else {
		return `${tipo}/${categoria}`;
	}
};

export const cambioLenguaje = {
	es: {
		populares: "Películas populares",
		mejorPuntuadas: "Películas mejor puntuadas",
		navPopulares: "Populares",
		navLanzamientos: "Últimos Lanzamientos",
		navBuscar: "Buscar",
		btnVerMas: "Ver más",
		duracion: "Duración",
		minutos: "minutos",
		genero: "Géneros",
	},
	en: {
		populares: "Popular movies",
		mejorPuntuadas: "Rated improvement movies",
		navPopulares: "Popular",
		navLanzamientos: "Latest releases",
		navBuscar: "Search",
		btnVerMas: "See more",
		duracion: "Duration",
		minutos: "minutes",
		genero: "Genders",
	},
	pt: {
		populares: "Filmes populares",
		mejorPuntuadas: "Filmes sobre melhoria classificada",
		navPopulares: "Popular",
		navLanzamientos: "Ultimos Lançamentos",
		navBuscar: "Procurar",
		btnVerMas: "Ver mais",
		duracion: "Duração",
		minutos: "minutos",
		genero: "Gêneros",
	},
	it: {
		populares: "Film popolari",
		mejorPuntuadas: "Film di miglioramento valutato",
		navPopulares: "Popolare",
		navLanzamientos: "Ultime versioni",
		navBuscar: "Cercare",
		btnVerMas: "Vedi altro",
		duracion: "Durata",
		minutos: "minuti",
		genero: "Generi",
	},
};
