import { useEffect, useState, useContext } from "react";
import Context from "../context/Context";
import { useParams } from "react-router-dom";
import "../App.scss";
import CloseIcon from "@mui/icons-material/Close";
const Video = ({ handleClickCerrarVideo }) => {
	const params = useParams();
	const [pelicula, setPelicula] = useState([]);
	const contexto = useContext(Context);
	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${params.idPelicula}/videos?api_key=457fa7dd417d06a0e15d7fe61f662df1&language=${contexto.lenguaje}`
		)
			.then((res) => res.json())
			.then((data) => setPelicula(data.results));
	}, [contexto.lenguaje]);
	return (
		<div className="seccion-video">
			<div className="container-btn">
				<button className="btn-cerrar" onClick={handleClickCerrarVideo}>
					<CloseIcon />
				</button>
			</div>
		<div className="container-video">
			{pelicula.map((video) => (
				<iframe
					key={video.id}
					aria-label={`${video.name}`}
					title={video.name}
					gyroscope="true"
					encrypted-media="false"
					frameBorder="1"
					src={`https://www.youtube.com/embed/${video.key}`}
					allowFullScreen
				/>
			))}
			</div>
		</div>
	);
};
export default Video;
