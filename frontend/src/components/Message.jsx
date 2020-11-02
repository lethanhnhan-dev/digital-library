import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";

const Message = ({ variant, children }) => {
	const [show, setShow] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setShow(false);
		}, 5000);

		// return function cleanup() {};
	}, []);

	if (show) {
		return <Alert variant={variant}>{children}</Alert>;
	} else return null;
};

Message.defaultProps = {
	variant: "info",
};

export default Message;
