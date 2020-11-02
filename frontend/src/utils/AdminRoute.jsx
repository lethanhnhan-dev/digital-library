import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const AdminRoute = ({ component: Component, ...rest }) => {
	const userLogin = useSelector((state) => state.userLogin);

	const { userInfo: isAdmin } = userLogin;

	return (
		<Route
			{...rest}
			render={(props) =>
				isAdmin ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: props.location },
						}}
					/>
				)
			}
		/>
	);
};

export default AdminRoute;
