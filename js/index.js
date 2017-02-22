var React = require("react");
var ReactDOM = require("react-dom");

var Navbar = require("./components/Navbar.js");
var AddPostModal = require('./components/AddPostModal.js');

const Datastore = require('nedb'), 
	PostDB = new Datastore();

class App extends React.Component {
	constructor(props) {
		super(props);
		this.handleChildRequest = this.handleChildRequest.bind(this);
		this.handleDbRequest = this.handleDbRequest.bind(this);
		this.handleDisplayRequest = this.handleDisplayRequest.bind(this);
		this.state = {
			modalOpeningStates: {
				AddPostModal: false
			}
		};
	}

	handleChildRequest(request) {
		console.log(request);
		switch (request.requestType) {
			case 'db':
				this.handleDbRequest(request);
				break;
			case 'display':
				this.handleDisplayRequest(request);
				break;
			default:
				break;
		}
	}

	handleDbRequest(request) {
		switch(request.dbTarget) {
			case 'post':
				switch(request.action) {
					case 'insert':
						// PostDB.
						console.log("here handle insert");
						break;
					default:
						break;
				}
				break;
			default:
				break;
		}
	}	

	handleDisplayRequest(request) {
		switch(request.action) {
			case "openModal":
				switch(request.displayTarget) {
					case 'AddPostModal':
						this.setState({
							modalOpeningStates: {
								AddPostModal: true
							}
						})
						break;
					default:
						break;
				}
				break;
			default:
				break;
		}
	}

	render() {
		return (
			<div className="container-fluid">
				<Navbar request={this.handleChildRequest} />
				<AddPostModal showModal={this.state.modalOpeningStates.AddPostModal} request={this.handleChildRequest} />
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);