import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = ({ className }) => {
	return (
		<Spinner
			className={className}
			animation="border"
			role="status"
			style={{
				width: "100px",
				height: "100px",
				margin: "auto",
				display: "block",
			}}
		>
			<span className="sr-only">Loading...</span>
		</Spinner>
	);
};

Loader.defaultProps = {
	className: "",
};

export default Loader;
