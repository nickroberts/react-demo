/** @jsx React.DOM */

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

function formatDateTime (d) {
  var hours = d.getHours();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  var minutes = pad(d.getMinutes(), 2);
  var seconds = pad(d.getSeconds(), 2);
  var milliseconds = pad(d.getMilliseconds(), 3);
  return hours + ':' +
    minutes + ':' +
    seconds + '.' +
    milliseconds + ' ' +
    ampm;
}

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
      <time dateTime={this.state.date.toString()}>{formatDateTime(this.state.date)}</time>
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
