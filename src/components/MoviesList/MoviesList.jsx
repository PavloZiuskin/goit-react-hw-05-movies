import {  useLocation } from "react-router-dom";
import { MovieList, Item, ImgWrapper, InfoWrapper, StyleItemLink, MovieTitle, ImgSize, InfoForMovie } from "./MoviesList.styled";
import { BASE_IMG_URL } from "views/MovieDetails/MovieDetails";
export default function MoviesList({ movies }) {
    const location = useLocation();
    return (
        <MovieList>
            {movies.map(({id,title,vote_average, release_date,poster_path}) => (<Item key={id}>
                <StyleItemLink to={`/movies/${id}`} state={{ from: location }}>
                    <ImgWrapper>
                        <ImgSize src={BASE_IMG_URL+poster_path} alt={title} />
                    </ImgWrapper>
                    <InfoWrapper>
                        <MovieTitle>{title}</MovieTitle>
                        <InfoForMovie>Rating: {vote_average}</InfoForMovie>
                        <InfoForMovie>{release_date }</InfoForMovie>
                    </InfoWrapper>
                    </StyleItemLink>
            </Item>))}
        </MovieList>
    )
}