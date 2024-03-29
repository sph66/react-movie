import React from 'react';
//Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Styles
import {GlobalStyle} from './GlobalStyle';
//Components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';

const App = () => (
    <Router>
      <Header />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/:movieId' element={<Movie />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </Router>
);


export default App;
