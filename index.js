'use strict';
const alfy = require('alfy');
const camelCase = require('camelcase');
const upperCamelCase = require('uppercamelcase');

alfy.output([
  {
    title: camelCase(alfy.input),
    arg: camelCase(alfy.input),
    subtitle: 'camelCase',
    icon: { path: 'icons/camelCase.png' }
  },
  {
    title: upperCamelCase(alfy.input),
    arg: upperCamelCase(alfy.input),
    subtitle: 'UpperCamelCase',
    icon: { path: 'icons/UpperCamelCase.png' }
  }
]);
