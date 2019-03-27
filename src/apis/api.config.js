var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
    baseUrl: isProduction ? 'http://118.24.85.97:2222' : '/apis'
}
