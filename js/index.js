var React = require("react");
var ReactDOM = require("react-dom");

var Navbar = require("./components/Navbar.js");

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<Navbar />
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);