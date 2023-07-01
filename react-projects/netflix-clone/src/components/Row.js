import React, {useState, useEffect} from 'react'
import './Row.css'
import axios from '../app/axios'

function Row({ title, fetchUrl, isLargeRow = false }) {

    const [movies, setMovies] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original/";


    useEffect(()=> {

        async function fetchData() {
            const response = await axios.get(fetchUrl);
            const data = response.data.results;
            setMovies(data);

            return response;
        }
        fetchData();
    }, [fetchUrl]);

    //console.log(movies);
    
  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className="row_posters">
            {movies.map((movie) => {
                if((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)){
                    return (
                        <img
                            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                            key={movie.id} 
                            src={`${base_url}${
                            isLargeRow ? movie.poster_path : movie.backdrop_path
                            }`} alt={movie.name} />
                     );
                }
                return undefined; 
            })}
        </div>
    </div>
  )
}

export default Row