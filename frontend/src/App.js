import React, { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Routes from './components/Routes';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main id="app">
          <Routes />
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;

/*
import React, { Component } from 'react';

class App extends Component {
  state = {
    products: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://localhost:8000/api/');
      const products = await res.json();
      this.setState({
        products
      });
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <div>
        {this.state.products.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <img src={item.url} alt={item.title} />
            <h2>{item.price}</h2>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
*/