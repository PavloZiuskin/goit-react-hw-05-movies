import { useParams, useLocation,useNavigate, Outlet } from "react-router-dom";
import { useState, useEffect, Suspense } from "react";
import { getMoviesDetaisById } from "services/servicesApi";
import { Container } from "components/App.styled";
import { TitlePage } from "views/Home/Home.styled";
import { MovieDetailsWrapper, ImgContainer, CastReviewsContainer, NavStyled,ButtonBackTo } from "./MovieDetails.styled";
import defaultImg from '../../images/movie-pic.jpeg'
export const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';
function MovieDetails() {
    const location = useLocation();
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);
    const { id } = useParams();
    
    useEffect(() => {
        getMoviesDetaisById(id).then(setMovie);
    }, [id,])
    
    const handleGoBack = () => {
        navigate(location?.state?.from ?? '/')
    }


    if (!movie) {
        return (<p>Loading ...</p>)
    }
    return (
        <Container>
            <ButtonBackTo onClick={handleGoBack} type='button'>Go back</ButtonBackTo>
            <TitlePage>MovieDetails</TitlePage>
            <MovieDetailsWrapper>
                <ImgContainer>
                    <img src={movie.poster_path ? BASE_IMG_URL+movie.poster_path : defaultImg} alt={movie.title} />
                </ImgContainer>
                <div>
                    <h2>
                        {movie.title ?? movie.original_title} ({Number.parseInt(movie.release_date)})
                    </h2>
                    <p>User score: {Math.round(movie.vote_average * 10)}%</p>
                    <h3>Overview</h3>
                    <p>{movie.overview}</p>
                    <h4>Genres</h4>
                    <p>{movie.genres.map(genre=>genre.name).join(', ')}</p>
                </div>
            </MovieDetailsWrapper>
            <div>
                 <CastReviewsContainer>

                <NavStyled to='cast' state={{from: location?.state?.from ?? '/'}}>Cast</NavStyled>
                <NavStyled to='reviews' state={{ from: location?.state?.from ?? '/' }}>Reviews</NavStyled>
                </CastReviewsContainer>
                <div>
                    <Suspense fallback={<p>Loading ...</p>}>
                        <Outlet/>
                    </Suspense>
                </div>
            </div>  
        </Container>
    )
};
export default MovieDetails;