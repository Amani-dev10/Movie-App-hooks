 
import './App.css';
import { useState } from 'react';
import { moviesData } from './data';
import MovieList from './components/MovieList';
import Search from './components/Search';
import AddMovie from './components/AddMovie';

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [text, setText] = useState('');
  const [rating, setRating] = useState(1);
  
  const handleAdd= (newMovie) => setMovies([...movies,newMovie]);

  const handleText = (e) => setText(e.target.value);
  
  const handleRating = (x) => setRating(x);

  return (
    <div className="App">
      <Search rating={rating} text={text} handleText={handleText} handleRating={handleRating} />
      <MovieList movies={movies.filter(el =>el.name.toLowerCase().includes(text.toLowerCase()) 
      && (el.rating >= rating))} />
      <AddMovie add={handleAdd} />
  
    </div>
  );
}

export default App;
