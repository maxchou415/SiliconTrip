var React = require('react');
var DefaultLayout = require('./layouts/default');
var _top = require('./sections/_top');
var _about = require('./sections/_about');
var _schedule = require('./sections/_schedule');
var _qanda = require('./sections/_qanda.jsx');
var _team = require('./sections/_team.jsx');
var _contact = require('./sections/_contact.jsx');
var _speaker = require('./sections/_speaker.jsx');
var _supporters = require('./sections/_supporters.jsx');

var ga = require('react-google-analytics');
ga('create', 'UA-73949158-4', 'auto');
ga('send', 'pageview');

var Index = React.createClass({
  render: function() {
    return (
      <DefaultLayout title={this.props.title}>
        <MyComponent />
        <_top />
        <_about />
        <_speaker />
        <_schedule />
        <_qanda />
        <_team />
        <_supporters />
        <_contact />
      </DefaultLayout>
    );
  }
});

var GAInitiailizer = ga.Initializer;

// Use the initializer to add the script to your page somewhere.
var MyComponent = React.createClass({
  render: function() {
    return (
      <div>
          <GAInitiailizer />
      </div>
    );
  }
});

module.exports = Index;
