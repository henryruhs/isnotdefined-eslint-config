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
			'react-hooks': require('eslint-plugin-react-hooks'),
			'react-refresh': require('eslint-plugin-react-refresh')
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
			'react/jsx-curly-spacing': 'error',
			'react/jsx-fragments':
			[
				'error',
				'element'
			],
			'react/jsx-pascal-case': 'error',
			'react/no-deprecated': 'error',
			'react-hooks/rules-of-hooks': 'error',
			'react-refresh/only-export-components': 'error'
		}
	}
]
