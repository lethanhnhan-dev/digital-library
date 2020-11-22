import React, { useEffect, useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import {
	getUserDetails,
	updateUserProfile,
} from "../redux/actions/userActions";
import { USER_UPDATE_PROFILE_RESET } from "../redux/constants/userConstants";

const AdminProfileScreen = ({ history, userInfo, userDetails, col }) => {
	const dispatch = useDispatch();
	const { loading, error, user } = userDetails;
	const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
	const { success } = userUpdateProfile;

	const [toEdit, setToEdit] = useState(false);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [message, setMessage] = useState(null);

	useEffect(() => {
		if (!userInfo) {
			history.push("/login");
		} else {
			if (!user || !user.name) {
				dispatch({ type: USER_UPDATE_PROFILE_RESET });
				dispatch(getUserDetails("profile"));
			} else {
				setName(user.name);
				setEmail(user.email);
			}
		}

		return function cleanup() {
			return null;
		};
	}, [dispatch, history, userInfo, user, success]);

	const submitHandler = (e) => {
		e.preventDefault();
		if (!password || !confirmPassword || (!password && !confirmPassword)) {
			setMessage("Please type password to confirm your change!");
		} else if (password !== confirmPassword) {
			setMessage("Passwords do not match");
		} else {
			dispatch(
				updateUserProfile({ id: user._id, name, email, password }),
			);
			if (success) {
				setPassword("");
				setConfirmPassword("");
				setToEdit(false);
			}
		}
	};

	return (
		<Col md={col}>
			<h2>Thông tin tài khoản</h2>

			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<Form onSubmit={submitHandler}>
					<Form.Group controlId="name">
						<Form.Label>Name</Form.Label>
						<Form.Control
							disabled={!toEdit}
							type="name"
							placeholder="Enter name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						></Form.Control>
					</Form.Group>

					<Form.Group controlId="email">
						<Form.Label>Email Address</Form.Label>
						<Form.Control
							disabled={!toEdit}
							type="email"
							placeholder="Enter email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						></Form.Control>
					</Form.Group>

					<Form.Group controlId="password">
						<Form.Label>Password</Form.Label>
						<Form.Control
							disabled={!toEdit}
							type="password"
							placeholder="Enter password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						></Form.Control>
					</Form.Group>

					<Form.Group controlId="confirmPassword" className="none">
						<Form.Label>Confirm Password</Form.Label>
						<Form.Control
							disabled={!toEdit}
							type="password"
							placeholder="Confirm password"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
						></Form.Control>
					</Form.Group>
					{!toEdit && (
						<Button
							type="button"
							variant="primary"
							block
							disabled={toEdit}
							onClick={() => setToEdit(true)}
						>
							Chỉnh sửa thông tin
						</Button>
					)}
					{toEdit && (
						<Button
							type="submit"
							variant="primary"
							block
							disabled={!toEdit}
						>
							Cập nhật thông tin
						</Button>
					)}
				</Form>
			)}
			<div className="my-2">
				{message && <Message variant="danger">{message}</Message>}
				{success && (
					<Message variant="success">Profile Updated</Message>
				)}
			</div>
		</Col>
	);
};

AdminProfileScreen.defaultProps = {
	col: 3,
};

export default AdminProfileScreen;
