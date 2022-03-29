import "./PeliculaSeries.scss";
import useFetchApp from "../hooks/useFetchApp";
import Cards from "./Cards";
const Series = ({ mensaje }) => {
	const series = useFetchApp("tv", "popular");

	return (
		<>
			<h1>{mensaje}</h1>
			<div className="container">
				{series.map(serie => (
					<Cards
						key={serie.id}
						titulo={serie.name}
						imagen={serie.poster_path}
					/>
				))}
			</div>
		</>
	);
};
export default Series;
