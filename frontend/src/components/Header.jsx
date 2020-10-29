import React from "react";
import menuContainer from "./menuContainer";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/userActions";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const logoutHandler = () => {
		dispatch(logout());
	};

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
			<div className="m-auto logoBanner ">
				<h1 style={{ textAlign: "center" }}>
					Logo Thư viện số học viện kỹ thuật mật mã
				</h1>
			</div>
			<Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
				<Container>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="nav-fill w-100">
							<LinkContainer to="/">
								<Nav.Link>Trang chủ</Nav.Link>
							</LinkContainer>
							{elmNavDropdown()}
							{userInfo ? (
								<NavDropdown
									title={userInfo.name}
									id="username"
								>
									<LinkContainer to="/profile">
										<NavDropdown.Item>
											Thông tin tài khoản
										</NavDropdown.Item>
									</LinkContainer>
									<NavDropdown.Item onClick={logoutHandler}>
										Đăng xuất
									</NavDropdown.Item>
								</NavDropdown>
							) : (
								<LinkContainer to="/login">
									<Nav.Link>
										<i className="fas fa-user"></i> Đăng nhập
									</Nav.Link>
								</LinkContainer>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
