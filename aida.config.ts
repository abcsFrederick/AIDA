const config = {
	// Local static server for 2D and 3D models.
	// server: {
	// 	path: '', // If not specified then application will use default /local/data
	// 	hostname: 'localhost',
	// 	port: 8001,
	// },
	server: {
		path: 'viewer', // If not specified then application will use default /local/data
		hostname: 'fsivgl-rms01d.ncifcrf.gov',
		port: 8001,
	},
	// Client application
	app: {
		port: 3000,
	},
	// IIIF - tiling image server for .tiff
	IIIF: {
		hostname: 'localhost',
		port: 8182,
		https: false,
	},
	rms2: {
        path: 'rms2',
        hostname: 'fsivgl-rms01d.ncifcrf.gov'
    },
}

export default config
