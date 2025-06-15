// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = tseslint.config(
    {
        files: ["**/*.ts"],
        extends: [
            eslint.configs.recommended,
            ...tseslint.configs.recommended,
            ...tseslint.configs.stylistic,
            ...angular.configs.tsRecommended,
        ],
        processor: angular.processInlineTemplates,
        rules: {
            "@angular-eslint/template/click-events-have-key-events": "off",
            "@angular-eslint/template/interactive-supports-focus": "off",
            "@angular-eslint/prefer-standalone": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-inferrable-types": "off",
            "@angular-eslint/directive-selector": [
                "error",
                {
                    type: "attribute",
                    prefix: "sr",
                    style: "camelCase",
                },
            ],
            "@angular-eslint/component-selector": [
                "error",
                {
                    type: "element",
                    prefix: "sr",
                    style: "kebab-case",
                },
            ],
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    "argsIgnorePattern": "^_",
                    "varsIgnorePattern": "^_",
                    "caughtErrorsIgnorePattern": "^_"
                }
            ]
        },
    },
    {
        files: ["**/*.html"],
        extends: [
            ...angular.configs.templateRecommended,
            ...angular.configs.templateAccessibility,
        ],
        rules: {
            "@angular-eslint/template/click-events-have-key-events": "off",
            "@angular-eslint/template/interactive-supports-focus": "off"
        },
    }
);
