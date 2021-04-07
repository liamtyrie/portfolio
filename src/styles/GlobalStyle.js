import { createGlobalStyle, css } from 'styled-components'
import TransitionStyles from './TransitionStyles'
import PrismStyles from './PrismStyles'

const mixins = {
	flexCenter: css`
		display: flex;
		justify-content: center;
		align-items: center;
	`,

	flexBetween: css`
		display: flex;
		justify-content: space-between;
		align-items: center;
	`,

	link: css`
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
			color: black;
			outline: 0;
		}
	`,

	inlineLink: css`
		display: inline-block;
		text-decoration: none;
		text-decoration-skip-ink: auto;
		position: relative;
		transition: var(--transition);
		cursor: pointer;
		color: var(--text);
		&:hover,
		&:focus,
		&:active {
			color: var(--text2);
			outline: 0;
			&:after {
				width: 100%;
			}
			& > * {
				color: var(--text2) !important;
				transition: var(--transition);
			}
		}
		&:after {
			content: '';
			display: block;
			width: 0;
			height: 1px;
			position: relative;
			bottom: 0.37em;
			background-color: var(--sec-back);
			transition: var(--transition);
			opacity: 0.5;
		}
	`,

	smallButton: css`
		color: black;
		background-color: transparent;
		border: 1px solid var(--text);
		border-radius: var(--border-radius);
		padding: 0.75rem 1rem;
		font-size: var(--fz-xs);
		font-family: var(--font-sans);
		line-height: 1;
		text-decoration: none;
		cursor: pointer;
		transition: var(--transition);
		&:hover,
		&:focus,
		&:active {
			background-color: var(--sec-back);
		}
		&:after {
			display: none !important;
		}
	`,

	bigButton: css`
		color: var(--text);
		background-color: transparent;
		border: 1px solid var(--text);
		border-radius: var(--border-radius);
		padding: 1.25rem 1.75rem;
		font-size: var(--fz-sm);
		font-family: var(--font-sans);
		line-height: 1;
		text-decoration: none;
		cursor: pointer;
		transition: var(--transition);
		&:hover,
		&:focus,
		&:active {
			background-color: var(--sec-back);
		}
		&:after {
			display: none !important;
		}
	`,

	boxShadow: css`
		box-shadow: 0 10px 30px -15px var(--sec-back);
		transition: var(--transition);
		&:hover,
		&:focus {
			box-shadow: 0 20px 30px -15px var(--tri-back);
		}
	`
}

const theme = {
	bp: {
		mobileS: `max-width: 330px`,
		mobileM: `max-width: 400px`,
		mobileL: `max-width: 480px`,
		tabletS: `max-width: 600px`,
		tabletL: `max-width: 768px`,
		desktopXS: `max-width: 900px`,
		desktopS: `max-width: 1080px`,
		desktopM: `max-width: 1200px`,
		desktopL: `max-width: 1400px`
	},

	mixins
}
const GlobalStyle = createGlobalStyle`

:root {
    --pri-back: #fff;
    --sec-back: #f4f4f4;
    --tri-back: #EAEAEA;
    --text: #333333;
    --text2: #000000;
    --font-sans: 'Catamaran', sans-serif;
    --font-weight: 500;
    --fz-xxs: 12px;
    --fz-xs: 14px;
    --fz-sm: 16px;
    --fz-md: 18px;
    --fz-lg: 20px;
    --fz-xl: 24px;
    --fz-xxl: 28px;
    --border-radius: 4px;
    --nav-height: 80px;
    --nav-scroll-height: 70px;
    --tab-height: 42px;
    --tab-width: 120px;
    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    --hamburger-width: 30px;
    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;   
}

html {
    box-sizing: border-box;
    width: 100%;
}
*,
*:before,
*:after {
    box-sizing: inherit;
}
::selection {
    background-color: var(--pri-back);
    color: var(--text2);
}
body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -mox-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--pri-back);
    color: var(--text);
    font-family: var(--font-sans);
    font-size: var(--fz-md);
    line-height: 1.3;
    @media (max-width: 480px) {
        font-size: var(--fz-lg);
    }
    &.hidden {
        overflow: hidden;
    }
    &.blur {
        overflow: hidden;
        header {
            background-color: transparent;
        }
        #content > * {
            filter: blue(5px) brightness(0.7);
            transition: var(--transition);
            pointed-events: none;
            user-select: none;
        }
    }
}

::-webkit-scrollbar {
    display: none;
}
#root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
}
main {
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    padding: 200px 150px;
    @media (max-width: 768px) {
        padding: 200px 100px;
    }
    @media (max-width: 480px) {
        padding: 125px 25px;
    }
    &.fillHeight {
        padding: 0 150px;
        @media (max-width: 1080px) {
            padding: 0 100px;
        }
        @media (max-width: 768px) {
            padding: 0 50px;
        }
        @media (max-width: 480px) {
            padding: 0 25px;
        }
    }
}
section {
    margin: 0 auto;
    padding: 0px 0;
    max-width: 95vw;
    @media (max-width: 768px) {
        padding: 80px 0
    }
    @media (max-width: 480px) {
        padding: 60px 0;
    }
}
h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0 0 10px 0;
    font-weight: 300;
    color: var(--text);
    line-height: 1.1;
    font-family: var(--font-sans);
}

.big-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 80px);
}
.medium-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 60px);
}
img,{
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
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
    &:focus {
      color: var(--text2);
    }
    &.inline-link {
      		display: inline-block;
		text-decoration: none;
		text-decoration-skip-ink: auto;
		position: relative;
		transition: var(--transition);
		cursor: pointer;
		color: var(--text);
		&:hover,
		&:focus,
		&:active {
			color: var(--text2);
			outline: 0;
			&:after {
				width: 100%;
			}
			& > * {
				color: var(--text2) !important;
				transition: var(--transition);
			}
		}
		&:after {
			content: '';
			display: block;
			width: 0;
			height: 1px;
			position: relative;
			bottom: 0.37em;
			background-color: var(--sec-back);
			transition: var(--transition);
			opacity: 0.5;
		}
    }
  }
  button {
      cursor: pointer;
      border: 0;
      border-radius: 0;
  }
  input, textarea {
      border-radius: 0;
      outline: 0;
      &:focus {
          outline: 0;
      }
      &:focus,
      &:active {
          &::placeholder {
              opacity: 0.5;
          }
      }
  }
  p {
      margin: 0 0 15px 0;
      &:last-child,
      &:last-of-type {
          margin: 0;
      }
      & > a {
          ${theme} => theme.mixins.inlineLink};
      }
      & > code {
          background-color: var(--sec-back);
          color: var(--text2);
          font-size: var(--fz-sm);
          border-radius: var(--border-radius);
          padding: 0.3em 0.5em;
      }
  }
  ul {
    &.fancy-list {
        padding: 0;
        margin: 0;
        list-style: none;
        font-size: var(--fz-lg);
        li {
          position: relative;
          padding-left: 30px;
          margin-bottom: 10px;
          &:before {
            content: '▹';
            position: absolute;
            left: 0;
            color: var(--text2);
          }
        }
      }
    }
    blockquote {
      border-left-color: var(--text);
      border-left-style: solid;
      border-left-width: 1px;
      margin-left: 0px;
      margin-right: 0px;
      padding-left: 1.5rem;
      p {
        font-style: italic;
        font-size: 24px;
      }
    }
    hr {
      background-color: var(--sec-back);
      height: 1px;
      border-width: 0px;
      border-style: initial;
      border-color: initial;
      border-image: initial;
      margin: 1rem;
    }
    code {
      font-family: var(--font-mono);
      font-size: var(--fz-md);
    }
    #logo {
      color: var(--text2);
    }
    .overline {
      color: var(--text);
      font-family: var(--font-sans);
      font-size: var(--fz-md);
      font-weight: 400;
    }
    .subtitle {
      color: var(--text);
      margin: 0 0 20px 0;
      font-size: var(--fz-md);
      font-family: var(--font-sans);
      font-weight: 400;
      line-height: 1.5;
      @media (max-width: 1080px) {
        font-size: var(--fz-sm);
      }
      @media (max-width: 768px) {
        font-size: var(--fz-xs);
      }
      a {
                display: inline-block;
          text-decoration: none;
          text-decoration-skip-ink: auto;
          position: relative;
          transition: var(--transition);
          cursor: pointer;
          color: var(--text);
          &:hover,
          &:focus,
          &:active {
              color: var(--text2);
              outline: 0;
              &:after {
                  width: 100%;
              }
              & > * {
                  color: var(--text2) !important;
                  transition: var(--transition);
              }
          }
          &:after {
              content: '';
              display: block;
              width: 0;
              height: 1px;
              position: relative;
              bottom: 0.37em;
              background-color: var(--sec-back);
              transition: var(--transition);
              opacity: 0.5;
          }
        line-height: 1.5;
      }
    }
    .breadcrumb {
      display: flex;
      align-items: center;
      margin-bottom: 50px;
      color: var(--text);
      .arrow {
        display: block;
        margin-right: 10px;
        padding-top: 4px;
      }
      a {
                display: inline-block;
          text-decoration: none;
          text-decoration-skip-ink: auto;
          position: relative;
          transition: var(--transition);
          cursor: pointer;
          color: var(--text);
          &:hover,
          &:focus,
          &:active {
              color: var(--text2);
              outline: 0;
              &:after {
                  width: 100%;
              }
              & > * {
                  color: var(--text) !important;
                  transition: var(--transition);
              }
          }
          &:after {
              content: '';
              display: block;
              width: 0;
              height: 1px;
              position: relative;
              bottom: 0.37em;
              background-color: var(--sec-back);
              transition: var(--transition);
              opacity: 0.5;
          }
        font-family: var(--font-sans);
        font-size: var(--fz-sm);
        font-weight: 600;
        line-height: 1.5;
        text-transform: uppercase;
        letter-spacing: 0.1em;
      }
    }
    .gatsby-image-outer-wrapper {
      height: 100%;
    }
    ${TransitionStyles};
    ${PrismStyles};
    
  `

export default GlobalStyle
