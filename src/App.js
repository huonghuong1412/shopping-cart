import React from 'react';
import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import ListProducts from './components/ListProducts'
import Cart from './components/Cart'
import Message from './components/Message'

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        {/* Header */}
        <Header />
        <main id="mainContainer">
          <div className="container">
            {/* Products */}
            <ListProducts />

            {/* Message */}
            <Message />

            {/* Cart */}
            <Cart />
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    );
  }
}

export default App;
