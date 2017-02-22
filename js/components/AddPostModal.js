var React = require("react");
var ReactDOM = require("react-dom");

let Modal = require("react-bootstrap/lib").Modal;
let Button = require('react-bootstrap/lib').Button;
let FormGroup = require('react-bootstrap/lib').FormGroup;
let FormControl = require('react-bootstrap/lib').FormControl;

class AddPostModal extends React.Component {
	constructor(props) {
		super(props);
		this.close = this.close.bind(this);
		this.open = this.open.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.submit = this.submit.bind(this);
		this.getValidationState = this.getValidationState.bind(this);
		this.displayName = "AddPostModal";
		this.state = {
			'showModal': true,
			'url': '',
			'title': '',
			'text': ''
		};
	}

	componentDidMount() {
		this.setState({ 'showModal' : this.props.showModal });
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ 'showModal' : nextProps.showModal });
	}

	close() {
		this.setState({ 
			'showModal': false,
			'url': '',
			'title': '',
			'text': '' 
		})
	}

	getValidationState() {

	}

	handleChange(event) {
		switch (event.target.getAttribute("name")) {
 			case "url-input":
 				this.setState({ url: event.target.value });
 				break;
 			case 'title-input': 
 				this.setState({ title: event.target.value });
 				break;
 			case'text-input':
 				this.setState({ text: event.target.value });
 				break;
 			default:
 				break;
 		}
	}

	submit() {
		this.props.request({
			'from': this.displayName,
			'requestType': 'db',
			'dbTarget': 'post',
			'action': 'insert',
			'data': {
				'url': this.state.url,
				'title': this.state.title,
				'text': this.state.text
			}
		})
	}

	open() {
		this.setState({ showModal: true })
	}

	render() {
		return (
			<Modal show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>New Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
		        <FormGroup
		          controlId="formBasicText"
		          validationState={this.getValidationState()}
		        >
		          <FormControl
		            name="url-input"
		            type="text"
		            value={this.state.url}
		            placeholder="Url"
		            onChange={this.handleChange}
		          />
		          <br/>
		          <FormControl
			          name="title-input"
		            type="text"
		            value={this.state.title}
		            placeholder="Title"
		            onChange={this.handleChange}
		          />
		          <br/>
		          <FormControl
		          	name="text-input"
		            componentClass="textarea"
		            value={this.state.text}
		            placeholder="Text"
		            onChange={this.handleChange}
		          />
		        </FormGroup>
		      </form>
        </Modal.Body>
        <Modal.Footer>
        	<Button bsStyle="primary" onClick={this.submit}>Submit</Button>
          <Button onClick={this.close}>Close</Button>
        </Modal.Footer>
      </Modal>
		);
	}
}

AddPostModal.propTypes = {
	showModal : React.PropTypes.bool,
	request : React.PropTypes.func
}

module.exports = AddPostModal; 