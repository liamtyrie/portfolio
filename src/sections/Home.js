import React, { useState, useEffect } from 'react'
import Lottie from 'lottie-react-web'
import styled from 'styled-components'
import TextTransition, { presets } from 'react-text-transition'

import { BiDownArrow } from 'react-icons/bi'

import animation from '../img/data.json'
import Shop from '../img/vape-shop.jpg'

const splashHeadlines = ['CREATIVE', 'INNOVATIVE', 'INSPIRING', 'PROFESSIONAL']
const secondHeadlines = ['BESPOKE.', 'EYE CATCHING.', 'PROFESSIONAL.']

const StyledHome = styled.div`
	height: 100vh;
	display: grid;
	grid-template-rows: 50vh 50vh;
	grid-template-columns: 50vw 50vw;
	@media (max-width: 1040px) {
		display: grid;
		grid-template-rows: 30vh 30vh 30vh;
        grid-template-columns 100vw;
	}

	.roller {
		grid-row: 1/2;
		grid-column: 1/2;
		color: var(--text);
		justify-self: left;
		padding-left: 15vw;
		align-self: end;
		font-size: 90px;
		font-weight: 800;
		letter-spacing: -4.3px;

		@media (max-width: 1040px) {
			grid-row: 1/2;
			grid-column: 1/2;
			padding-left: 0vw;
			justify-self: center;
			font-size: 3rem;
            padding-bottom: 60px;
		}
	}

	.button {
		grid-row: 2/3;
		grid-column: 1/3;
		color: var(--text);
		font-family: var(--font-sans);
		font-size: var(--fz-xs);
		font-weight: 800;
		letter-spacing: -0.6px;
		justify-self: center;
		align-self: top;
		margin-top: 280px;
		width: 200px;
		height: 50px;
		background-color: var(--sec-back);
		z-index: 2;
		border-radius: 10px;
		box-shadow: 10px 10px 30px 1px rgba(0, 0, 0, 0.24);
		-webkit-outline: none;

        @media (max-width: 1040px) {
            grid-column: 1/2;
            grid-row: 3/4;
            margin-top: 180px;

        }

		:hover {
			margin-left: 9px;
			margin-top: 289px;
			transition: var(--transition);

            @media (max-width: 1040px) {
                margin-top: 189px;
            }
		}
	}

	.arrow {
		font-size: 3em;
		grid-row: 2/3;
		grid-column: 1/3;
		align-self: end;
		justify-self: center;
		
		animation: action 1s infinite alternate;
		-webkit-animation: action 1s infinite alternate;
	}
	@-webkit-keyframes action {
		0% { transform: translateY(0)}
		100% { transform: translateY(-20px)}
	}
	@keyframes action {
		0% {transform: translateY(0)}
		25% { color: black }
		30% { color: grey}
		35% { color: white}
		50% { color: grey}
		75% { color: black }
		80% { color: grey }
		85% { color: white }
		90% { color: grey }
		100% { transform: translateY(-20px)}
	}




	.polygon {
		grid-row: 2/3;
		grid-column: 1/3;
		background-color: transparent;
		width: 200px;
		height: 50px;
		justify-self: center;
		align-self: top;
		margin-top: 300px;
		margin-left: 40px;
		z-index: 1;
		border-style: dotted;
		border-width: 5px;
		border-color: var(--sec-back);
        @media (max-width: 1040px) {
            grid-column: 1/2;
            grid-row: 3/4;
            margin-top: 200px;
        }
	}

	.animationContainer {
		grid-row: 1/3;
		grid-column: 2/3;
		align-self: bottom;
		justify-self: center;
		margin-top: -10vh;
		padding-right: 10vw;
		width: 40vw;

        @media (max-width: 1040px) {
            grid-column: 1/2;
            grid-row: 2/3;
            width: 100vw;
            margin-top: 0vh;
        }
	}
`

const StyledDigital = styled.div`
	height: 100vh;
	display: grid;
	grid-template-rows: 30vh 70vh;
	grid-template-columns: 50vw 50vw;

	@media (max-width: 1040px) {
		grid-template-rows: 20vh 60vh 20vh;
		grid-template-columns: 100vw;
	}

	.bg {
		background-image: url(/img/grain_bg_black.jpg);
		background-position: center;
		padding: 0;
		margin: 0;
		grid-row: 1/3;
		grid-column: 2/3;
		max-width: 100vw;
		height: auto;

		@media (max-width: 1040px) {
			grid-row: 2/3;
			grid-column: 1/2;
			max-width: 100vw;
			padding: 0;
			margin: 0;
			
		}
	}

	.shop {
		grid-row: 1/3;
		grid-column: 1/3;
		width: 40vw;
		height: auto;
		align-self: center;
		justify-self: center;
		z-index: 2;

		@media (max-width: 1040px) {
			grid-row: 1/3;
			grid-column: 1/2;
			width: 700px;
			align-self: start;
			justify-self: center;
			margin-top: 10vh;

		}
	}

	.polygon {
		grid-row: 1/3;
		grid-column: 1/3;
		width: 40vw;
		align-self: center;
		justify-self: center;
		margin-left: 80px;
		margin-top: 80px;
		background-color: transparent;
		border-style: dotted;
		border-width: 5px;
		border-color: var(--sec-back);
		height: 40vh;

		@media (max-width: 1040px) {
			grid-row: 1/3;
			grid-column: 1/2;
			width: 700px;
			height: 360px;
			align-self: start;
			justify-self: center;
			margin-top: 15vh;
	
		}
	}



	.para {
		grid-row: 1/3;
		grid-column: 1/3;
		align-self: top;
		justify-self: left;
		z-index: 3;
		font-family: var(--font-sans);
		font-weight: 800;
		font-size: 2rem;
		padding: 40px;
		padding-top: 10vh;
		padding-right: 10vw;
		width: 50vw;


		
		@media(max-width: 1040px) {
			grid-row: 2/3;
			grid-column: 1/2;
			font-size: 3rem;
			padding: 20px;
			padding-top: 23vh;
			color: #fefefe;
		}
	
	}

	.para2 {
		grid-row: 2/3;
		grid-column: 2/3;
		align-self: center;
		justify-self: left;
		z-index: 3;
		font-family: var(--font-sans);
		font-weight: 800;
		font-size: 2rem;
		color: #f2f2f2;s
		padding: 80px;
		padding-top: 40vh;
		padding-left: 5vw;

		@media (max-width: 1040px) {
			grid-row: 3/4;
			grid-column: 1/2;
			padding: 0;
			color: var(--text);
			padding-left: 4vw;
			font-size: 3rem;
		}
	}

	.transition {
		font-size: 1.5em;
		margin-top: 16vh;

		@media (max-width: 1040px) {
			font-size: 2.2em;
			margin-top: 6vh;
		}
	}

	.arrow2 {
		font-size: 3em;
		grid-row: 2/3;
		grid-column: 1/3;
		align-self: end;
		margin-bottom: 70px;
		justify-self: center;

		animation: action 1s infinite alternate;
		-webkit-animation: action 1s infinite alternate;
	}
	@-webkit-keyframes action {
		0% { transform: translateY(0)}
		100% { transform: translateY(-20px)}
	}
	@keyframes action {
		0% {transform: translateY(0)}
		33% { color: var(--sec-back) }
		66% { color: grey}

		100% { transform: translateY(-20px)}
	}
	}

	.button {
		grid-row: 2/3;
		grid-column: 1/3;
		color: var(--text);
		font-family: var(--font-sans);
		font-size: var(--fz-xs);
		font-weight: 800;
		letter-spacing: -0.6px;
		justify-self: center;
		align-self: end;
		width: 120px;
		height: 40px;
		margin-bottom: 30px;
		background-color: var(--sec-back);
		z-index: 2;
		border-radius: 10px;
		box-shadow: 10px 10px 30px 1px rgba(0, 0, 0, 0.24);
		-webkit-outline: none;
		z-index: 4;

        @media (max-width: 1040px) {
            grid-column: 1/2;
            grid-row: 3/4;
            margin-top: 180px;

        }

		:hover {
			margin-left: 9px;
			margin-bottom: 25px;
			transition: var(--transition);

            @media (max-width: 1040px) {
                margin-top: 189px;
            }
		}
	}

	.polygon2 {
		grid-row: 2/3;
		grid-column: 1/3;
		background-color: transparent;
		width: 120px;
		height: 40px;
		justify-self: center;
		align-self: end;
		margin-left: 40px;
		margin-bottom: 15px;
		z-index: 3;
		border-style: dotted;
		border-width: 5px;
		border-color: var(--sec-back);
        @media (max-width: 1040px) {
            grid-column: 1/2;
            grid-row: 3/4;
            margin-top: 200px;
        }
	}
		
`

const Home = () => {
	const [index, setIndex] = useState(0)

	useEffect(() => {
		const intervalld = setInterval(() => setIndex((index) => index + 1), 2000)
		return () => clearTimeout(intervalld)
	}, [])

	const moveDown = (e) => {
		let pageHeight = window.innerHeight
		window.scrollBy({ top: pageHeight, behavior: 'smooth' })
	}
	const moveDown2 = (e) => {
		let pageHeight = window.innerHeight
		window.scrollBy({ top: pageHeight, behavior: 'smooth' })
	}

	return (
		<>
			<StyledHome>
				<div className='roller'>
					<TextTransition
						text={splashHeadlines[index % splashHeadlines.length]}
						springConfig={{ mass: 3, tension: 1000, friction: 40 }}
						direction='down'
						noOverflow='true'
					/>
				</div>
				<div className='animationContainer'>
					<Lottie
						options={{
							animationData: animation,
							loop: true
						}}
					/>
				</div>
				<button className='button' onClick={moveDown}>
					LET'S START
				</button>
				<BiDownArrow className='arrow' />
				<polygon className='polygon'></polygon>
			</StyledHome>
			<StyledDigital>
				<div className='bg'></div>

				<img src={Shop} alt=' ' className='shop' />
				<polygon className='polygon'></polygon>
				<p className='para'>
					WITH MY PASSION FOR DESIGN AND CODE YOUR PRODUCT WILL BE
					<TextTransition
						text={secondHeadlines[index % secondHeadlines.length]}
						springConfig={{ mass: 3, tension: 1000, friction: 40 }}
						direction='down'
						noOverflow='true'
						className='transition'
					/>
				</p>
				<p className='para2'>TO SUIT YOUR BUSINESS NEEDS.</p>
				<BiDownArrow className='arrow2' />
				<button className='button' onClick={moveDown2}>
					READ MORE
				</button>
				<polygon className='polygon2'></polygon>
			</StyledDigital>
		</>
	)
}

export default Home
