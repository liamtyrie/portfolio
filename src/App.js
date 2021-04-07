import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './components/Nav'
import GlobalStyle from './styles/GlobalStyle'

export default function App() {
	return (
		<Router>
			<GlobalStyle />
			<Nav />
		</Router>
	)
}
