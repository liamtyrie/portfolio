import React, { useState, useEffect } from 'react'
import Lottie from 'lottie-react-web'

import TextTransition from 'react-text-transition'

import { RiArrowDownSFill } from 'react-icons/ri'

import animation from '../img/data.json'
import Shop from '../img/wellness_proj.jpg'
import Vape from '../img/vape-shop.jpg'
import Totaliser from '../img/totaliser-page.jpg'
import VapeWorldLogo from '../img/VapeworldLogo.png'
import TotaliserLogo from '../img/TotaliserLogo.png'

import {
	StyledHome,
	StyledDigital,
	StyledController
} from '../styles/StyledHome'
import { Link } from 'react-router-dom'

const splashHeadlines = ['Creative', 'Innovative', 'Inspiring', 'Professional']
const secondHeadlines = ['BESPOKE.', 'EYE CATCHING.', 'PROFESSIONAL.']

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
						springConfig={{ mass: 6, tension: 1000, friction: 40 }}
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
				<p className='parag'>Looking for a great website? Look no further.</p>
				<button className='button'>Contact Me</button>
				<RiArrowDownSFill
					className='arrow'
					onClick={moveDown}
					style={{ cursor: 'pointer' }}
				/>
				<polygon className='polygon'></polygon>
			</StyledHome>
			<StyledDigital>
				<div className='bg'></div>

				<img src={Shop} alt=' ' className='shop' />
				<polygon className='polygon'></polygon>
				<p className='para'>
					WITH MY PASSION FOR DESIGN AND CODE YOUR PRODUCT WILL BE
				</p>
				<TextTransition
					text={secondHeadlines[index % secondHeadlines.length]}
					springConfig={{ mass: 5, tension: 1000, friction: 40 }}
					direction='down'
					noOverflow='true'
					className='transition'
				/>
				<p className='para2'>TO SUIT YOUR</p>
				<p className='para3'> BUSINESS NEEDS.</p>
				<RiArrowDownSFill
					className='arrow2'
					onClick={moveDown2}
					style={{ cursor: 'pointer' }}
				/>
			</StyledDigital>
			<StyledController>
				<div className='box1'></div>
				<p className='title1'>1</p>
				<Link to='/vapeworld' className='logo1'>
					<img src={VapeWorldLogo} alt='' className='logo1' />
				</Link>
				<Link to='/vapeworld' className='pic1'>
					<img src={Vape} alt='' className='pic1' />
				</Link>
				<div className='desc1'>
					<Link to='/vapeworld'>E-COMMERCE STORE</Link>
				</div>

				<div className='box2'></div>
				<p className='title2'>2</p>
				<div className='desc2'>
					<Link to='/digital'>DIGITAL CONTENT DESIGN</Link>
				</div>

				<div className='box3'></div>
				<p className='title3'>3</p>
				<Link to='/totaliser' className='logo3'>
					<img src={TotaliserLogo} alt='' className='logo3' />
				</Link>
				<Link to='/totaliser' className='pic3'>
					<img src={Totaliser} alt='' className='pic3' />
				</Link>

				<div className='desc3'>
					<Link to='/totaliser'>BETTING ODDS CALCULATOR</Link>
				</div>
				<div className='box4'></div>
				<p className='title4'>4</p>
				<div className='desc4'>
					<Link to='/seo'>SEARCH ENGINE OPTIMISATION</Link>
				</div>
				<div className='box5'></div>
				<p className='title5'>5</p>
				<div className='desc5'>
					<Link to='/ecommerce'>E-COMMERCE</Link>
				</div>
				<div className='box6'></div>
				<p className='title6'>6</p>
				<div className='desc6'>
					<Link to='/caloriecount'>CALORIE INTAKE</Link>
				</div>
				<div className='box7'></div>
				<p className='title7'>7</p>
				<div className='desc7'>
					<Link to='/webdesign'>WEB DESIGN</Link>
				</div>
				<div className='box8'></div>
				<p className='title8'>8</p>
				<div className='desc8'>
					<Link to='/techblog'>TECH BLOG</Link>
				</div>
			</StyledController>
		</>
	)
}

export default Home
