module.exports = {
  root: true,
  env: {
    browser: false,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/vue'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
	rules: {
		'prettier/prettier': 0,
		'prettier/standard': 0,
		'no-console': 0,
		'no-debugger': 0,
		'no-const-assign': 1,
		'no-extra-semi': 0,
		semi: 1,
		'no-fallthrough': 0,
		'no-empty': 0,
		'no-mixed-spaces-and-tabs': 1,
		'no-redeclare': 0,
		'no-this-before-super': 1,
		'no-undef': 1,
		'no-unreachable': 1,
		'no-unused-vars': 1,
		'no-use-before-define': 0,
		'constructor-super': 1,
		'vue/no-v-html': 0,
		curly: 0,
		eqeqeq: 1,
		'func-names': 1,
		'valid-typeof': 1,
		quotes: [0, 'single'],
	},
}
