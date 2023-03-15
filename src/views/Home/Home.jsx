import { getTrendingMovies } from "services/servicesApi";
import { useEffect,useState } from "react";
import MoviesList from "components/MoviesList/MoviesList";
import { ContainerHeader } from "components/SharedLouaot/Nav.styled";
import { TitlePage } from "./Home.styled";
 function Home() {
    const[movies,setMovies]=useState([])

    useEffect(() => {
        getTrendingMovies().then(setMovies)
    },[])
    return (
        <ContainerHeader>
            <TitlePage>Home</TitlePage>
            <MoviesList movies={movies } />
        </ContainerHeader>
        

    )
};
export default Home;