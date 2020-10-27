import React from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Routes from "./Routes";

const App = () => {
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
								<ListGroup variant="flush" bg="secondary">
									<ListGroup.Item variant="dark">
										Crypt Infomation Security
									</ListGroup.Item>
									<ListGroup.Item variant="dark">
										An toàn thông tin
									</ListGroup.Item>
									<ListGroup.Item variant="dark">
										Điện tử - viễn thông
									</ListGroup.Item>
									<ListGroup.Item variant="dark">
										Công nghệ thông tin
									</ListGroup.Item>
									<ListGroup.Item variant="dark">
										Khoa cơ bản
									</ListGroup.Item>
									<ListGroup.Item variant="dark">
										Lý luận chính trị
									</ListGroup.Item>
									<ListGroup.Item variant="dark">
										Ngoạn ngữ
									</ListGroup.Item>
									<ListGroup.Item variant="dark">
										GDQP - GDTC
									</ListGroup.Item>
									<ListGroup.Item variant="dark">
										Đồ án - Tiểu luận
									</ListGroup.Item>
									<ListGroup.Item variant="dark">
										Tài liệu tham khảo khác
									</ListGroup.Item>
								</ListGroup>
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
