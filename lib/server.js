var render = require('mithril-node-render');

/**
 * React renderer
 * @constructor
 */
function MithrilRenderer() {
}

MithrilRenderer.prototype = {

  /**
   * Render the view as a HTML string
   * @param   {*} view
   * @returns {string}
   */
  toHTML: function(view) {
    return render(view);
  }

};

module.exports = MithrilRenderer;