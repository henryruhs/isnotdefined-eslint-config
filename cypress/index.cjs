module.exports =
[
	{
		'files':
		[
			'**/*.e2e.js',
			'**/*.e2e.ts',
			'**/*.e2e.jsx',
			'**/*.e2e.tsx'
		],
		'languageOptions':
		{
			'parser': require('jsonc-eslint-parser'),
			'parserOptions':
			{
				'projectService': true
			}
		},
		'plugins':
		{
			'cypress': require('eslint-plugin-cypress'),
			'jest': require('eslint-plugin-jest'),
			'no-only-tests': require('eslint-plugin-no-only-tests')
		},
		'rules':
		{
			'cypress/assertion-before-screenshot': 'error',
			'cypress/no-assigning-return-values': 'error',
			'cypress/no-async-tests': 'error',
			'cypress/no-force': 'error',
			'cypress/no-unnecessary-waiting': 'error',
			'cypress/no-pause': 'error',
			'jest/prefer-lowercase-title': 'error',
			'no-only-tests/no-only-tests':
			[
				'error',
				{
					'block':
					[
						'context',
						'describe',
						'it',
						'specify'
					]
				}
			]
		}
	}
]
