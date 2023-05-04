import React from 'react';
import { Link, Navigate, useNavigate } from "react-router-dom";
function Menu(props) {
	let navigate = useNavigate();

	return (
		<aside className='left-sidebar' data-sidebarbg='skin6'>
			<div className='scroll-sidebar' data-sidebarbg='skin6'>
				<nav className='sidebar-nav'>
					<ul id='sidebarnav'>
						<li className='sidebar-item'>
							{' '}
							<Link to='/'>
								<p className='sidebar-link sidebar-link'>
									<i data-feather='home' className='feather-icon'></i>
									<span className='hide-menu'>Dashboard</span>
								</p>
							</Link>
						</li>
						<li className='list-divider'></li>

						<li className='nav-small-cap'>
							<span className='hide-menu'>Components</span>
						</li>
						<li className='sidebar-item'>
							{' '}
							<Link to='/new'>
								<p className='sidebar-link sidebar-link' >
									<i
										data-feather='settings'
										className='feather-icon'></i>
									<span className='hide-menu'>New Product</span>
								</p>
							</Link>
						</li>
						<li className='sidebar-item'>
							{' '}
							<Link to='/chat'>
								<p className='sidebar-link sidebar-link' >
									<i
										data-feather='message-square'
										className='feather-icon'></i>
									<span className='hide-menu'>Customer</span>
								</p>
							</Link>
						</li>
						<li className='sidebar-item'>
							{' '}
							<a
								className='sidebar-link has-arrow'
								href='/#'
								aria-expanded='false'>
								<i data-feather='grid' className='feather-icon'></i>
								<span className='hide-menu'>Tables</span>
							</a>
							<ul
								className='collapse  first-level base-level-line'>		
								<li className='sidebar-item'>
									<Link to='/products'>
										<p className='sidebar-link'>
											<span className='hide-menu'>
												Products
											</span>
										</p>
									</Link>
								</li>
								<li className='sidebar-item'>
									<Link to='/history'>
										<p  className='sidebar-link'>
											<span className='hide-menu'>
												History
											</span>
										</p>
									</Link>
								</li>
							</ul>
						</li>

						<li className='list-divider'></li>

					</ul>
				</nav>
			</div>
		</aside>
	);
}

export default Menu;
