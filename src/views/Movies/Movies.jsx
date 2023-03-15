import MoviesList from "components/MoviesList/MoviesList";
import { useEffect,useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getMoviesByQuery } from "services/servicesApi";
import { ContainerHeader } from "components/SharedLouaot/Nav.styled";
import { TitlePage } from '../Home/Home.styled';
import { Form } from "./Movies.styled";


function Movies() {
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
        <ContainerHeader>
            <TitlePage>Movies</TitlePage>
            <Form onSubmit={handleSubmit}>
                <input type='text' name='query' value={value} onChange={(e)=>{setValue(e.target.value)} } />
                <button type='submit'>Search</button>
            </Form>
            <MoviesList movies={movies } />

        </ContainerHeader>
        
    )
};
export default Movies;