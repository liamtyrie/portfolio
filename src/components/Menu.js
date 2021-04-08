import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { navLinks } from '../config'
import { KEY_CODES } from '../utils/index'
import useOnClickOutside from '../utils/onClickOutside'

const StyledMenu = styled.div`
	display: none;
	@media (max-width: 1040px) {
		display: block;
	}
`

const StyledHamburgerButton = styled.button`
	display: none;
	@media (max-width: 1040px) {
		display: flex;
		justify-content: center;
		align-tiems: center;
		position: relative;
		z-index: 13;
		margin-right: 15px;
		padding: 15px;
		border: 0;
		background-color: transparent;
		color: inherit;
		text-transform: none;
		transition-timing-function: linear;
		transition-duration: 0.3s;
		transition-property: opacity, filter;
	}
	.ham-box {
		display: inline-block;
		position: relative;
		width: var(--hamburger-width);
		height: 20px;
		color: transparent;
	}
	.ham-box-inner {
		position: absolute;
		top: 50%;
		right: 0;
		width: var(--hamburger-width);
		height: 2px;
		border-radius: var(--border-radius);
		background-color: var(--text);
		transition-duration: 0.22s;
		transition-property: transform;
		transition-delay: ${(props) => (props.menuOpen ? `0.10s` : `0s`)};
		transform: rotate(${(props) => (props.menuOpen ? `1575deg` : `0deg`)});
		transition-timing-function: cubic-bezier(
			${(props) =>
				props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`}
		);
		&:before,
		&:after {
			content: '';
			display: block;
			position: absolute;
			left: auto;
			right: 0;
			width: var(--hamburger-width);
			height: 2px;
			border-radius: 4px;
			background-color: var(--text);
			transition-timing-function: ease;
			transition-duration: 0.15s;
			transition-property: transform;
		}
		&:before {
			width: ${(props) => (props.menuOpen ? `100%` : `120%`)};
			top: ${(props) => (props.menuOpen ? `0` : `-10px`)};
			opacity: ${(props) => (props.menuOpen ? 0 : 1)};
			transition: ${({ menuOpen }) =>
				menuOpen ? 'var(--ham-before-active)' : 'var(--ham-before)'};
		}
		&:after {
			width: ${(props) => (props.menuOpen ? `100%` : `80%`)};
			bottom: ${(props) => (props.menuOpen ? `0` : `-10px`)};
			transform: rotate(${(props) => (props.menuOpen ? `-90deg` : `0`)});
			transition: ${({ menuOpen }) =>
				menuOpen ? 'var(--ham-after-active)' : 'var(--ham-after)'};
		}
	}
`
const StyledSidebar = styled.aside`
	display: none;
	@media (max-width: 1040px) {
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		padding: 50px 10px;
		width: min(75vw, 400px);
		height: 100vh;
		outline: 0;
		background-color: rgba(0, 0, 0, 0.8);
		box-shadow: -10px 0px 30px -15px var(--white);
		z-index: 9;
		transform: translateX(${(props) => (props.menuOpen ? 0 : 100)}vw);
		visibility: ${(props) => (props.menuOpen ? 'visible' : 'hidden')};
		transition: var(--transition);
	}
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		flex-direction: column;
		color: var(--white);
		font-family: var(--font-ropa);
		text-align: center;
	}
	ol {
		padding: 0;
		margin: 0;
		list-style: none;
		width: 100%;
		li {
			position: relative;
			margin: 0 auto 20px;
			font-size: clamp(var(--fz-md), 4vw, var(--fz-lg));
			@media (max-width: 600px) {
				margin: 0 auto 10px;
			}
			&:before {
				display: block;
				margin-bottom: 5px;
				color: var(--white);
				font-size: var(--fz-md);
			}
		}
		a {
			display: inline-block;
			text-decoration: none;
			text-decoration-skip-ink: auto;
			color: inherit;
			position: relative;
			transition: var(--transition);
			cursor: pointer;
			&:hover,
			&:active,
			&:focus {
				color: var(--white);
				outline: 0;
			}
			width: 100%;
			padding: 3px 20px 20px;
		}
	}
`

const Menu = () => {
	const [menuOpen, setMenuOpen] = useState(false)

	const toggleMenu = () => setMenuOpen(!menuOpen)

	const buttonRef = useRef(null)
	const navRef = useRef(null)

	let menuFocusables
	let firstFocusableEl
	let lastFocusableEl

	const setFocusables = () => {
		menuFocusables = [
			buttonRef.current,
			...Array.from(navRef.current.querySelectorAll('a'))
		]
		firstFocusableEl = menuFocusables[0]
		lastFocusableEl = menuFocusables[menuFocusables.length - 1]
	}

	const handleBackwardTab = (e) => {
		if (document.activeElement === firstFocusableEl) {
			e.preventDefault()
			lastFocusableEl.focus()
		}
	}

	const handleForwardTab = (e) => {
		if (document.activeElement === lastFocusableEl) {
			e.preventDefault()
			firstFocusableEl.focus()
		}
	}

	const onKeyDown = (e) => {
		switch (e.key) {
			case KEY_CODES.ESCAPE:
			case KEY_CODES.ESCAPE_IE11: {
				setMenuOpen(false)
				break
			}

			case KEY_CODES.TAB: {
				if (menuFocusables && menuFocusables.length === 1) {
					e.preventDefault()
					break
				}
				if (e.shiftKey) {
					handleBackwardTab(e)
				} else {
					handleForwardTab(e)
				}
				break
			}

			default: {
				break
			}
		}
	}

	const onResize = (e) => {
		if (e.currentTarget.innerWidth > 768) {
			setMenuOpen(false)
		}
	}

	useEffect(() => {
		document.addEventListener('keydown', onKeyDown)
		window.addEventListener('resize', onResize)

		setFocusables()

		return () => {
			document.removeEventListener('keydown', onKeyDown)
			window.removeEventListener('resize', onResize)
		}
	}, [onKeyDown])

	const wrapperRef = useRef()
	useOnClickOutside(wrapperRef, () => setMenuOpen(false))

	return (
		<StyledMenu>
			<body className={menuOpen ? 'blur' : ''} />

			<div ref={wrapperRef}>
				<StyledHamburgerButton
					onClick={toggleMenu}
					menuOpen={menuOpen}
					ref={buttonRef}
				>
					<div className='ham-box'>
						<div className='ham-box-inner' />
					</div>
				</StyledHamburgerButton>

				<StyledSidebar
					menuOpen={menuOpen}
					aria-hidden={!menuOpen}
					tabIndex={menuOpen ? 1 : -1}
				>
					<nav ref={navRef}>
						{navLinks && (
							<ol>
								{navLinks.map(({ url, name }, i) => (
									<li key={i}>
										<Link to={url} onClick={toggleMenu}>
											{name}
										</Link>
									</li>
								))}
							</ol>
						)}
					</nav>
				</StyledSidebar>
			</div>
		</StyledMenu>
	)
}

export default Menu
