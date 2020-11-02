import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loader";
import Message from "../Message";
import { create } from "../../redux/actions/categoryActions";

const CreateCategory = () => {
	const dispatch = useDispatch();
	const createCategory = useSelector((state) => state.createCategory);
	const { loading, error, category, success } = createCategory;

	const [categoryName, setCategoryName] = useState("");

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(create(categoryName));
		setCategoryName("");
	};

	return (
		<Card>
			<Card.Title className="mt-3">
				<h1 style={{ textAlign: "center", fontWeight: "bold" }}>
					TẠO DANH MỤC MỚI
				</h1>
			</Card.Title>

			<Card.Body>
				<Form className="mx-auto my-3 w-50" onSubmit={submitHandler}>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Tên danh mục bạn muốn tạo</Form.Label>
						<Form.Control
							type="name"
							placeholder="Tên danh mục..."
							value={categoryName}
							onChange={(e) => setCategoryName(e.target.value)}
						/>
					</Form.Group>
					<Button variant="primary" type="submit" block>
						Tạo danh mục mới
					</Button>
				</Form>

				{loading && <Loader />}
				{error && <Message variant="danger">{error}</Message>}
				{success && (
					<Message variant="success">{category.message}</Message>
				)}
			</Card.Body>
		</Card>
	);
};

export default CreateCategory;
