import { Routes, Route } from "react-router-dom";
import Home from "views/Home/Home";
import Movies from "views/Movies/Movies";
import MovieDetails from "views/MovieDetails/MovieDetails";
import Navigation from "./Navigation/Navigation";
export const App = () => {
  return (<div>
    <Routes>
      <Route path='/' element={<Navigation/> }>
        <Route index element={<Home/> } />
        <Route path='/movies' element={<Movies/> }/>
        <Route path='/movies/:id' element={<MovieDetails/> }/>
      </Route>
    </Routes>
    </div>
  );
};
