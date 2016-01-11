import test from 'ava'
import camel2kebab from './'

test('works', t => {
	t.is(camel2kebab('fontSize'), 'font-size')
	t.is(camel2kebab('SSSize'), 'sssize')
	t.is(camel2kebab('PascalCase'), 'pascal-case')
})

test('throws', t => {
	t.throws(function () {
		camel2kebab(12)
	}, TypeError)
})
