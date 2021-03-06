import React from 'react';
import './App.css';

import { BusinessList } from './Components/BusinessList/BusinessList';
import { SearchBar } from './Components/SearchBar/SearchBar'

import yelp from './util/Yelp'

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    }

    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    yelp.searchYelp(term, location, sortBy).then((businesses) => {
      this.setState({
        businesses: businesses
      })
    })
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}