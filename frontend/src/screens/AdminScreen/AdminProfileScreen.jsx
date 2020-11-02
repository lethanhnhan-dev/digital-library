import React, { Fragment, useState } from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import {
	//  useDispatch,
	useSelector,
} from "react-redux";
import CreateCategory from "../../components/Admin/CreateCategory";
import EditCategory from "../../components/Admin/EditCategory";
import UserProfileUpdater from "../../components/UserProfileUpdater";
// import Message from "../components/Message";
// import Loader from "../components/Loader";

const AdminProfileScreen = ({ location, history }) => {
	// const dispatch = useDispatch();
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;
	const userDetails = useSelector((state) => state.userDetails);

	const [key, setKey] = useState("userInfo");

	return (
		<Fragment>
			<h1 className="my-4" style={{ textAlign: "center" }}>
				Chào mừng {userInfo.name} đã quay trở lại
			</h1>
			<Row>
				<Col>
					<Tab.Container
						id="admin-tabs"
						defaultActiveKey={key}
						onSelect={(k) => setKey(k)}
					>
						<Row>
							<Col sm={3}>
								<Nav variant="pills" className="flex-column">
									<Nav.Item>
										<Nav.Link
											eventKey="userInfo"
											className="text-dark"
										>
											Thông tin tài khoản
										</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link
											eventKey="addCategory"
											className="text-dark"
										>
											Thêm danh mục tài liệu
										</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link
											eventKey="editCategory"
											className="text-dark"
										>
											Chinh sua danh muc tai lieu
										</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link
											eventKey="addUserAccount"
											className="text-dark"
										>
											Thêm tài khoản cho sinh viên
										</Nav.Link>
									</Nav.Item>
								</Nav>
							</Col>
							<Col sm={9}>
								<Tab.Content>
									<Tab.Pane eventKey="userInfo">
										<UserProfileUpdater
											userInfo={userInfo}
											userDetails={userDetails}
											col={12}
										/>
									</Tab.Pane>
									<Tab.Pane eventKey="addCategory">
										<CreateCategory />
									</Tab.Pane>
									<Tab.Pane eventKey="editCategory">
										<EditCategory />
									</Tab.Pane>
									<Tab.Pane eventKey="addUserAccount">
										3
									</Tab.Pane>
								</Tab.Content>
							</Col>
						</Row>
					</Tab.Container>
				</Col>
			</Row>
		</Fragment>
	);
};

export default AdminProfileScreen;
