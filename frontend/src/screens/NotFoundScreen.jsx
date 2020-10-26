import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const NotFoundScreen = () => {
	return (
		<Container>
			<Row>
				<Col md={4}>
					<h1>Error 404!</h1>
				</Col>
				<Col md={6}>
					<h4>Sorry for that! Page not found. </h4>
					<p>Please try different URLs.</p>
				</Col>
			</Row>
		</Container>
	);
};

export default NotFoundScreen;
