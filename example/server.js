var Renderer  = require('../lib/server');
var module    = require('./module');

var renderer = new Renderer();

console.log(renderer.toHTML(module));