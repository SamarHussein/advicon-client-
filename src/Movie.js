import React from 'react';
import { Link} from 'react-router-dom';

const Movie = ({id, Title, Poster, timeSpan}) => {

    return (
        <section className='movie'>
            <div className='img-container'>
                {Poster!=='N/A' && <img src={Poster} alt={Title}/>}
                
            </div>
            <div className="movie-footer">
                <h3>{Title}</h3>
                <p>Released: {timeSpan} ago</p>
                <button ><Link to={`/movie/${id}`}>details</Link></button> 
            </div>
     
        </section>
    )
}

export default Movie
