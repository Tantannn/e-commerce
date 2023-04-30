import React from 'react';
import { Link, useNavigate } from "react-router-dom";

function Menu(props) {
	return (
		<aside className='left-sidebar' data-sidebarbg='skin6'>
			<div className='scroll-sidebar' data-sidebarbg='skin6'>
				<nav className='sidebar-nav'>
					<ul id='sidebarnav'>
						<li className='sidebar-item'>
							{' '}
							<Link className='sidebar-link sidebar-link' to='/'>
								<i data-feather='home' className='feather-icon'></i>
								<span className='hide-menu'>Dashboard</span>
							</Link>
						</li>
						<li className='list-divider'></li>

						<li className='nav-small-cap'>
							<span className='hide-menu'>Components</span>
						</li>
						<li className='sidebar-item'>
							{' '}
							<Link className='sidebar-link sidebar-link' to='/new'>
								<i
									data-feather='settings'
									className='feather-icon'></i>
								<span className='hide-menu'>New Product</span>
							</Link>
						</li>
						<li className='sidebar-item'>
							{' '}
							<Link className='sidebar-link sidebar-link' to='/chat'>
								<i
									data-feather='message-square'
									className='feather-icon'></i>
								<span className='hide-menu'>Customer</span>
							</Link>
						</li>
						<li className='sidebar-item'>
							{' '}
							<Link
								className='sidebar-link has-arrow'
								to='#'
								aria-expanded='false'>
								<i data-feather='grid' className='feather-icon'></i>
								<span className='hide-menu'>Tables</span>
							</Link>
							<ul
								aria-expanded='false'
								className='collapse  first-level base-level-line'>		
								<li className='sidebar-item'>
									<Link to='/products' className='sidebar-link'>
										<span className='hide-menu'>
											Products
										</span>
									</Link>
								</li>
								<li className='sidebar-item'>
									<Link to='/history' className='sidebar-link'>
										<span className='hide-menu'>
											History
										</span>
									</Link>
								</li>
							</ul>
						</li>

						<li className='list-divider'></li>
						{/* <li className='nav-small-cap'>
							<span className='hide-menu'>Authentication</span>
						</li>

						<li className='sidebar-item'>
							{' '}
							<a
								className='sidebar-link sidebar-link'
								to='authentication-login1.html'
								aria-expanded='false'>
								<i data-feather='lock' className='feather-icon'></i>
								<span className='hide-menu'>Login</span>
							</a>
						</li>
						<li className='sidebar-item'>
							{' '}
							<a
								className='sidebar-link sidebar-link'
								to='authentication-register1.html'
								aria-expanded='false'>
								<i data-feather='lock' className='feather-icon'></i>
								<span className='hide-menu'>Register</span>
							</a>
						</li> */}
					</ul>
				</nav>
			</div>
		</aside>
	);
}

export default Menu;
