module.exports =
[
	{
		'files':
		[
			'**/*.ts'
		],
		'languageOptions':
		{
			'parser': require('@typescript-eslint/parser'),
			'parserOptions':
			{
				'projectService': true
			}
		},
		'processor': '@angular-eslint/template/extract-inline-html',
		'plugins':
		{
			'@angular-eslint': require('@angular-eslint/eslint-plugin'),
			'@angular-eslint/template': require('@angular-eslint/eslint-plugin-template'),
			'@typescript-eslint': require('@typescript-eslint/eslint-plugin')
		},
		'rules':
		{
			'@angular-eslint/contextual-decorator': 'error',
			'@angular-eslint/contextual-lifecycle': 'error',
			'@angular-eslint/no-empty-lifecycle-method': 'error',
			'@angular-eslint/no-lifecycle-call': 'error',
			'@angular-eslint/no-output-native': 'error',
			'@angular-eslint/use-component-selector': 'error',
			'@angular-eslint/use-component-view-encapsulation': 'error',
			'@angular-eslint/use-injectable-provided-in': 'error',
			'no-restricted-globals':
			[
				'error',
				{
					'name': 'document'
				},
				{
					'name': 'window'
				}
			]
		}
	},
	{
		'files':
		[
			'**/*.html'
		],
		'languageOptions':
		{
			'parser': require('@angular-eslint/template-parser')
		},
		'plugins':
		{
			'@angular-eslint/template': require('@angular-eslint/eslint-plugin-template')
		},
		'rules':
		{
			'@angular-eslint/template/banana-in-box': 'error',
			'@angular-eslint/template/conditional-complexity': 'error',
			'@angular-eslint/template/cyclomatic-complexity': 'error',
			'@angular-eslint/template/eqeqeq': 'error',
			'@angular-eslint/template/no-any': 'error',
			'@angular-eslint/template/no-duplicate-attributes': 'error',
			'@angular-eslint/template/no-negated-async': 'error'
		}
	}
]
