import React from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";


function Header(props) {
	const { user } = useContext(AuthContext);
	const {  dispatch } = useContext(AuthContext);
	const navigate = useNavigate()
	const handleLogout = () => {
		dispatch("LOG_OUT");
		localStorage.clear()
		navigate('/login')
	}

	return (
		<header className='topbar' data-navbarbg='skin6'>
			<nav className='navbar top-navbar navbar-expand-md'>
				<div className='navbar-header' data-logobg='skin6'>
					<a
						className='nav-toggler waves-effect waves-light d-block d-md-none'
						href='/#'>
						<i className='ti-menu ti-close'></i>
					</a>
					<div className='navbar-brand'>
						<Link to='/'>
			
							<span className='logo-text'>
					
								<span>Admin Page</span>
							</span>
						</Link>
					</div>
			
				</div>
				<div
					className='navbar-collapse collapse'
					id='navbarSupportedContent'>
					<ul className='navbar-nav float-left mr-auto ml-3 pl-1'>
						<li className='nav-item dropdown'>
				
							<div
								className='dropdown-menu'
								aria-labelledby='navbarDropdown'>
								<a className='dropdown-item' href='/#'>
									Action
								</a>
								<a className='dropdown-item' href='/#'>
									Another action
								</a>
								<div className='dropdown-divider'></div>
								<a className='dropdown-item' href='/#'>
									Something else here
								</a>
							</div>
						</li>
					</ul>
					<ul className='navbar-nav float-right'>
						<li className='nav-item dropdown'>
							<a
								className='nav-link dropdown-toggle'
								href='/#'
								data-toggle='dropdown'
								// aria-haspopup='true'
								aria-expanded='false'>
						
								<span className='ml-2 d-none d-lg-inline-block'>
									<span>Hello,</span>{' '}
									<span className='text-dark'>{user ? user.email : ''}</span>{' '}
									<i
										data-feather='chevron-down'
										className='svg-icon'></i>
								</span>
							</a>
							<div className='dropdown-menu dropdown-menu-right user-dd animated flipInY'>
								<a className='dropdown-item' href='/#' onClick={handleLogout}>
									<i
										data-feather='power'
										className='svg-icon mr-2 ml-1'></i>
									Logout
								</a>
							</div>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
}

export default Header;
