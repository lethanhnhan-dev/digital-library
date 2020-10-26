import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import HomeScreen from "./screens/HomeScreen";
import NotFoundScreen from "./screens/NotFoundScreen";

const App = () => {
	return (
		<Router>
			<Header />
			<main>
				<Container>
					<SearchBar />
				</Container>
				<Switch>
					<Route path="/" exact component={HomeScreen} />
					<Route path="*" component={NotFoundScreen} />
				</Switch>
			</main>
		</Router>
	);
};

export default App;
