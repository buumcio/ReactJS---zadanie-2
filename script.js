var Movie = React.createClass({
  propTypes: {
    movies: React.Proptypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('div', {},
        React.createElement('h2', {}, this.props.movies.title),
        React.createElement('p', {}, this.props.movies.desc),
        React.createElement('img', {src: this.props.movies.src})
      )
    )
  },
});


var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodzieju',
    src: "https://ocdn.eu/images/pulscms/NDA7MDA_/e7109fb947cc621b3957be2e2bc1f953.jpeg"
  },
  {
    id: 2,
    title: 'Król lew',
    desc: 'Film o królu sawanny',
    src: "http://1.fwcdn.pl/an/np/1985708/2016/5817_1.7.jpg"
  },
  { 
    id: 3,
    title: 'Władca Pierścieni',
    desc: 'Film o pierścieniu władzy',
    src: "http://1.fwcdn.pl/q/q/77.0.jpg"
  },
  { 
    id: 4,
    title: 'Smerfy',
    desc: 'Film o niebieskich ludkach',
    src: "https://ocdn.eu/pulscms-transforms/1/R8kktkqTURBXy8wZDM5Y2JkNDIyMmE3NjZhOGY1OWYzOThiZDllOTNiNC5qcGVnkpUDAADNBLDNAqOTBc0DIM0Bwg"
  },
  { 
    id: 5,
    title: 'Gladiator',
    desc: 'Film o starożytnym Rzymie',
    src: "http://www.lepoint.fr/images/2017/03/21/7769155lpw-7769908-article-jpg_4171884_980x426.jpg"
  }
];

var element = React.createElement(Movie, {movies: movies});

ReactDOM.render(element, document.getElementById('app'));

var MovieTitle = React.createClass({
  propTypes: {
    moviesTitles: React.Proptypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('div', {},
        React.createElement('h2', {}, this.props.moviesTitles.title),
      )
    )
  },
});


var moviesTitles = [
  {
    id: 1,
    title: 'Harry Potter'
  },
  {
    id: 2,
    title: 'Król lew'
  },
  { 
    id: 3,
    title: 'Władca Pierścieni'
  },
  { 
    id: 4,
    title: 'Smerfy'
  },
  { 
    id: 5,
    title: 'Gladiator'
  }
];

var element = React.createElement(MovieTitle, {moviesTitles: moviesTitles});

ReactDOM.render(element, document.getElementById('app'));

var MovieDescription = React.createClass({
  propTypes: {
    moviesDesc: React.Proptypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('div', {},
        React.createElement('h2', {}, this.props.moviesDesc.title),
      )
    )
  },
});


var moviesDesc = [
  {
    id: 1,
    desc: 'Film o czarodzieju'
  },
  {
    id: 2,
    desc: 'Film o królu sawanny'
  },
  { 
    id: 3,
    desc: 'Film o pierścieniu władzy'
  },
  { 
    id: 4,
    desc: 'Film o niebieskich ludkach'
  },
  { 
    id: 5,
    desc: 'Film o starożytnym Rzymie'
  }
];

var element = React.createElement(MovieTitle, {moviesDesc: moviesDesc});

ReactDOM.render(element, document.getElementById('app'));