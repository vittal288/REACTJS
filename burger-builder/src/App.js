import React, { Component } from 'react';


import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Classes from './App.module.css';



class App extends Component {
  render() {
    return (
      <div className={Classes.App}>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;