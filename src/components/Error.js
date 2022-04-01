import "../App.scss";
import { Link } from "react-router-dom";

const Error = () => {
	return (
		<div className="card-error">
			<img src="https://i.pinimg.com/originals/02/eb/6c/02eb6cf9dc2dd629b344bcc2ecd8acb5.jpg"></img>
			<h1>404- Página no encontrada</h1>
			<Link
				style={{
					textDecoration: "none",
					color: "#9f86c0",
				}}
				to="/"
			>
				<button>Home</button>
			</Link>
		</div>
	);
};

export default Error;
