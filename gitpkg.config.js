// Example content of gitpkg.config.js
module.exports = () => ({
    registry: 'git@github.com:paataD/test-js-monorepo.git',
    getTagName: pkg => ${pkg.name}-v${pkg.version}-gitpkg
});