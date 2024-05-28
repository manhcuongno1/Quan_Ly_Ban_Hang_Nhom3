module.exports = function (api) {
    api.cache(true);

    const presets = ['@babel/preset-react'];
    const plugins = ['@babel/plugin-proposal-private-property-in-object'];

    return {
        presets,
        plugins
    };
}