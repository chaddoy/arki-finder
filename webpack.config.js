var path    = require( 'path' );
var webpack = require( 'webpack' );

module.exports = {
	'devtool': 'inline-source-map',
	'entry'  : [
		'webpack-hot-middleware/client',
		[ __dirname, 'client', 'app', 'index.js' ].join( path.sep )
	],

	'resolve' : {
		'modulesDirectories' : [ 'node_modules' ]
	},

	'output' : {
		'path'       : path.resolve( './build' ),
		'filename'   : 'bundle.js',
		'publicPath' : '/'
	},

	'plugins' : [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],

	'module' : {
		'loaders' : [
			{
				'test'    : /\.jsx?$/,
				'loader'  : 'babel-loader',
				'exclude' : /node_modules/,
				'query'   : {
					'presets' : [ 'react', 'es2015', 'react-hmre' ]
				}
			}
		]
	}
}