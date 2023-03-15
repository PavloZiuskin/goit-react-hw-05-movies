import { useParams, useLocation,useNavigate, NavLink, Outlet } from "react-router-dom";
import { useState, useEffect, Suspense } from "react";
import { getMoviesDetaisById } from "services/servicesApi";
export const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';
 function MovieDetails() {
    const location = useLocation();
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        getMoviesDetaisById(id).then(setMovie);
    }, [id])
    
    const handleGoBack = () => {
        navigate(location?.state?.from ?? '/')
    }

    if (!movie) {
        return (<p>Loading ...</p>)
    }
    return (
        <div>
            <button onClick={handleGoBack} type='button'>Go back</button>
            <h1>MovieDetails</h1>

            <h2>{movie.title}</h2>
            <img src={BASE_IMG_URL + movie.poster_path} alt={movie.title} />
            <NavLink to='cast' state={{from: location?.state?.from ?? '/'}}>Cast</NavLink>
            <NavLink to='reviews' state={{from: location?.state?.from ?? '/'}}>Reviews</NavLink>
            <Suspense fallback={<p>Loading ...</p>}>
                <Outlet/>
            </Suspense>
            
        </div>
        
    )
};
export default MovieDetails;