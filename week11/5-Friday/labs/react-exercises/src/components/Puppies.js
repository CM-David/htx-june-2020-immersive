import React, { Component } from 'react';
import Stepper from './Stepper'

const API = 'https://raw.githubusercontent.com/RyanHemrick/star_wars_movie_app/master/movies.json'

class Puppies extends Component {
    constructor() {
        super();
        this.state = {
            movies: [],
        }
    }

    componentDidMount() {
        fetch(API)
        .then(response => response.json)
        .then(data => this.setState ({ movies: data.movies}))
    }

    render() {
        const {movies} = this.state;
        return <ul>
        {movies.map(movie =>
          <li key={movie.objectID}>
          </li>
        )}
      </ul>
  }
}

export default Puppies;
