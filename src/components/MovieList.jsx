import {useState,useEffect} from 'react';
import { CSSTransition } from 'react-transition-group';

export const MovieList = (props) => {
  const {listName, listType} = props;

  const [movies, setMovies] = useState([]);
  const [addCount, setAddCount] = useState(1);
  const [movieDetail, setMovieDetail] = useState({});
  const [modalToggle, setModalToggle] = useState({toggle:false, index:null});

  useEffect(() => {
    // 映画のリストを取得
    fetch(`https://api.themoviedb.org/3/movie/${listType}?api_key=444108a040de72eeab7424dedf91ca28&language=en-JA&page=${addCount}`)
    .then(res => res.json())
    .then(list => {
      setMovies([...movies, ...list.results])
    })
  },[addCount]);

  // リストの取得回数をカウント
  const addCountUp = () => {
    setAddCount(addCount+1);
  }

  // 映画の詳細を取得
  const createModal = (index) => {
    fetch(`https://api.themoviedb.org/3/movie/${movies[index].id}?api_key=444108a040de72eeab7424dedf91ca28`)
      .then(res => res.json())
      .then(detail => {
        setMovieDetail(detail);
      })
  }
  
  return (
      <>  
        <h2>{listName}</h2>
        <ul className="movieList">
          {movies.map((movie, index) => {
            return (
              <li key={index} className="movieContainer" onClick={() => {setModalToggle({toggle:true, index}); createModal(index)}}>
                  <img src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} />
                  <p>{movie.original_title}</p>
                  <time>{movie.release_date}</time>
                  <p>{movie.homepage}</p>
              </li>
            );
          })}
        </ul>
        <div className="moreBtn" onClick={addCountUp}>MORE</div>

        <CSSTransition classNames="mask" in={modalToggle.toggle} timeout={300} unmountOnExit>
          <div className="mask" onClick={() => {setModalToggle({toggle:false, index:modalToggle.index}); setTimeout(() => setMovieDetail({}), 300)}}></div>
        </CSSTransition>
        <CSSTransition classNames="modal" in={modalToggle.toggle} timeout={300} unmountOnExit>
          <div className="modal">
            <h3 className="modalTitle">{movieDetail.original_title}</h3>
            {movieDetail.release_date && <p className="modalFacts">{`${movieDetail.release_date}, ${Math.floor(movieDetail.runtime/60)}h${movieDetail.runtime%60}min`}</p>}
            <div className="modalImgOverviewContainer">
              {movieDetail.poster_path && <img src={`https://image.tmdb.org/t/p/w185${movieDetail.poster_path}`} />}
              <p>{movieDetail.overview}</p>
            </div>
            <div className="modalBtn">
              <a className="homepageBtn" href={movieDetail.homepage} target="_blank" rel="noopener noreferrer">HOME PAGE</a>
              <div className="closeModal" onClick={() => {setModalToggle({toggle:false, index:modalToggle.index}); setTimeout(() => setMovieDetail({}), 300)}}>CLOSE</div>
            </div>
          </div>
        </CSSTransition>
      </>
  )
}