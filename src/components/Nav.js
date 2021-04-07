import React, { useState, useEffect } from 'react'
import { Route, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import Menu from '../components/Menu'
import { loaderDelay } from '../utils/index'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import useScrollDirection from '../utils/scrollDirection'
import { navLinks } from '../config'

import logo from '../img/logo1.png'

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	top: 0;
	z-index: 11;
	padding: 0px 50px;
	width: 100vw;
	height: var(--nav-height);
	background-color: var(--pri-back);
	filter: none !important;
	pointer-events: auto !important;
	user-select: auto !important;
	backdrop-filter: blue(2px);
	transition: var(--transition);

	${(props) =>
		props.scrollDirection === 'up' &&
		!props.scrolledToTop &&
		css`
			height: var(--nav-scroll-height);
			transform: translateY(0px);
			background-color: transparent;
			box-shadow: 0 10px 30px -10px var(--pri-back);
		`}

	${(props) =>
		props.scrollDirection === 'down' &&
		!props.scrolledToTop &&
		css`
			height: var(--nav-scroll-height);
			transform: translateY(calc(var(--nav-scroll-height) * -1));
			box-shadow: 0 10px 30px -10px var(--pri-back);
		`};
	@media (max-width: 1080px) {
		padding: 0 40px;
	}
	@media (max-width: 768px) {
		padding: 0 25px;
	}
`

const StyledNav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	width: 100vw;
	color: var(--text);
	font-family: var(--font-sans);
	font-size: var(--fz-xs);
	z-index: 12;
	.logo {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 30px;
		margin-right: 20px;
		a {
			color: var(--text);

			&:hover {
				color: var(--text2);
			}
			width: 38px;
			height: auto;
			&:hover,
			&:focus {
				svg {
					fill: var(--text2);
				}
			}
			svg {
				fill: none;
				transition: var(--transition);
				user-select: none;
			}
		}
	}
`

const StyledLinks = styled.div`
	display: flex;
	align-items: center;

	@media (max-width: 1000px) {
		display: none;
	}
	ol {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0;
		margin: 0;
		list-style: none;

		li {
			margin: 0 5px;
			position: relative;
			font-size: var(--fz-xxs);
			font-weight: 400;
			a {
				padding: 30px;
				&:before {
					margin-right: 5px;
					color: var(--text);
					font-size: var(--fz-xxs);
					text-align: center;
				}
			}
		}
	}
`

const Nav = ({ isHome }) => {
	const [isMounted, setIsMounted] = useState(!isHome)
	const scrollDirection = useScrollDirection('down')
	const [scrolledToTop, setScrolledToTop] = useState(true)

	const handleScroll = () => {
		setScrolledToTop(window.pageYOffset < 50)
	}

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsMounted(true)
		}, 100)

		window.addEventListener('scroll', handleScroll)

		return () => {
			clearTimeout(timeout)
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const timeout = isHome ? loaderDelay : 0
	const fadeClass = isHome ? 'fade' : ''
	const fadeDownClass = isHome ? 'fadedown' : ''

	return (
		<StyledHeader
			scrollDirection={scrollDirection}
			scrolledToTop={scrolledToTop}
		>
			<StyledNav>
				<TransitionGroup component={null}>
					{isMounted && (
						<CSSTransition classNames={fadeClass} timeout={timeout}>
							{isHome ? (
								<img src={logo} alt=' ' className='logo' />
							) : (
								<Link to='/' aria-label='home' style={{ display: 'flex' }}>
									<img src={logo} alt=' ' className='logo' />
									<div
										style={{
											marginTop: '5px',
											letterSpacing: '-0.5px',
											fontSize: 'var(--fz-md)',
											fontWeight: 'var(--font-weight)'
										}}
									>
										LIAM TYRIE | SOFTWARE DEVELOPER
									</div>
								</Link>
							)}
						</CSSTransition>
					)}
				</TransitionGroup>

				<StyledLinks>
					<ol>
						<TransitionGroup component={null}>
							{isMounted &&
								navLinks &&
								navLinks.map(({ url, name }, i) => (
									<CSSTransition
										key={i}
										classNames={fadeDownClass}
										timeout={timeout}
									>
										<li
											key={i}
											style={{ transitionDelay: `${isHome ? i * 100 : 0}ms` }}
										>
											<Link to={url}>{name}</Link>
										</li>
									</CSSTransition>
								))}
						</TransitionGroup>
					</ol>
					<TransitionGroup component={null}>
						{isMounted && (
							<CSSTransition classNames={fadeDownClass} timeout={timeout}>
								<div
									style={{
										transitionDelay: `${isHome ? navLinks.length * 100 : 0}ms`
									}}
								></div>
							</CSSTransition>
						)}
					</TransitionGroup>
				</StyledLinks>

				<TransitionGroup component={null}>
					{isMounted && (
						<CSSTransition classNames={fadeClass} timeout={timeout}>
							<Menu />
						</CSSTransition>
					)}
				</TransitionGroup>
			</StyledNav>
		</StyledHeader>
	)
}

Nav.propTypes = {
	isHome: PropTypes.bool
}

export default Nav
