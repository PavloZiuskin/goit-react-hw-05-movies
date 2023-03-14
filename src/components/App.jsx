import { Routes, Route } from "react-router-dom";
import Home from "views/Home/Home";
import Movies from "views/Movies/Movies";
import MovieDetails from "views/MovieDetails/MovieDetails";
import Navigation from "../components/SharedLouaot/Navigation";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";
export default function App () {
  return (
    <div>
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
    </div>
  );
};
