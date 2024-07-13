import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Featured from './components/Featured';
import Contact from './components/Contact';
import './styles.css';

const App = () => (
  <div>
    <Header />
    <main>
      <ProductList />
      <Featured />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default App;
