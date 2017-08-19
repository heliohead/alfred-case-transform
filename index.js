'use strict';
const alfy = require('alfy');
const camelCase = require('camelcase');

alfy.output([
  {
    title: camelCase(alfy.input),
    arg: camelCase(alfy.input),
    subtitle: 'camelCase',
    icon: { path: 'icons/camelCase.png' }
  }
]);
