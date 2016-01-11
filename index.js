module.exports = function camel2kebab(str) {
	if (typeof str !== 'string') {
		throw new TypeError('Expect a string but got ' + typeof str)
	}
	str = str.replace(/[a-z]([A-Z])+/g, function (m) {
		return m[0] + '-' + m.substring(1)
	})
	return str.toLowerCase()
}
