import './App.scss';
import { useState } from 'react';
import { MoviesList } from './components/MoviesList';
import { NewMovie } from './components/NewMovie';
import moviesFromServer from './api/movies.json';

export const App = () => {
  const [isChanged, setIsChanged] = useState(true);

  return (
    <div className="page">
      <div className="page-content">
        <MoviesList movies={moviesFromServer} />
      </div>
      <div className="sidebar">
        <NewMovie
          onAdd={movie => {
            moviesFromServer.push(movie);
            setIsChanged(!isChanged);
          }}
        />
      </div>
    </div>
  );
};
