import React from "react";
import {
	Button,
	Col,
	Container,
	Form,
	FormControl,
	Row,
} from "react-bootstrap";

const SearchBar = () => {
	return (
		<div className="my-4 w-100">
			<Container>
				<Row>
					<Col md="10">
						<Form>
							<Row>
								<Col md="10" className="pt-2">
									<FormControl
										type="search"
										placeholder="Tìm tài liệu..."
										className="mr-sm-2"
									/>
								</Col>
								<Col className="pt-2">
									<Button type="submit" block>
										<svg
											width="2em"
											height="2em"
											viewBox="0 0 16 16"
											className="bi bi-search"
											fill="currentColor"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
											/>
											<path
												fillRule="evenodd"
												d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
											/>
										</svg>{" "}
										Tìm
									</Button>
								</Col>
							</Row>
						</Form>
					</Col>
					<Col>
						<Form inline className="mr-2">
							<Form.Group>
								<Form.File
									as={Button}
									id="exampleFormControlFile1" isValid
								></Form.File>
							</Form.Group>
						</Form>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default SearchBar;
