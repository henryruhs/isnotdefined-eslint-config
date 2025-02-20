module.exports =
[
	{
		'files':
		[
			'**/*.json'
		],
		'languageOptions':
		{
			'parser': require('jsonc-eslint-parser')
		},
		'plugins':
		{
			'jsonc': require('eslint-plugin-jsonc')
		},
		'rules':
		{
			'jsonc/indent':
			[
				'error',
				'tab'
			],
			'jsonc/key-spacing': 'error'
		}
	},
	{
		'files':
		[
			'**/*.js',
			'**/*.jsx',
			'**/*.ts',
			'**/*.tsx'
		],
		'plugins':
		{
			'eslint-comments': require('eslint-plugin-eslint-comments'),
			'import': require('eslint-plugin-import'),
			'promise': require('eslint-plugin-promise'),
			'unicorn': require('eslint-plugin-unicorn'),
			'unused-imports': require('eslint-plugin-unused-imports')
		},
		'settings':
		{
			'import/resolver':
			{
				'node':
				{
					'extensions':
					[
						'.js',
						'.jsx',
						'.ts',
						'.tsx'
					]
				}
			}
		},
		'rules':
		{
			'accessor-pairs': 'error',
			'array-bracket-spacing':
			[
				'error',
				'always'
			],
			'arrow-parens':
			[
				'error',
				'as-needed'
			],
			'arrow-spacing': 'error',
			'brace-style':
			[
				'error',
				'allman'
			],
			'comma-dangle': 'error',
			'comma-spacing': 'error',
			'eslint-comments/no-use': 'error',
			'func-call-spacing': 'error',
			'grouped-accessor-pairs':
			[
				'error',
				'getBeforeSet'
			],
			'import/newline-after-import': 'error',
			'import/no-absolute-path': 'error',
			'import/no-cycle': 'error',
			'import/no-duplicates': 'error',
			'import/no-empty-named-blocks': 'error',
			'import/no-self-import': 'error',
			'import/no-useless-path-segments': 'error',
			'import/order':
			[
				'error',
				{
					'newlines-between': 'always'
				}
			],
			'indent':
			[
				'error',
				'tab',
				{
					'ignoredNodes':
					[
						'CallExpression',
						'ConditionalExpression',
						'MemberExpression',
						'ObjectExpression'
					]
				}
			],
			'key-spacing': 'error',
			'keyword-spacing': 'error',
			'lines-between-class-members':
			[
				'error',
				'always',
				{
					'exceptAfterSingleLine': true
				}
			],
			'new-parens': 'error',
			'newline-after-var': 'error',
			'no-console': 'error',
			'no-debugger': 'error',
			'no-dupe-args': 'error',
			'no-dupe-class-members': 'error',
			'no-dupe-keys': 'error',
			'no-else-return': 'error',
			'no-empty': 'error',
			'no-extra-semi': 'error',
			'no-lone-blocks': 'error',
			'no-lonely-if': 'error',
			'no-mixed-spaces-and-tabs': 'error',
			'no-multi-spaces': 'error',
			'no-multiple-empty-lines':
			[
				'error',
				{
					'max': 1,
					'maxBOF': 1
				}
			],
			'no-useless-catch': 'error',
			'no-useless-concat': 'error',
			'no-useless-computed-key': 'error',
			'no-useless-rename': 'error',
			'no-unreachable': 'error',
			'no-whitespace-before-property': 'error',
			'no-var': 'error',
			'object-shorthand': 'error',
			'object-curly-spacing':
			[
				'error',
				'always'
			],
			'padded-blocks':
			[
				'error',
				'never'
			],
			'prefer-const': 'error',
			'prefer-destructuring': 'error',
			'prefer-spread': 'error',
			'promise/catch-or-return': 'error',
			'quotes':
			[
				'error',
				'single'
			],
			'rest-spread-spacing': 'error',
			'semi': 'error',
			'semi-spacing': 'error',
			'space-before-function-paren':
			[
				'error',
				{
					'anonymous': 'never',
					'named': 'never',
					'asyncArrow': 'always'
				}
			],
			'space-in-parens': 'error',
			'space-infix-ops': 'error',
			'space-unary-ops': 'error',
			'unicorn/no-useless-undefined': 'error',
			'unicorn/prefer-array-find': 'error',
			'unicorn/prefer-array-some': 'error',
			'unicorn/prefer-at':
			[
				'error',
				{
					'checkAllIndexAccess': true
				}
			],
			'unicorn/prefer-add-event-listener': 'error',
			'unicorn/prefer-includes': 'error',
			'unicorn/prefer-modern-dom-apis': 'error',
			'unused-imports/no-unused-imports': 'error',
			'unused-imports/no-unused-vars': 'error'
		}
	},
	{
		'files':
		[
			'**/*.ts',
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
			'@stylistic/ts': require('@stylistic/eslint-plugin-ts')
		},
		'rules':
		{
			'@typescript-eslint/ban-ts-comment': 'error',
			'@typescript-eslint/dot-notation': 'error',
			'@typescript-eslint/explicit-member-accessibility':
			[
				'error',
				{
					'accessibility': 'no-public'
				}
			],
			'@typescript-eslint/explicit-module-boundary-types': 'error',
			'@typescript-eslint/member-ordering': 'error',
			'@typescript-eslint/no-deprecated': 'error',
			'@typescript-eslint/no-require-imports': 'error',
			'@typescript-eslint/no-unsafe-member-access': 'error',
			'@typescript-eslint/no-useless-constructor': 'error',
			'@typescript-eslint/typedef':
			[
				'error',
				{
					'arrayDestructuring': true,
					'memberVariableDeclaration': true,
					'parameter': true,
					'propertyDeclaration': true,
					'objectDestructuring': true,
					'variableDeclaration': true
				}
			],
			'@stylistic/ts/type-annotation-spacing':
			[
				'error',
				{
					'before': true,
					'after': true
				}
			]
		}
	}
]
