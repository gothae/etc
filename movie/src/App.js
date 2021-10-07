import axios from 'axios';
import React, { Component } from 'react';
import Movie from './Movie';
class App extends Component {
  state = {
    isLoading : true,
    movies : [],
  };
  getMovies = async() => {
    const {
      data : {
        data : { movies }
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    this.setState({ movies, isLoading : false })
  }
  componentDidMount(){
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading 
        ? 'Loading' 
        : movies.map((movie) => {
          return (
            <Movie
              key = {movie.id}
              id = {movie.id}
              year = {movie.year}
              title = {movie.title}
              summary = {movie.summary}
              poster = {movie.poster}
              />
            );
          })}
      </div>
    );
  }
}

export default App;