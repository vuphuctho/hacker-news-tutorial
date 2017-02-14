var React = require("react");

let ListGroup = require('react-bootstrap/lib').ListGroup;
let ListGroupItem = require('react-bootstrap/lib').ListGroupItem;

class PostList extends React.Component {
	constructor(props) {
		super(props);
		this.update = this.update.bind(this);
		this.state = {
			data : []
		};
	}

	componentDidMount() {
		var list = this;
		postDb.find({}).exec(function(error, result) {
			list.state.data = result;
		});
	}

	update() {
		var list = this;
		postDb.find({}).exec(function(error, result) {
			list.setState({ data: result });
		});

	}

	render() {
		var posts = this.state.data.map(
			function(post) {
				if (post.text) {
					return (<ListGroupItem key={post._id} >{post.text}</ListGroupItem>);
				}
				return (<ListGroupItem key={post._id}>{post.title}</ListGroupItem>);
			}
		)

		return (
			<ListGroup>
		    {posts}
		  </ListGroup>
		);
	}
}

module.exports = PostList;