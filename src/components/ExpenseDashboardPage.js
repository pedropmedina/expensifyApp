import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

class ExpenseDashboardPage extends React.Component {
	render() {
		return (
			<div>
				<ExpenseListFilters />
				<ExpenseList />
			</div>
		);
	}
}

export default ExpenseDashboardPage;

// BrowerRouter as Router	<Router></Router> -> expects only one child
// Route <Route [exact] path='/' componet={} />
// Switch <Switch></Switch> -> could work as the child expected by Router
// Link <Link to='/' ></Link>
// NavLink <NavLink to="/" activaClassName=></NavLink> -> use in navigations
