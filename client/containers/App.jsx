import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from '../components/Header';
import Title from '../components/Title';
import Categories from '../components/Categories';
import Posts from '../components/Posts';
import Footer from '../components/Footer';

const App = () => (
  <Router>
    <div className="app-container">
      <Header />
      <Title />
      <Categories />
      <Posts />
      <Footer />
    </div>
  </Router>
);

export default App;
