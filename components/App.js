App = React.createClass({
	
	
	getInitialState() {
			return {
				loading: false,
				searchingText: '',
				gif: {}
			};
		},
	
	
	 getGif: function(searchingText, callback) { 
				var url = 'http://api.giphy.com' + '/v1/gifs/random?api_key=' + '875nhiGzSDpyG8X0h54AyaVhVoZowlKW' + '&tag=' + searchingText;  
				var xhr = new XMLHttpRequest();  
				xhr.open('GET', url);
				xhr.onload = function() {
					if (xhr.status === 200) {
					   var data = JSON.parse(xhr.responseText).data; 
						var gif = {  
							url: data.fixed_width_downsampled_url,
							sourceUrl: data.url
						};
						callback(gif);  
					}
				};
				xhr.send();
			},		 
	
	handleSearch: function(searchingText) {  
					this.setState({
			  		loading: true  
					});
					this.getGif(searchingText, function(gif) {  
					  this.setState({  
						loading: false,  
						gif: gif,  
						searchingText: searchingText 
					  });
					}.bind(this));
				  },
	
	
	
	render: function() {
		
		var styles = {
			margin: '0 auto',
			textAlign: 'center',
			width: '90%'
		};
		
		return (
			<div style={styles} className='main_div'>
				<h1 className='main_h1'>Wyszukaj sobie GIFy</h1>
				<p className='main_p'> Znajdź gify na <a href='http://giphy.com'>GIPhy</a>:</p>
				<p className='main_p'>Wpisz dowolną frazę.</p>
				<p className='main_p'>Naciskaj ENTER, by pobrać kolejne.</p>
				<Search onSearch={this.handleSearch}/>
				<Gif 
					loading={this.state.loading}
    				url={this.state.gif.url}
    				sourceUrl={this.state.gif.sourceUrl}
				/>
			</div>
		)
		
	}
		
})