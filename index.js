'use strict';
const alfy = require('alfy');
const _ = require('lodash');

function upperCamelCase(string) {
  let str = _.camelCase(string);
  return str[0].toUpperCase() + str.slice(1);
}

alfy.output([
  {
    title: _.camelCase(alfy.input),
    arg: _.camelCase(alfy.input),
    subtitle: 'camelCase',
    icon: { path: 'icons/camelCase.png' }
  },
  {
    title: upperCamelCase(alfy.input),
    arg: upperCamelCase(alfy.input),
    subtitle: 'UpperCamelCase',
    icon: { path: 'icons/UpperCamelCase.png' }
  },
  {
    title: _.snakeCase(alfy.input),
    arg: _.snakeCase(alfy.input),
    subtitle: 'snake_case',
    icon: { path: 'icons/snake_case.png' }
  },
  {
    title: _.snakeCase(alfy.input).toUpperCase(),
    arg: _.snakeCase(alfy.input).toUpperCase(),
    subtitle: 'SCREAMING_SNAKE_CASE',
    icon: { path: 'icons/SCREAMING_SNAKE_CASE.png' }
  },
  {
    title: _.kebabCase(alfy.input),
    arg: _.kebabCase(alfy.input),
    subtitle: 'kebab-case',
    icon: { path: 'icons/kebab-case.png' }
  }
]);
