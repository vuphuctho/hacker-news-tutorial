var React = require("react");

let Modal = require('react-bootstrap/lib').Modal;
let Button = require('react-bootstrap/lib').Button;
let FormGroup = require('react-bootstrap/lib').FormGroup;
let FormControl = require('react-bootstrap/lib').FormControl;
let HelpBlock = require('react-bootstrap/lib').HelpBlock;

class SubmitModal extends React.Component {
	constructor(props) {
		super(props);
		this.close = this.close.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			showModal: false,
			url: '',
			title: '',
			text: '',
			showError: false
		};
	}

	componentDidMount() {
		this.setState({ showModal : this.props.showModal });
	}

	componentWillReceiveProps(nextProps) {
		if (this.state.showModal != nextProps.showModal) {
			this.setState({ showModal : nextProps.showModal });
		}
	}

	close() {
		this.setState({ 
			url: '',
			title: '',
			text: '',
			showError : false
		});
	    this.props.closeSubmitModal({ submitSuccess : false });
	}

	handleChange(event) {
		switch (event.target.getAttribute("id")) {
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

	handleSubmit() {
		if ((this.state.title.length != 0 && this.state.url.length != 0) || this.state.text.length!=0) {
			var data = {
				'title': this.state.title,
				'url': this.state.url,
				'text': this.state.text
			}
			var sm = this;
			postDb.insert(data, function(error, result) {
				if (!error) {
					sm.setState({ 
						url: '',
						title: '',
						text: '',
						showError : false
					});
					sm.props.closeSubmitModal({ submitSuccess : true });
				}
			})
		} else { 
			this.setState({ showError : true })
		}
	}

	render() {
		return (
			<Modal show={this.state.showModal} onHide={this.close}>
	          <Modal.Header closeButton>
	            <Modal.Title>New Post</Modal.Title>
	          </Modal.Header>
	          <Modal.Body>
	            <FormGroup>
	            	{this.state.showError && 
	            		<HelpBlock>Please try again.</HelpBlock>
	            	}
	            	
	            	<FormControl
	            		id="title-input"
			            type="text"
			            value={this.state.Url}
			            placeholder="Title"
			            onChange={this.handleChange}
			          />
			          <br/>
	            	<FormControl
	            		id="url-input"
			            type="text"
			            value={this.state.Url}
			            placeholder="Url"
			            onChange={this.handleChange}
			          />
			          <br/>
			          <FormControl
	            		id="text-input"
			            componentClass="textarea" 
			            value={this.state.Url}
			            placeholder="Text"
			            onChange={this.handleChange}
			          />
	            </FormGroup>
	          </Modal.Body>
	          <Modal.Footer>
		          <Button onClick={this.handleSubmit} bsStyle="primary">Submit</Button>
	            <Button onClick={this.close}>Close</Button>
	          </Modal.Footer>
	        </Modal>
		);
	}
}

module.exports = SubmitModal;