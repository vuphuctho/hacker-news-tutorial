var React = require("react");
var ReactDOM = require("react-dom");

var Navbar = require("./components/Navbar.js");
var SubmitModal = require("./components/SubmitModal.js");
var PostList = require("./components/PostList.js");

class App extends React.Component {
	constructor(props) {
		super(props);
		this.handleNavbarRequest = this.handleNavbarRequest.bind(this);
		this.handleCloseSubmitModal = this.handleCloseSubmitModal.bind(this);
		this.state = {
			showSubmitModal: false
		};
	}

	handleNavbarRequest(value) {
		if (value.showSubmitModal) {
			this.setState({ showSubmitModal : true });
		}
	}

	handleCloseSubmitModal(value) {
		this.setState({ 
			showSubmitModal : false 
		});

		this.PostList.update();
	}

	render() {
		return (
			<div>
				<Navbar getNavbarRequest={ this.handleNavbarRequest } />
				<div className="bs-doc-header container" style={{ paddingTop: 70 }}>
					<PostList ref={(PostList => this.PostList = PostList)} />
				</div>
				<SubmitModal showModal={ this.state.showSubmitModal } closeSubmitModal={ this.handleCloseSubmitModal } />
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);