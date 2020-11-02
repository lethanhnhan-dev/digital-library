import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/actions/userActions";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";

const RegisterScreen = ({ location, history }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [message, setMessage] = useState(null);

	const dispatch = useDispatch();
	const userRegister = useSelector((state) => state.userRegister);
	const { loading, error, userInfo } = userRegister;

	const redirect = location.search ? location.search.split("=")[1] : "/";

	useEffect(() => {
		if (userInfo) {
			history.push(redirect);
		}
	}, [history, redirect, userInfo]);

	const submitHandler = (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			setMessage("Password do not match");
		} else {
			dispatch(register(name, email, password));
		}
	};

	return (
		<Card>
			<Card.Title className="mt-3">
				<h1 style={{ textAlign: "center", fontWeight: "bold" }}>
					ĐĂNG KÝ
				</h1>
			</Card.Title>

			<Card.Body>
				<Form className="mx-auto my-3 w-50" onSubmit={submitHandler}>
					<Form.Group controlId="name">
						<Form.Label>Tên của bạn</Form.Label>
						<Form.Control
							type="text"
							placeholder="Nhập tên của bạn"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</Form.Group>
					<Form.Group controlId="email">
						<Form.Label>Email của bạn</Form.Label>
						<Form.Control
							type="email"
							placeholder="Nhập Email của bạn"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</Form.Group>

					<Form.Group controlId="password">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</Form.Group>
					<Form.Group controlId="confirmPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Xác nhận password"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
						/>
					</Form.Group>
					<Row className="py-3">
						<Col>
							Bạn chưa có tài khoản?{" "}
							<Link
								to={
									redirect
										? `/login?redirect=${redirect}`
										: "/login"
								}
							>
								Đăng nhập ngay
							</Link>
						</Col>
					</Row>
					<Button variant="primary" type="submit" block>
						Tạo tài khoản ngay
					</Button>
				</Form>
				{loading && <Loader />}
				{message && <Message variant="danger">{message}</Message>}
				{error && <Message variant="danger">{error}</Message>}
			</Card.Body>
		</Card>
	);
};

export default RegisterScreen;
