
const Moviecard = ({movie}) => {
    return (
    <div className='movies'>
            <div>
              <h2>
                {movie.Year}
              </h2>
            </div>
            <div>
              <img src={movie.Poster !== 'N/A' ? movie.Poster : 'http://via.placeholder.com/500'} alt={movie.Title} />
            </div>
            <div>
              <span>
                {movie.Type}
              </span>
              <h2>
                  {movie.Title}
              </h2>
            </div>
        </div>
            ); 
}

export default Moviecard;
