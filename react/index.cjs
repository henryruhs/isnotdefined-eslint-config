module.exports =
[
	{
		'files':
		[
			'**/*.jsx',
			'**/*.tsx'
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
			'@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
			'react': require('eslint-plugin-react'),
			'react-hooks': require('eslint-plugin-react-hooks')
		},
		'settings':
		{
			'react':
			{
				'version': 'detect'
			}
		},
		'rules':
		{
			'react/jsx-boolean-value': 'error',
			'react/jsx-curly-spacing': [ 'error', 'always' ],
			'react/jsx-fragments':
			[
				'error',
				'element'
			],
			'react/jsx-key': 'error',
			'react/jsx-pascal-case': 'error',
			'react/jsx-no-duplicate-props': 'error',
			'react/no-deprecated': 'error',
			'react/jsx-no-undef': 'error',
			'react-hooks/rules-of-hooks': 'error'
		}
	}
]
