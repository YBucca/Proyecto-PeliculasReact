import Pagination from "@mui/material/Pagination";
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
