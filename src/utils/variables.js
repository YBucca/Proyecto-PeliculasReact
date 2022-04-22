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
		home: "Página principal",
		navPopulares: "Populares",
		navLanzamientos: "Últimos Lanzamientos",
		navBuscar: "Buscar",
		btnVerMas: "Ver más",
		duracion: "Duración",
		minutos: "minutos",
		genero: "Géneros",
		ingresa: "Ingresá una película",
	},
	en: {
		populares: "Popular movies",
		mejorPuntuadas: "Rated improvement movies",
		home: "Home",
		navPopulares: "Popular",
		navLanzamientos: "Latest releases",
		navBuscar: "Search",
		btnVerMas: "See more",
		duracion: "Duration",
		minutos: "minutes",
		genero: "Genders",
		ingresa: "Enter a movie",
	},
	pt: {
		populares: "Filmes populares",
		mejorPuntuadas: "Filmes sobre melhoria classificada",
		home: "Página principal",
		navPopulares: "Popular",
		navLanzamientos: "Ultimos Lançamentos",
		navBuscar: "Procurar",
		btnVerMas: "Ver mais",
		duracion: "Duração",
		minutos: "minutos",
		genero: "Gêneros",
		ingresa: "Digite um filme",
	},
	it: {
		populares: "Film popolari",
		mejorPuntuadas: "Film di miglioramento valutato",
		home: "Página iniciale",
		navPopulares: "Popolare",
		navLanzamientos: "Ultime versioni",
		navBuscar: "Cercare",
		btnVerMas: "Vedi altro",
		duracion: "Durata",
		minutos: "minuti",
		genero: "Generi",
		ingresa: "Entrare in un film",
	},
};
