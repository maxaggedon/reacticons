/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

var Reacticon = React.createClass({
  render: function() {
    var reacticonWidth = this.props.iconWidth ? this.props.iconWidth : this.props.iconHeight * 0.75;
    var reacticonHeight = this.props.iconHeight ? this.props.iconHeight : this.props.iconWidth * 1.33;

    return (
      <div>
        <svg version="1.1"
          width={reacticonWidth + 'px'}
          height={reacticonHeight + 'px'}
          viewBox="0 0 30 40">
          {this.renderGraphic()}
        </svg>
      </div>
    );
  },

  renderGraphic: function() {
    return (
      <g>
        <g id="background">
          <path fill="#CCCCCC" d="M28,40H2c-1.1,0-2-0.9-2-2V2c0-1.1,0.9-2,2-2h18l10,10v28C30,39.1,29.1,40,28,40z"/>
        </g>
        <g id="flaps">
          <path fill="#999999" d="M30,10h-8c-1.1,0-2-0.9-2-2V0L30,10z"/>
        </g>
      </g>
    );
  }
});

module.exports = Reacticon;
