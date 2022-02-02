import './App.css';
import {MovieList} from "./components/MovieList";

export const App = () => {
  return (
    <>
      <header>
        <h1>Movie Marks</h1>
      </header>
      <section className="popularMoviesSection">
        <MovieList listName="Popular Movies" listType="popular" />
      </section>
      <section className="nowPlayingMoviesSection">
        <MovieList listName="Now Playing Movies" listType="now_playing" />
      </section>
      <footer>
        <p className="copyright">Copyright © 2022 Taiki All Rights Reserved.</p>
      </footer>
    </>
  );
}
