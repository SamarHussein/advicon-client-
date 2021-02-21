import React , {useState} from 'react'
import Movie from './Movie';

const url =  '/api/';

function MovieList() {

  const [movies , setMovies] = useState([]);
  const [searchTerm , setSearchTerm] = useState('');
  const data= {
    s: searchTerm
  } 

  // send the search term to backend
  const sendSearchTerm = async ()=> {
    const response = await fetch(url,{
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
  }

  // get list of movies 
  const getMovies = async ()=> {
    const response = await fetch(url);

      if(response.ok) {
        const data = await response.json();
        setMovies(data)
        //return res.json()
      }
  }

  const handleSubmit= async (e)=>{
    e.preventDefault();
    getMovies();
    sendSearchTerm()
  }
  
  return (
    <div className="App">
      <section className="section search">
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor='search'>Search movie by name</label>
            <input 
                type="text" 
                id="search" 
                name="search" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />  
          </div>
          <button type="submit">Send</button>
        </form>

      </section>
      <section className='section'> 
          <div className="movies-center"></div>
          {movies.map( movie => {
            return (
              <Movie key={movie.id} {...movie}/>
            )
          })}

      </section>
    </div>
  );
}

export default MovieList;
