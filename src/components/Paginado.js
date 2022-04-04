import Pagination from "@mui/material/Pagination";
const Paginado = ({ handleChange, page, totalPages }) => {
	return (
		<div>
			<Pagination
				count={totalPages}
				color="secondary"
				page={page}
				onChange={handleChange}
			/>
		</div>
	);
};

export default Paginado;
