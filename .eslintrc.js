// module.exports = {
//     "extends": "standard",
//     "plugins": [
//         "standard",
//         "promise"
//     ],
//     "globals": {
//         "$": true,   // Zepto
//         "Cookies": true,     // Cookies操作插件
//         "WebStorageCache": true   // localstorage和sessionstorage插件工具
//     },
//     "rules": {
//         "strict": "error",
//         "eqeqeq": "warn",
//         "indent": [2, 4],
//         "semi": [2, "always"],
//         "one-var": 0,
//         "camelcase": 1,
//         'eol-last': 0,
//         "space-before-function-paren": 0
//     }
// };

module.exports = {
    root: true,
    globals: {
        $: true, // Zepto
        Zepto: true,
        Cookies: true, // Cookies操作插件
        WebStorageCache: true, // localstorage和sessionstorage插件工具
        FastClick: true,
        GLOBAL: true,
        Clipboard: true
    },
    // 环境配置（根据实际情况做取舍）
    env: {
        browser: true,
        node: true
        // commonjs: true,
        // es6: true,
        // jquery: true
    },
    // 继承eslint的默认配置和prettier的配置。
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    // 支持babel的使用
    parser: 'babel-eslint',
    parserOptions: {
        // 支持es6模块语法
        sourceType: 'module'
    },
    // 自定义规则（优先级最高）
    rules: {
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                printWidth: 120,
                tabWidth: 2,
                semi: true
            }
        ],
        'no-console': 'off'
    }
};
