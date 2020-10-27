import React from "react";
import menuContainer from "./menuContainer";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
	// to hover menu dropdown
	// const [show, setShow] = useState(true);
	// const showDropdown = (e) => {
	// 	setShow(!show);
	// };
	// const hideDropdown = (e) => {
	// 	setShow(false);
	// };

	const elmNavDropdown = () =>
		menuContainer.map((elm, i) => (
			<NavDropdown
				key={i}
				title={elm.title}
				id={elm.idTitle}
				className="light-dropdown mx-auto"
			>
				{elm.subtitle &&
					elm.subtitle.map((navDropdownItem, i) => (
						<LinkContainer key={i} to={navDropdownItem.to}>
							<NavDropdown.Item>
								{navDropdownItem.sub}
							</NavDropdown.Item>
						</LinkContainer>
					))}
			</NavDropdown>
		));

	return (
		<header>
			<div className="logoBanner mx-auto">Logo</div>
			<Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
				<Container>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="nav-fill w-100">
							<LinkContainer to="/">
								<Nav.Link>Trang chủ</Nav.Link>
							</LinkContainer>
							{elmNavDropdown()}
							<LinkContainer to="/login">
								<Nav.Link>
									Đăng nhập
								</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
