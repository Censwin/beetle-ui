/*
 * @Author: Censwin
 * @Date: 2021-10-08 23:47:45
 * @LastEditTime: 2021-10-08 23:56:13
 * @Description: 
 * @FilePath: /whale-design/.eslintrc.js
 */
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "alloy",
        "alloy/react",
        "alloy/typescript"
    ],
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
    }
};
