require.config({
    baseIrl: '../static/js',
    paths: {
        'jquery': './lib/jquery-1.10.1.min',
        'handlebars': './lib/handlebars-v4.0.11',
        'template': './lib/template',
        'swiper': './lib/swiper.min',
        'index': './page/index'
    }
})

require(['index'], function(index) {})