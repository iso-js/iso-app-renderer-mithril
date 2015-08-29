var mithril = require('mithril');

/**
 * React renderer
 * @constructor
 */
function MithrilRenderer() {
}

MithrilRenderer.prototype = {

  /**
   * Attach the view to the element and start updating the element when the view changes
   * @param   {Component}   view
   * @param   {HTMLElement} el
   * @returns {MithrilRenderer}
   */
  attach: function(view, el) {
    this.view = view;
    this.el   = el;

    if (!view || !el) {
      throw new Error('.attach(): No view or element');
    }

    mithril.mount(this.el, this.view);
    return this;
  },

  /**
   * Detach the view from the element and stop updating the element when the view changes
   * @returns {MithrilRenderer}
   */
  detach: function() {

    //check we're attached
    if (this.el) {
      throw new Error('Unmounting is not supported');
    }

    this.view = null;
    this.el   = null;

    return this;
  }

};

module.exports = MithrilRenderer;