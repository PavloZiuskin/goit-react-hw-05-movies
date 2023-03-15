import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Navigation from "../components/SharedLouaot/Navigation";
import { Container } from "./App.styled";


const Home = lazy(() => import('../views/Home/Home'));
const Movies = lazy(() => import('../views/Movies/Movies'));
const MovieDetails = lazy(() => import('../views/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));
export default function App() {
  
  return (
    <Container>
      <Routes>
        <Route path='/' element={<Navigation/> }>
          <Route index element={<Home/> } />
          <Route path='/movies' element={<Movies/> }/>
          <Route path='/movies/:id' element={<MovieDetails />}>
            <Route path='cast' element ={<Cast/>} />
            <Route path='reviews' element={<Reviews/>} />
          </Route>
        </Route>
      </Routes>
    </Container>
  );
};
