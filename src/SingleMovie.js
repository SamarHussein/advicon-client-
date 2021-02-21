import React, {useState, useEffect} from 'react'
import { useParams, Link} from 'react-router-dom';

const url= '/api/movie';

const SingleMovie = () => {
    const {id} = useParams();
    const [movieObj, setMovieObj] = useState(null);
    const data= {
      i: id
    } 

    // send movie id to the backend side
    const getSingleMovie = async () =>{ 
        try {
            const response = await fetch( url,{
              method: 'POST', 
              mode: 'cors', 
              cache: 'no-cache', 
              credentials: 'same-origin', 
              headers: {
                'Content-Type': 'application/json'
              },
              redirect: 'follow',
              referrerPolicy: 'no-referrer', 
              body: JSON.stringify(data) 
            });    
        }catch(e){
            console.log(e)
        }
    }

   // get movie details 
const getAmovie = async()=>{
    try {
        const res = await fetch(url);
            if(res.ok) {
                const data = await res.json();
                setMovieObj(data)
                console.log('The movie', data);
            }
    }catch(e) {
        console.log(e);
    }
}
   
useEffect(() => {
    getSingleMovie();
    getAmovie()
 }, [])

if(movieObj==null) {
    return (
        <h2 className="section-title">no Movie to display</h2>
    )
}

const {Title, Year, Genre, Director, Writer,Released, Actors, Plot, Poster } = movieObj;
    return (
        <section className="section movie-section">
            <h1>{Title}</h1>
            <div className='film'> 
                {Poster!=='N/A' && <img src={Poster} alt={Title}/>}
            </div>
            <div className="film-info">
                <h4><span className="film-data">Starring: </span>{Actors}</h4>
                <p><span className="film-data">Story: </span>{Plot}</p>
                <p><span className="film-data">Released:</span> {Released}</p>
                <p><span className="film-data">Director: </span>{Director}</p>
                <p><span className="film-data">Writer: </span>{Writer}</p>
                <p><span className="film-data">year: </span>{Year}</p>
                <p><span className="film-data">Genre: </span>{Genre}</p> 

            </div>
            <button><Link to='/'>Home</Link></button>
        </section>
    )
}

export default SingleMovie
