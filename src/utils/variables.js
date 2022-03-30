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
