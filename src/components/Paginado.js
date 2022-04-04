import Pagination from "@material-ui/lab/Pagination";
const Paginado = ({ handleChange, page, totalPages }) => {
	return (
		<div>
			<Pagination
				count={totalPages}
				color="primary"
				page={page}
				onChange={handleChange}
			/>
		</div>
	);
};

export default Paginado;

{
	/* <div>
			<button onClick={handleClickPrev} disabled={page === 1}>
				prev
			</button>
			<button onClick={handleClickNext}>
				next
			</button>
		</div> */
}
