import React from 'react'
import styled from 'styled-components'

import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const StyledSidebar = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	position: fixed;
	z-index: 10;
	padding: 0px 0px;
	left: 0;
	width: 65px;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.1);
	filter: none !important;
	pointer-events: auto !important;
	user-select: auto !important;
	backdrop-filter: blur(2px);
	transition: var(--transition);

	li {
		margin: 0 5px;
		list-style: none;
		font-size: 35px;
		color: grey;

		a {
			padding: 30px;
		}
	}

	@media (max-width: 1040px) {
		display: none;
	}

	svg {
		transition: 0.25s;
		&:hover {
			font-size: 50px;
			transition: var(--transition);
			color: var(--sec-back);
			filter: brightness(0.8);
			border-style: solid;
			border-width: 1px;
		}
	}
`

const Sidebar = () => {
	const socialLinks = [
		{
			name: 'Facebook',
			url: '//www.facebook.com/liamtyriewebdesign',
			icon: <FaFacebook />,
			className: 'facebook'
		},
		{
			name: 'Instagram',
			url: '//www.instagram.com/liamtyriedesign',
			icon: <FaInstagram />,
			className: 'instagram'
		},
		{
			name: 'Github',
			url: '//www.github.com/liamtyrie',
			icon: <FaGithub />
		}
	]

	return (
		<StyledSidebar>
			<>
				{socialLinks.map(({ url, icon }, i) => (
					<div key={i} className='links'>
						<li key={i}>
							<a href={url} target='_blank' rel='noopener noreferrer'>
								{icon}
							</a>
						</li>
					</div>
				))}
			</>
		</StyledSidebar>
	)
}

export default Sidebar
