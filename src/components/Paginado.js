import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import { useContext } from "react";
import Context from "../context/Context";
const Paginado = ({ handleChange, page, totalPages }) => {
	const context = useContext(Context);
	return (
		<Box sx={{ bgcolor: context.modoClaro ? "transparent" : "#9f86c0", width:"500px",p:2, borderRadius:10, mt:4}} className="pagination">
		
			<Pagination
				count={totalPages}
				color="secondary"
				page={page}
				onChange={handleChange}
				size={window.innerWidth > 576 ? "large" : "small"}
			/>
		</Box>
	);
};

export default Paginado;
