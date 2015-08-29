var Renderer  = require('../lib/client');
var module    = require('./module');

var renderer = new Renderer();

renderer.attach(module, document.body);