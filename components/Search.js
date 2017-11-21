Search = React.createClass({
	
	getInitialState() {
		return {
			searchingText: ''
		};
	},
		
	handleChange: function(event) {
		var searchingText = event.target.value;
		this.setState({
			searchingText: searchingText
		});
		
		if (searchingText.length > 2) {
      		this.props.onSearch(searchingText);
		}
	},
	
  	handleKeyUp: function(event) {
		if (event.keyCode === 13) {
		  this.props.onSearch(this.state.searchingText);
		}
	},
	
	
	
	
	
	render: function() {
		var styles = {
			fontSize: '1em',
			width: '90%',
			maxWidth: '300px',
			background: '#f49618',
			margin: '20px',
			padding: '10px',
			color: '#909090'
			
		};
		
	return (
			<input
			type="text"
			onChange={this.handleChange}
			onKeyUp={this.handleKeyUp}
			placeholder="Czego szukasz?"
			style={styles}
			value={this.state.searchTerm}
			/>
			);
		
		
	
	}
});