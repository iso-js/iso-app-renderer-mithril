# iso-app-renderer-mithril

Renderer for mithril components in an isomorphic apps.

## Installation

    npm i --save iso-app-renderer-mithril

## Usage

    var app = require('iso-app');
    var renderer = require('iso-app-renderer-mithril');

    app().use(renderer());

## API

### new Renderer()

Create a new mithril renderer.

### .attach(view, el)

Attach the view to the element and start updating the element when the view changes.

### .detach()

Detach the view from the element and stop updating the element when the view changes.

### .toHTML(view)

Render the view as a HTML string.

## License

The MIT License (MIT)

Copyright (c) 2015 James Newell