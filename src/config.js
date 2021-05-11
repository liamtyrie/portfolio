module.exports = {
	email: 'liam@liamtyrie.com',

	navLinks: [
		{
			name: 'DIGITAL CONTENT',
			url: 'digital'
		},
		{
			name: 'SEO',
			url: '/services'
		},
		{
			name: 'E-COMMERCE',
			url: '/portfolio'
		},
		{
			name: 'WEB DESIGN',
			url: '/contact'
		},
		{
			name: 'PORTFOLIO',
			url: '/portfolio'
		},
		{
			name: 'WORK WITH ME',
			url: '/contact'
		}
	],

	srConfig: (delay = 200, viewFactor = 0.25) => ({
		origin: 'bottom',
		distance: '20px',
		duration: 500,
		delay,
		rotate: { x: 0, y: 0, z: 0 },
		opacity: 0,
		scale: 1,
		easing: 'cubic-bezier(0.945, 0.045, 0.355, 1)',
		mobile: true,
		reset: false,
		useDelay: 'always',
		viewFactor,
		viewOffset: { top: 0, right: 0, bottom: 0, left: 0 }
	})
}
