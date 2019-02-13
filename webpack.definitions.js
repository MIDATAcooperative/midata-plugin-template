var my_exports = {};

my_exports.entry = {
    vendor: './src/vendor.js',
    appjs: './src/main.js',

    bootstrap: './node_modules/bootstrap/less/bootstrap.less',
    midatacss: './node_modules/angular-midatajs/css/app.css'
};

my_exports.html_files_to_add = ['index.html', 'preview.html'];

module.exports = my_exports;