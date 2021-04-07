import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './components/Nav'

export default function App() {
	return (
		<Router>
			<Nav />
		</Router>
	)
}
