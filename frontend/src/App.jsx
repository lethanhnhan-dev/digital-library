import React, { useEffect } from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoriesAction } from "./redux/actions/categoryActions";
import Routes from "./Routes";
import Loader from "./components/Loader";

const App = () => {
	const dispatch = useDispatch();
	const getAllCategories = useSelector((state) => state.getAllCategories);
	const { categories, loading } = getAllCategories;
	useEffect(() => {
		dispatch(getAllCategoriesAction());
		return function clear() {
			return null;
		};
		// eslint-disable-next-line
	}, []);
	return (
		<Router>
			<Header />
			<main>
				<SearchBar />
				<Container fluid>
					<Row>
						<Col md="2">
							<Card bg="secondary">
								<Card.Header>Tài liệu thư viện số</Card.Header>

								{loading ? (
									<Loader className="mx-auto my-4" />
								) : (
									<ListGroup variant="flush" bg="secondary">
										{categories &&
											categories.map((category) => (
												<ListGroup.Item
													variant="dark"
													key={category._id}
												>
												&#9659; {category.name}
												</ListGroup.Item>
											))}
									</ListGroup>
								)}
							</Card>
						</Col>
						<Col md="8">
							<Routes />
						</Col>
						<Col md="2">
							<Card bg="secondary">
								<Card.Header>TÀI LIỆU NỔI BẬT</Card.Header>
								{/* Media Card*/}
								<ListGroup variant="flush" bg="secondary">
									<ListGroup.Item variant="dark">
										Cras justo odio
									</ListGroup.Item>
									<ListGroup.Item variant="dark">
										Dapibus ac facilisis in
									</ListGroup.Item>
									<ListGroup.Item variant="dark">
										Vestibulum at eros
									</ListGroup.Item>
								</ListGroup>
							</Card>
						</Col>
					</Row>
				</Container>
			</main>
		</Router>
	);
};

export default App;
