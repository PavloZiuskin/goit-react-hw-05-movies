import MoviesList from "components/MoviesList/MoviesList";
import { useEffect,useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getMoviesByQuery } from "services/servicesApi";


export default function Movies() {
    const [params, setParams] = useSearchParams();
    const [movies, setMovies] = useState([])
    
    const query = params.get('query')
    const [value,setValue]=useState(query ?? '')
    useEffect(() => {
        if (!query) {
            return;
        }
        getMoviesByQuery(query).then(setMovies)

    },[query])
    const handleSubmit = (e) => {
        e.preventDefault()
        setParams({ query: e.currentTarget.query.value })
        
    }
    return (
        <div>
            <h1>Movies</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' name='query' value={value} onChange={(e)=>{setValue(e.target.value)} } />
                <button type='submit'>Submit</button>
            </form>
            <MoviesList movies={movies } />

        </div>
        
    )
}