import styled from 'styled-components'

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
		justify-self: center;
		align-self: end;
		font-size: 90px;
		font-weight: 800;
		letter-spacing: -4.3px;

		@media (max-width: 1040px) {
			grid-row: 2/3;
			grid-column: 1/2;
			padding-left: 0vw;
			justify-self: center;
			font-size: 4rem;
            padding-bottom: 60px;
			align-self: start;
		}


	}

	.parag {
		grid-row: 2/3;
		grid-column: 1/2;
		color: var(--text);
		justify-self: center;
		font-size: 1.3em;
		letter-spacing: -0.7px;

		@media (max-width: 1040px) {
			grid-row: 2/3;
			grid-column: 1/2;
			align-self: center;
			text-align: center;
			font-size: 1em;
		}
	}

	.button {
		grid-row: 2/3;
		grid-column: 1/2;
		color: var(--text);
		font-family: var(--font-sans);
		font-size: var(--fz-xs);
		font-weight: 800;
		letter-spacing: -0.6px;
		justify-self: center;
		align-self: center;
		margin-bottom: 30vh;
		width: 200px;
		height: 50px;
		background-color: var(--sec-back);
		z-index: 2;
		border-radius: 10px;
		box-shadow: 10px 10px 30px 1px rgba(0, 0, 0, 0.24);
		-webkit-outline: none;
		transition: 0.25s;


        @media (max-width: 1040px) {
            grid-column: 1/2;
            grid-row: 2/3;

        }

		:hover {
			margin-left: 9px;
			margin-bottom: 28vh;
			transition: var(--transition);

            @media (max-width: 1040px) {
                margin-bottom: 18vh;
            }

		}
	}

	.polygon {
		grid-row: 2/3;
		grid-column: 1/2;
		background-color: transparent;
		width: 200px;
		height: 50px;
		justify-self: center;
		align-self: end;
		margin-bottom: 35.5vh;
		margin-left: 40px;
		z-index: 1;
		border-style: dotted;
		border-width: 5px;
		border-color: var(--sec-back);
        @media (max-width: 1040px) {
            grid-column: 1/2;
            grid-row: 3/4;
			align-self: center;
			margin-top: 0vh;
        }
	}

	.arrow {
		font-size: 8em;
		grid-row: 2/3;
		grid-column: 1/3;
		align-self: end;
		justify-self: center;

		@media(max-width: 1920px) {
			margin-bottom: 1vh;
		}

		@media (max-width: 1040px) {
			grid-row: 3/4;
			grid-column: 1/2;
		}
		
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






	.animationContainer {
		grid-row: 1/3;
		grid-column: 2/3;
		align-self: bottom;
		justify-self: center;
		margin-top: 0vh;
		width: 50vw;
		transition: 0.25s;

		&:hover {
			width: 70vw;d
		}

        @media (max-width: 1040px) {
            grid-column: 1/2;
            grid-row: 1/2;
            width: 100vw;
			height: auto;
			margin-left: 50px;
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
		background-color: rgba(0,0,0,0.9);
		background-position: center;
		background-repeat: no-repeat;
		padding: 0;
		margin: 0;
		grid-row: 1/3;
		grid-column: 2/3;
		max-width: 100vw;
		

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
		z-index: 5;
		transition: 0.25s;
		filter: brightness(0.7);

		&:hover {
			width: 50vw;
			filter: brightness(1);
			transition: 0.4s var(--transition);
		}

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
		padding-right: 5vw;
		width: 50vw;
		text-align: right;
		color: rgba(0,0,0,0.6);


		
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
		grid-column: 1/2;
		align-self: end;
		justify-self: right;
		z-index: 3;
		font-family: var(--font-sans);
		font-weight: 800;
		font-size: 2rem;
		color: rgba(0,0,0,0.8);
		margin-bottom: 18vh;
		margin-right: 7px;
		

		@media (max-width: 1040px) {
			grid-row: 3/4;
			grid-column: 1/2;
			padding: 0;
			color: var(--text);
			padding-left: 4vw;
			font-size: 3rem;
		}
	}
	.para3 {
		grid-row: 2/3;
		grid-column: 2/3;
		align-self: end;
		justify-self: left;
		z-index: 3;
		font-family: var(--font-sans);
		font-weight: 800;
		font-size: 2rem;
		color: #f2f2f2;
		margin-bottom: 18vh;
		margin-left: 7px;
		
		

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
		grid-row: 1/2;
		grid-column: 2/3;
		font-size: 5.3em;
		font-weight: 800;
		align-self: end;
		justify-self: left;
		margin-bottom: 10vh;
		margin-left: 5vw;
		z-index: 13;
		color: rgba(255,255,255,0.8);

		@media (max-width: 1040px) {
			font-size: 2.2em;
			margin-top: 6vh;
		}
	}

	.arrow2 {
		font-size: 8em;
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

const StyledController = styled.div`
	height: 100vh;
	display: grid;
	grid-template-columns: 20vw 20vw 20vw 20vw;
	grid-template-rows: 10vh 40vh 40vh;
	padding-left: 10vw;
	padding-right: 10vw;

	.title {
		grid-row: 1/2;
		grid-column: 1/5;
		align-self: start;
		justify-self: center;
		font-weight: 800;
		font-size: 50px;
		padding-top: 30px;
		letter-spacing: -1.9px;
	}

	.box1 {
		grid-row: 2/3;
		grid-column: 1/2;
		background-color: black;
		border-radius: 20px;
	}

	.logo1 {
		grid-row: 2/3;
		grid-column: 1/2;
		align-self: start;
		justify-self: center;
		width: 6.6vw;
		z-index: 5;
		padding-top: 10px;
		transition: 0.25s;
		filter: opacity(0.9) drop-shadow(0 0 10px var(--sec-back));

		&:hover {
			width: 12vw;
			z-index: 4;
			filter: drop-shadow(0 0 0 transparent);

			transition: var(--transition);
		}

		&:after {
			transition: var(--transition);
		}
	}

	.desc1 {
		grid-row: 2/3;
		grid-column: 1/2;
		align-self: end;
		justify-self: left;
		padding: 25px;
		font-weight: 300;
		font-size: var(--fz-xxs);
		color: var(--sec-back);
		&:hover {
			color: white;
			transition: var(--transition);
		}
	}

	.pic1 {
		grid-row: 2/3;
		grid-column: 1/2;
		width: 18vw;
		align-self: center;
		justify-self: center;
		border-radius: 20px;
		filter: blur(1px);
		filter: brightness(0.7);
		transition: 0.25s;
	}

	.pic1:hover {
		width: 25vw;
		height: auto;
		object-fit: cover;
		filter: blur(0px);
		filter: brightness(1);
		transition: 0.4s var(--transition);
		z-index: 21;
	}

	.title1 {
		grid-row: 2/3;
		grid-column: 1/2;
		color: white;
		justify-self: right;
		align-self: end;
		padding: 10px;
		margin-right: 10px;
	}

	.box2 {
		grid-row: 2/3;
		grid-column: 2/3;
		background-color: var(--sec-back);
		border-radius: 20px;
	}
	.title2 {
		grid-row: 2/3;
		grid-column: 2/3;
		color: white;
		justify-self: right;
		align-self: end;
		padding: 10px;
		margin-right: 10px;
	}
	.desc2 {
		grid-row: 2/3;
		grid-column: 2/3;
		align-self: end;
		justify-self: left;
		padding: 25px;
		font-weight: 400;
		font-size: var(--fz-xxs);
		color: black;
		&:hover {
			color: white;
			transition: var(--transition);
		}
	}
	.box3 {
		grid-row: 2/3;
		grid-column: 3/4;
		background-color: black;
		border-radius: 20px;
	}

	.logo3 {
		grid-row: 2/3;
		grid-column: 3/4;
		align-self: start;
		justify-self: center;
		width: 11vw;
		padding-top: 10px;
		transition: 0.25s;

		&:hover {
			width: 18vw;
			z-index: 20;

			transition: var(--transition);
		}

		&:after {
			transition: var(--transition);
		}
	}
	.title3 {
		grid-row: 2/3;
		grid-column: 3/4;
		color: white;
		justify-self: right;
		align-self: end;
		padding: 10px;
		margin-right: 10px;
	}

	.pic3 {
		grid-row: 2/3;
		grid-column: 3/4;
		width: 14vw;
		align-self: center;
		justify-self: center;
		border-radius: 20px;
		filter: blur(1px);
		filter: brightness(0.8);
		transition: 0.25s;
	}

	.pic3:hover {
		width: 25vw;
		height: auto;
		object-fit: cover;
		filter: blur(0px);
		filter: brightness(1);
		transition: 0.4s var(--transition);
		z-index: 20;
	}

	.desc3 {
		grid-row: 2/3;
		grid-column: 3/4;
		align-self: end;
		justify-self: left;
		padding: 25px;
		color: var(--sec-back);
		font-weight: 300;
		font-size: var(--fz-xxs);

		&:hover {
			color: white;
			transition: var(--transition);
		}
	}
	.box4 {
		grid-row: 2/3;
		grid-column: 4/5;
		background-color: var(--sec-back);
		border-radius: 20px;
	}
	.title4 {
		grid-row: 2/3;
		grid-column: 4/5;
		color: white;
		justify-self: right;
		align-self: end;
		padding: 10px;
		margin-right: 10px;
	}
	.desc4 {
		grid-row: 2/3;
		grid-column: 4/5;
		align-self: end;
		justify-self: left;
		padding: 25px;
		font-weight: 400;
		font-size: var(--fz-xxs);
		color: black;
		&:hover {
			color: white;
			transition: var(--transition);
		}
	}
	.box5 {
		grid-row: 3/4;
		grid-column: 1/2;
		background-color: var(--sec-back);
		border-radius: 20px;
	}
	.title5 {
		grid-row: 3/4;
		grid-column: 1/2;
		color: white;
		justify-self: right;
		align-self: end;
		padding: 10px;
		margin-right: 10px;
	}
	.desc5 {
		grid-row: 3/4;
		grid-column: 1/2;
		align-self: end;
		justify-self: left;
		padding: 25px;
		font-weight: 400;
		font-size: var(--fz-xxs);
		color: black;
		&:hover {
			color: white;
			transition: var(--transition);
		}
	}
	.box6 {
		grid-row: 3/4;
		grid-column: 2/3;
		background-color: black;
		border-radius: 20px;
	}
	.title6 {
		grid-row: 3/4;
		grid-column: 2/3;
		color: white;
		justify-self: right;
		align-self: end;
		padding: 10px;
		margin-right: 10px;
	}
	.desc6 {
		grid-row: 3/4;
		grid-column: 2/3;
		align-self: end;
		justify-self: left;
		padding: 25px;
		color: var(--sec-back);
		font-weight: 400;
		font-size: var(--fz-xxs);
		&:hover {
			color: white;
			transition: var(--transition);
		}
	}
	.box7 {
		grid-row: 3/4;
		grid-column: 3/4;
		background-color: var(--sec-back);
		border-radius: 20px;
	}
	.title7 {
		grid-row: 3/4;
		grid-column: 3/4;
		color: white;
		justify-self: right;
		align-self: end;
		padding: 10px;
		margin-right: 10px;
	}
	.desc7 {
		grid-row: 3/4;
		grid-column: 3/4;
		align-self: end;
		justify-self: left;
		padding: 25px;
		font-weight: 400;
		font-size: var(--fz-xxs);
		color: black;
		&:hover {
			color: white;
			transition: var(--transition);
		}
	}
	.box8 {
		grid-row: 3/4;
		grid-column: 4/5;
		background-color: black;
		border-radius: 20px;
	}
	.title8 {
		grid-row: 3/4;
		grid-column: 4/5;
		color: white;
		justify-self: right;
		align-self: end;
		padding: 20px;
	}
	.desc8 {
		grid-row: 3/4;
		grid-column: 4/5;
		align-self: end;
		justify-self: left;
		padding: 25px;
		font-weight: 400;
		font-size: var(--fz-xxs);
		color: var(--sec-back);
		&:hover {
			color: white;
			transition: var(--transition);
		}
	}
`

export { StyledHome, StyledDigital, StyledController }
