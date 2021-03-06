export default {
    module: {
        loaders: [
            { test: /\.css$/, exclude: /node_modules/, loader: "style-loader!css-loader" },
            { test: /\.less$/, exclude: /node_modules/, loader: "style-loader!css-loader!less-loader" },
            { test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)([\?]?.*)$/, exclude: /node_modules/, loader: 'url-loader' }
        ]
    }
};
