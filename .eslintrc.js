module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-useless-constructor': 'off',
    '@typescript-eslint/type-annotation-spacing': [
      'warn',
      {
        before: false,
        after: true,
        overrides: { arrow: { before: true, after: true } },
      },
    ],
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars-experimental': ['warn'],
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/array-type': [
      'warn',
      {
        default: 'array-simple',
        readonly: 'array-simple',
      },
    ],
    '@typescript-eslint/no-empty-function': [
      'warn',
      {
        allow: ['constructors', 'arrowFunctions', 'functions', 'methods'],
      },
    ],
    'accessor-pairs': 'warn',
    'array-bracket-spacing': ['warn', 'never'],
    'array-callback-return': ['error', { allowImplicit: true }],
    'array-element-newline': [
      'off',
      {
        multiline: true,
        minItems: 4,
      },
    ],
    'arrow-body-style': [
      'warn',
      'as-needed',
      { requireReturnForObjectLiteral: false },
    ],
    'arrow-parens': ['warn', 'always'],
    'arrow-spacing': [
      'warn',
      {
        before: true,
        after: true,
      },
    ],
    'block-scoped-var': 'error',
    'block-spacing': ['warn', 'always'],
    'brace-style': ['warn', '1tbs', { allowSingleLine: true }],
    'callback-return': 'off', // deprecated
    camelcase: ['off', { properties: 'always' }],
    'capitalized-comments': [
      'off',
      'never',
      {
        line: {
          ignorePattern: '.*',
          ignoreInlineComments: true,
          ignoreConsecutiveComments: true,
        },
        lock: {
          ignorePattern: '.*',
          ignoreInlineComments: true,
          ignoreConsecutiveComments: true,
        },
      },
    ],
    'class-methods-use-this': ['off', { exceptMethods: [] }],
    'comma-dangle': ['warn', 'always-multiline'],
    'comma-spacing': [
      'warn',
      {
        before: false,
        after: true,
      },
    ],
    'comma-style': ['warn', 'last'],
    complexity: ['off', 11],
    'computed-property-spacing': ['error', 'never'],
    'consistent-return': 'off',
    'consistent-this': 'off',
    'constructor-super': 'error',
    curly: ['error', 'multi-line'],
    'default-case': ['warn', { commentPattern: '^no default$' }],
    'dot-location': ['error', 'property'],
    'dot-notation': ['warn', { allowKeywords: true }],
    'eol-last': 'error',
    eqeqeq: ['error', 'always'],
    'for-direction': 'error',
    'func-call-spacing': ['warn', 'never'],
    'func-name-matching': [
      'off',
      'always',
      {
        includeCommonJSModuleExports: false,
        considerPropertyDescriptor: true,
      },
    ],
    'func-names': ['off', 'as-needed'],
    'func-style': ['off', 'declaration', { allowArrowFunctions: true }],
    'function-call-argument-newline': ['off', 'consistent'],
    'function-paren-newline': ['off', 'consistent'],
    'generator-star-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    'getter-return': ['error', { allowImplicit: true }],
    'global-require': 'off',
    'guard-for-in': 'error',
    'handle-callback-err': ['error', '^(err|error)$'],
    'id-blacklist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'implicit-arrow-linebreak': ['off', 'beside'],
    'import/default': 'error',
    'import/dynamic-import-chunkname': [
      'off',
      {
        importFunctions: [],
        webpackChunknameFormat: '[0-9a-zA-Z-_/.]+',
      },
    ],
    'import/export': 'error',
    'import/exports-last': 'off',
    'import/extensions': [
      'off',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
      },
    ],
    'import/first': 'error',
    'import/group-exports': 'off',
    'import/imports-first': 'off',
    'import/max-dependencies': ['off', { max: 10 }],
    'import/named': 'error',
    'import/namespace': ['error', { allowComputed: true }],
    'import/newline-after-import': 'warn',
    'import/no-absolute-path': 'error',
    'import/no-amd': 'error',
    'import/no-anonymous-default-export': [
      'off',
      {
        allowArray: false,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowLiteral: false,
        allowObject: false,
      },
    ],
    'import/no-commonjs': 'off',
    'import/no-cycle': ['off', { maxDepth: Infinity }],
    'import/no-default-export': 'off',
    'import/no-deprecated': 'warn',
    'import/no-duplicates': 'error',
    'import/no-dynamic-require': 'off',
    'import/no-internal-modules': ['off', { allow: [] }],
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-named-default': 'error',
    'import/no-named-export': 'off',
    'import/no-namespace': 'off',
    'import/no-nodejs-modules': 'off',
    'import/no-relative-parent-imports': 'off',
    'import/no-restricted-paths': 'off',
    'import/no-self-import': 'error',
    'import/no-unassigned-import': 'off',
    'import/no-unresolved': [
      'error',
      {
        commonjs: true,
        caseSensitive: true,
        ignore: ['^src/'],
      },
    ],
    'import/no-unused-modules': [
      'off',
      {
        ignoreExports: [],
        missingExports: true,
        unusedExports: true,
      },
    ],
    'import/no-useless-path-segments': ['error', { commonjs: true }],
    'import/no-webpack-loader-syntax': 'error',
    'import/order': [
      'warn',
      {
        groups: [['builtin', 'external', 'internal']],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'never',
      },
    ],
    'import/prefer-default-export': 'off',
    'import/unambiguous': 'off',
    indent: ['warn', 2, { SwitchCase: 1 }],
    'init-declarations': 'off',
    'jsx-quotes': ['warn', 'prefer-double'],
    'key-spacing': [
      'warn',
      {
        mode: 'strict',
        beforeColon: false,
        afterColon: true,
      },
    ],
    'keyword-spacing': [
      'warn',
      {
        before: true,
        after: true,
      },
    ],
    'line-comment-position': [
      'off',
      {
        position: 'above',
        ignorePattern: '',
        applyDefaultPatterns: true,
      },
    ],
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': 'off',
    'lines-around-directive': [
      'warn',
      {
        before: 'always',
        after: 'always',
      },
    ],
    'lines-between-class-members': 'off',
    'max-classes-per-file': ['warn', 1],
    'max-depth': ['warn', 4],
    'max-len': [
      'off',
      80,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'max-lines': [
      'off',
      {
        max: 300,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'max-lines-per-function': [
      'off',
      {
        max: 50,
        skipBlankLines: true,
        skipComments: true,
        IIFEs: true,
      },
    ],
    'max-nested-callbacks': 'off',
    'max-params': ['off', 3],
    'max-statements': ['off', 10],
    'max-statements-per-line': ['warn', { max: 1 }],
    'multiline-comment-style': ['off', 'starred-block'],
    'multiline-ternary': ['off', 'never'],
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: false,
      },
    ],
    'new-parens': 'error',
    'newline-after-var': 'off',
    'newline-before-return': 'off',
    'newline-per-chained-call': ['off', { ignoreChainWithDepth: 2 }],
    'no-alert': 'warn',
    'no-array-constructor': 'error',
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-bitwise': 'warn',
    'no-buffer-constructor': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-catch-shadow': 'off',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-confusing-arrow': ['warn', { allowParens: true }],
    'no-console': 'off',
    'no-const-assign': 'error',
    'no-constant-condition': 'warn',
    'no-continue': 'warn',
    'no-control-regex': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 'off',
    'no-delete-var': 'error',
    'no-div-regex': 'off',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'warn',
    'no-else-return': ['warn', { allowElseIf: false }],
    'no-empty': 'warn',
    'no-empty-character-class': 'warn',
    'no-empty-function': 'off',
    'no-empty-pattern': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-ex-assign': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-label': 'error',
    'no-extra-parens': ['error', 'functions'],
    'no-extra-semi': 'warn',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-func-assign': 'error',
    'no-global-assign': ['off', { exceptions: [] }],
    'no-implicit-coercion': [
      'warn',
      {
        boolean: true,
        number: true,
        string: true,
        allow: [],
      },
    ],
    'no-implicit-globals': 'off',
    'no-implied-eval': 'error',
    'no-inline-comments': 'off',
    'no-inner-declarations': ['error', 'functions'],
    'no-invalid-regexp': 'error',
    'no-invalid-this': 'error',
    'no-irregular-whitespace': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'warn',
    'no-loop-func': 'error',
    'no-magic-numbers': [
      'off',
      {
        ignore: [],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false,
      },
    ],
    'no-misleading-character-class': 'error',
    'no-mixed-operators': [
      'warn',
      {
        groups: [
          ['%', '**'],
          ['%', '+'],
          ['%', '-'],
          ['%', '*'],
          ['%', '/'],
          ['/', '*'],
          ['&', '|', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!=='],
          ['&&', '||'],
        ],
        allowSamePrecedence: false,
      },
    ],
    'no-mixed-requires': ['off', false],
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': 'warn',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': ['warn', { max: 1 }],
    'no-native-reassign': 'error',
    'no-negated-condition': 'off',
    'no-negated-in-lhs': 'error',
    'no-nested-ternary': 'error',
    'no-new': 'off',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-obj-calls': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': [
      'error',
      {
        props: true,
      },
    ],
    'no-path-concat': 'error',
    'no-plusplus': 'error',
    'no-process-env': 'off',
    'no-process-exit': 'off',
    'no-proto': 'error',
    'no-prototype-builtins': 'error',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-restricted-globals': 'error',
    'no-restricted-imports': [
      'off',
      {
        paths: [],
        patterns: [],
      },
    ],
    'no-restricted-modules': 'off',
    'no-restricted-properties': [
      'error',
      {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated',
      },
      {
        object: 'global',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'self',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'window',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'global',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'self',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'window',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.',
      },
    ],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      // NOTE: The for..of loop uses Symbols which can't be polyfilled for any
      // version of Internet Explorer. Since we don't support IE we can safely
      // allow the use of for..of loops.
      // {
      //   selector: 'ForOfStatement',
      //   message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.'
      // },
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    'no-return-assign': ['error', 'except-parens'],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow': 'off',
    'no-shadow-restricted-names': 'error',
    'no-spaced-func': 'error',
    'no-sparse-arrays': 'error',
    'no-sync': 'off',
    'no-tabs': 'error',
    'no-template-curly-in-string': 'warn',
    'no-ternary': 'off',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'warn',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-underscore-dangle': [
      'off',
      {
        allow: [],
        allowAfterThis: false,
        allowAfterSuper: false,
        enforceInMethodNames: true,
      },
    ],
    'no-unexpected-multiline': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': [
      'warn',
      {
        defaultAssignment: false,
      },
    ],
    'no-unreachable': 'warn',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: false,
      },
    ],
    'no-unused-labels': 'error',
    'no-unused-vars': ['off', { vars: 'all', args: 'none' }],
    'no-use-before-define': [
      'error',
      {
        functions: true,
        classes: true,
        variables: true,
      },
    ],
    'no-useless-call': 'error',
    'no-useless-catch': 'warn',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'warn',
    'no-useless-constructor': 'off',
    'no-useless-escape': 'off',
    'no-useless-rename': [
      'warn',
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      },
    ],
    'no-useless-return': 'warn',
    'no-var': 'error',
    'no-void': 'error',
    'no-warning-comments': [
      'warn',
      {
        terms: ['TODO', 'FIXME'],
        location: 'start',
      },
    ],
    'no-whitespace-before-property': 'warn',
    'no-with': 'error',
    'nonblock-statement-body-position': ['warn', 'any', { overrides: {} }],
    'object-curly-newline': 'off',
    'object-curly-spacing': ['warn', 'always', { objectsInObjects: true }],
    'object-curly-newline': 'off',
    'object-shorthand': [
      'warn',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    'one-var': ['warn', { initialized: 'never' }],
    'one-var-declaration-per-line': ['warn', 'always'],
    'operator-assignment': ['off', 'always'],
    'operator-linebreak': [
      'warn',
      'after',
      {
        overrides: {
          '?': 'before',
          ':': 'before',
        },
      },
    ],
    'padded-blocks': ['warn', 'never'],
    'padding-line-between-statements': 'off',
    'prefer-arrow-callback': [
      'warn',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],
    'prefer-const': 'error',
    'prefer-destructuring': [
      'off',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'prefer-exponentiation-operator': 'off',
    'prefer-named-capture-group': 'off',
    'prefer-numeric-literals': 'error',
    'prefer-object-spread': 'warn',
    'prefer-promise-reject-errors': [
      'warn',
      {
        allowEmptyReject: true,
      },
    ],
    'prefer-reflect': 'off', // deprecated
    'prefer-regex-literals': 'off',
    'prefer-rest-params': 'warn',
    'prefer-spread': 'warn',
    'prefer-template': 'warn',
    'quote-props': [
      'error',
      'as-needed',
      {
        keywords: false,
        unnecessary: true,
        numbers: false,
      },
    ],
    quotes: [
      'warn',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    radix: ['warn', 'as-needed'],
    'require-atomic-updates': 'error',
    'require-await': 'off',
    'require-jsdoc': 'off',
    'require-unicode-regexp': 'off',
    'require-yield': 'error',
    'rest-spread-spacing': ['error', 'never'],
    semi: ['error', 'always'],
    'semi-spacing': [
      'warn',
      {
        before: false,
        after: true,
      },
    ],
    'semi-style': ['warn', 'last'],
    'sort-imports': [
      'off',
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    'sort-keys': [
      'off',
      'asc',
      {
        caseSensitive: false,
        natural: true,
      },
    ],
    'sort-vars': 'off',
    'space-before-blocks': ['warn', 'always'],
    'space-before-function-paren': [
      'warn',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'space-in-parens': ['warn', 'never'],
    'space-infix-ops': 'warn',
    'space-unary-ops': [
      'warn',
      {
        words: true,
        nonwords: false,
      },
    ],
    'spaced-comment': [
      'warn',
      'always',
      {
        markers: [
          'global',
          'globals',
          'eslint',
          'eslint-disable',
          '*package',
          '!',
          ',',
        ],
      },
    ],
    strict: ['off', 'never'],
    'switch-colon-spacing': [
      'warn',
      {
        before: false,
        after: true,
      },
    ],
    'symbol-description': 'warn',
    'template-curly-spacing': ['warn', 'never'],
    'template-tag-spacing': ['error', 'never'],
    'unicode-bom': ['error', 'never'],
    'use-isnan': 'error',
    'valid-jsdoc': 'off',
    'valid-typeof': 'error',
    'vars-on-top': 'off',
    'wrap-iife': ['error', 'any'],
    'wrap-regex': 'off',
    'yield-star-spacing': ['error', 'both'],
    yoda: ['error', 'never'],
  },
};
