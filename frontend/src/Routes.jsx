import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminProfileScreen from "./screens/AdminScreen/AdminProfileScreen";
import CreateCategoryScreen from "./screens/AdminScreen/CreateCategoryScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import NotFoundScreen from "./screens/NotFoundScreen";
import RegisterScreen from "./screens/RegisterScreen";
import UploaderScreen from "./screens/UploaderScreen";
import UserProfileScreen from "./screens/UserScreen/UserProfileScreen";
import AdminRoute from "./utils/AdminRoute";

const Routes = () => {
	return (
		<Switch>
			<Route path="/" exact component={HomeScreen} />
			<Route path="/login" exact component={LoginScreen} />
			<Route path="/register" exact component={RegisterScreen} />
			<Route path="/upload" exact component={UploaderScreen} />
			<Route path="/profile" exact component={UserProfileScreen} />
			{/* Admin Route*/}
			<AdminRoute
				path="/admin/profile"
				exact
				component={AdminProfileScreen}
			/>
			<AdminRoute
				path="/admin/create-category"
				exact
				component={CreateCategoryScreen}
			/>
			<Route path="*" component={NotFoundScreen} />
		</Switch>
	);
};

export default Routes;
