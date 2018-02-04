var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('div', {},       
        React.createElement('h2', {}, this.props.movie.title),
        React.createElement('p', {}, this.props.movie.desc),
        React.createElement('img', {src: this.props.movie.src})
      )
    )
  },
});
var movie = {
    title: 'Harry Potter',
    desc: 'Film o czarodzieju',
    src: "https://cache2.artprintimages.com/LRG/71/7115/PIRV100Z.jpg"
  };

var element = React.createElement(Movie, {movie: movie});

ReactDOM.render(element, document.getElementById('app')); 


