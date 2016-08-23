module.exports = {
    entry: './src/bi-cycle.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bi-cycle.js',
        library: 'bi-cycle',
        libraryTarget: 'commonjs2'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-0']
                }
            }
        ]
    }
};
