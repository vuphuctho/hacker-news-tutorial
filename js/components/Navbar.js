var React = require("react");
var ReactDOM = require("react-dom");

let Navbar = require("react-bootstrap/lib").Navbar;
let Nav = require("react-bootstrap/lib").Nav;
let NavItem = require("react-bootstrap/lib").NavItem;

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.openSubmitModal = this.openSubmitModal.bind(this);
		this.displayName = "Navbar";
		this.state = {};
	}

	openSubmitModal() {
		this.props.request({
			'from': this.displayName,
			'requestType': 'display',
			'displayTarget': 'AddPostModal',
			'action': 'openModal'
		})
	}

	render() {
		return (
			<Navbar inverse fixedTop>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#">Hacker News</a>
					</Navbar.Brand>		
				</Navbar.Header>
				<Nav>
					<NavItem href="#">new</NavItem>
					<NavItem href="#">comments</NavItem>
					<NavItem href="#">show</NavItem>
					<NavItem href="#">ask</NavItem>
					<NavItem href="#">job</NavItem>
					<NavItem href="#" onClick={this.openSubmitModal}>submit</NavItem>
				</Nav>
				<Nav pullRight>
					<NavItem href="#">login</NavItem>
				</Nav>
			</Navbar>
		);
	}
}

Header.propsTypes = {
	request : React.PropTypes.func
}

module.exports = Header; 