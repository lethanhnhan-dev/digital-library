import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import {
	//  useDispatch, 
	 useSelector } from "react-redux";
import UserProfileUpdater from "../../components/UserProfileUpdater";
// import Message from "../components/Message";
// import Loader from "../components/Loader";

const AdminProfileScreen = ({ location, history }) => {
	// const dispatch = useDispatch();
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;
	const userDetails = useSelector((state) => state.userDetails);

	return (
		<Fragment>
			<h1 className="my-1" style={{ textAlign: "center" }}>
				Chào mừng {userInfo.name} đã quay trở lại
			</h1>
			<Row>
				<UserProfileUpdater userInfo={userInfo} userDetails={userDetails} />
				<Col>Right</Col>
			</Row>
		</Fragment>
	);
};

export default AdminProfileScreen;
