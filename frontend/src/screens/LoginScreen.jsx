import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/userActions";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";

const LoginScreen = ({ location, history }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);
	const { loading, error, userInfo } = userLogin;

	const redirect = location.search ? location.search.split("=")[1] : "/";

	useEffect(() => {
		if (userInfo) {
			history.push(redirect);
		}
	}, [history, redirect, userInfo]);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(login(email, password));
	};

	return (
		<Card>
			<Card.Title className="mt-3">
				<h1 style={{ textAlign: "center", fontWeight: "bold" }}>
					ĐĂNG NHẬP
				</h1>
			</Card.Title>

			<Card.Body>
				<Form className="mx-auto my-3 w-50" onSubmit={submitHandler}>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</Form.Group>
					<Row className="py-3">
						<Col>
							Bạn chưa có tài khoản?{" "}
							<Link
								to={
									redirect
										? `/register?redirect=${redirect}`
										: "/register"
								}
							>
								Đăng kí ngay
							</Link>
						</Col>
					</Row>
					<Button variant="primary" type="submit" block>
						Đăng nhập ngay
					</Button>
				</Form>

				{loading && <Loader />}
				{error && <Message variant="danger">{error}</Message>}
			</Card.Body>
		</Card>
	);
};

export default LoginScreen;
