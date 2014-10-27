/** @jsx React.DOM */

var Time = React.createClass({
  getInitialState: function () {
    return {
      date: new Date()
    }
  },
  tick: function () {
    this.setState({ date: new Date() });
  },
  componentDidMount: function() {
    setInterval(this.tick, 1);
  },
  render: function() {
    return (
      <time dateTime={this.state.date.toString()}>{this.state.date.toLocaleTimeString()}</time>
    );
  }
});

var Home = React.createClass({
  render: function() {
    var date = new Date();
    return (
      <div>
        <p>This is the home page</p>
        <p>This page was rendered at: <time dateTime={date.toString()}>{date.toLocaleTimeString()}</time></p>
        <p>The current time is: <Time /></p>
      </div>
    );
  }
});

var home = React.renderComponent(
  <Home />,
  document.getElementById('content')
);
