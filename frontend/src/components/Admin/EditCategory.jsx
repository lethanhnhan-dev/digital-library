import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loader";
import Message from "../Message";
import {
	getAllCategoriesAction,
	editCategoryByIdAction,
	deleteCategoryByIdAction,
} from "../../redux/actions/categoryActions";
import { useEffect } from "react";

const EditCategory = () => {
	const dispatch = useDispatch();

	const getAllCategories = useSelector((state) => state.getAllCategories);
	const { loading, categories, error } = getAllCategories;
	const editCategoryById = useSelector((state) => state.editCategoryById);
	const {
		loading: loadingEdited,
		success,
		error: errorEdited,
		message,
	} = editCategoryById;
	const [name, setName] = useState("");
	const [categoryNameId, setCategoryNameId] = useState("");
	useEffect(() => {
		dispatch(getAllCategoriesAction());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [success]);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(editCategoryByIdAction(categoryNameId, { name }));
		setName("");
	};

	return (
		<Card>
			<Card.Title className="mt-3">
				<h1 style={{ textAlign: "center", fontWeight: "bold" }}>
					Chỉnh sửa danh mục
				</h1>
			</Card.Title>
			{loading ? (
				<Loader />
			) : (
				<Card.Body>
					<Form
						className="mx-auto my-3 w-50"
						onSubmit={submitHandler}
					>
						<Form.Group controlId="categoryName">
							<Form.Label>Tên danh mục bạn muốn sửa</Form.Label>
							<Form.Control
								as="select"
								value={categoryNameId}
								onChange={(e) =>
									setCategoryNameId(e.target.value)
								}
							>
								<option>Please select</option>
								{categories &&
									categories.map((category) => (
										<option
											key={category._id}
											value={category._id}
										>
											{category.name}
										</option>
									))}
							</Form.Control>
						</Form.Group>
						<Form.Group controlId="categoryNameToChange">
							<Form.Label>Tên danh mục bạn sửa</Form.Label>
							<Form.Control
								type="name"
								placeholder="Tên danh mục..."
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</Form.Group>

						<Row>
							<Col md={6}>
								<Button variant="primary" type="submit" block>
									Chỉnh sửa danh mục
								</Button>
							</Col>
							<Col md={6}>
								<Button
									variant="danger"
									type="button"
									block
									onClick={() => {
										dispatch(
											deleteCategoryByIdAction(
												categoryNameId,
											),
										);
									}}
								>
									Xoá danh mục
								</Button>
							</Col>
						</Row>
					</Form>

					{(loading || loadingEdited) && <Loader />}
					{(error || errorEdited) && (
						<Message variant="danger">
							{error || errorEdited}
						</Message>
					)}
					{success && (
						<Message variant="success">{message.message}</Message>
					)}
				</Card.Body>
			)}
		</Card>
	);
};

EditCategory.propTypes = {
	categories: PropTypes.array,
};

export default EditCategory;
