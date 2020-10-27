import React from "react";
import { Route, Switch } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import NotFoundScreen from "./screens/NotFoundScreen";
const Routes = () => {
	return (
		<Switch>
			<Route path="/" exact component={HomeScreen} />
			<Route path="*" component={NotFoundScreen} />
		</Switch>
	);
};

export default Routes;
