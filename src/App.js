import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Nav from './components/Nav'
import Sidebar from './components/Sidebar'
import GlobalStyle from './styles/GlobalStyle'

import Home from './sections/Home'
import DigitalContent from './sections/DigitalContent'

export default function App() {
	return (
		<Router>
			<GlobalStyle />
			<Nav />
			<Sidebar />
			<Home />
			<DigitalContent to='/digital' />
		</Router>
	)
}
