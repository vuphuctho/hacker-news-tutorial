var React = require("react");
var ReactDOM = require("react-dom");

let Navbar = require("react-bootstrap/lib").Navbar;
let Nav = require("react-bootstrap/lib").Nav;
let NavItem = require("react-bootstrap/lib").NavItem;

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {};
	}

	handleSubmit() {
		this.props.getNavbarRequest( { showSubmitModal :true } );
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
					<NavItem href="#" onClick={this.handleSubmit}>submit</NavItem>
				</Nav>
				<Nav pullRight>
					<NavItem href="#">login</NavItem>
				</Nav>
			</Navbar>
		);
	}
}

module.exports = Header; 