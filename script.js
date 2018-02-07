
var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodzieju',
    poster: "https://eplakaty.pl/img/towary/2/2016_10/14151.jpg"
  },
  {
    id: 2,
    title: 'Król lew',
    desc: 'Film o królu sawanny',
    poster: "https://eplakaty.pl/img/towary/2/2016_10/PP33822-The-Lion-Guard-We-Are.jpg"
  },
  { 
    id: 3,
    title: 'Władca Pierścieni',
    desc: 'Film o pierścieniu władzy',
    poster: "http://www.zajawkarz.info/images/stories/film/wladca-pierscieni-druzyna-pierscienia-plakat.jpg"
  },
  { 
    id: 4,
    title: 'Smerfy',
    desc: 'Film o niebieskich ludkach',
    poster: "http://1.fwcdn.pl/po/70/52/7052/7386144.3.jpg"
  }
];

var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },
    render: function() {
        return (React.createElement('li', {},
            React.createElement(MovieTitle, {title: this.props.movie.title}),
            React.createElement(MovieDescription, {desc: this.props.movie.desc}),
            React.createElement(MoviePoster, {poster: this.props.movie.poster})
        ));
    }
});

var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },
    render: function() {
        return React.createElement('h2', {}, this.props.title);
    }
});

var MovieDescription = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired
    },
    render: function() {
        return React.createElement('p', {}, this.props.desc);
    }
});

var MoviePoster = React.createClass({
    propTypes: {
        poster: React.PropTypes.string.isRequired
    },
    render: function() {
        return React.createElement('img', {src: this.props.poster});
    }
});

var moviesElements = movies.map(function(movie) {
    return React.createElement(Movie, {key:movie.id, movie: movie});
});

var MovieList = React.createClass({
    render: function() {
        return React.createElement('ul', {}, moviesElements);
    }
});

var element = React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement(MovieList, {})
);

ReactDOM.render(element, document.getElementById('app'));

 

