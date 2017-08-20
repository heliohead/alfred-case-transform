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
  }
]);
