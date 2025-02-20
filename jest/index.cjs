module.exports =
[
	{
		'files':
		[
			'**/*.spec.js',
			'**/*.spec.ts',
			'**/*.spec.jsx',
			'**/*.spec.tsx'
		],
		'languageOptions':
		{
			'parser': require('@typescript-eslint/parser'),
			'parserOptions':
			{
				'projectService': true
			}
		},
		'plugins':
		{
			'jest': require('eslint-plugin-jest'),
			'jest-formatting': require('eslint-plugin-jest-formatting')
		},
		'rules':
		{
			'jest/consistent-test-it': 'error',
			'jest/no-commented-out-tests': 'error',
			'jest/no-conditional-expect': 'error',
			'jest/no-conditional-in-test': 'error',
			'jest/no-export': 'error',
			'jest/no-focused-tests': 'error',
			'jest/no-standalone-expect': 'error',
			'jest/no-test-return-statement': 'error',
			'jest/prefer-comparison-matcher': 'error',
			'jest/prefer-each': 'error',
			'jest/prefer-equality-matcher': 'error',
			'jest/prefer-expect-resolves': 'error',
			'jest/prefer-hooks-in-order': 'error',
			'jest/prefer-hooks-on-top': 'error',
			'jest/prefer-lowercase-title': 'error',
			'jest/prefer-to-be': 'error',
			'jest/prefer-to-contain': 'error',
			'jest/prefer-to-have-length': 'error',
			'jest-formatting/padding-around-after-all-blocks': 'error',
			'jest-formatting/padding-around-after-each-blocks': 'error',
			'jest-formatting/padding-around-before-all-blocks': 'error',
			'jest-formatting/padding-around-before-each-blocks': 'error',
			'jest-formatting/padding-around-describe-blocks': 'error',
			'jest-formatting/padding-around-test-blocks': 'error'
		}
	}
]
