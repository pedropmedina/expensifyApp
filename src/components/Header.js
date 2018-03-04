import React from 'react';
import { NavLink } from 'react-router-dom';

const active = {
	color: 'blue',
	fontWeight: 'bold',
};

const Header = () => (
	<header>
		<h1>Expensify</h1>
		<nav>
			<NavLink exact to="/" activeStyle={active}>
				Dashbord
			</NavLink>
			<NavLink to="/create" activeStyle={active}>
				Create Expense
			</NavLink>
			<NavLink to="/edit" activeStyle={active}>
				Edit Expense
			</NavLink>
			<NavLink to="/help" activeStyle={active}>
				Help
			</NavLink>
		</nav>
	</header>
);

export default Header;
