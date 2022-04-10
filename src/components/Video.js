import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.scss";
import CloseIcon from "@mui/icons-material/Close";
const Video = ({ handleClickCerrarVideo }) => {
	const params = useParams();
	const [pelicula, setPelicula] = useState([]);
	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${params.idPelicula}/videos?api_key=457fa7dd417d06a0e15d7fe61f662df1&language=es`
		)
			.then((res) => res.json())
			.then((data) => setPelicula(data.results));
	}, []);
	return (
		<div className="video">
			<button className="btn-cerrar" onClick={handleClickCerrarVideo}>
				<CloseIcon />
			</button>
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
	);
};
export default Video;
