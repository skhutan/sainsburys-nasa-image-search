import React from 'react';
import { Link } from 'react-router-dom';

import NASAImagesClient from '../lib/NASAImagesClient';

import Image from './Image';

class Search extends React.Component {

  state = {
    query: '',
    results: []
  }

  handleInputChange = () => {
    const {value} = this.searchInput;

    if (value) {
      this.setState({query: value});
      NASAImagesClient.search(value)
      .then(results => {
        this.setState({results});
      });
    } else {
      this.setState({results: [], query: ''});
    }
  }

  renderImage = (id, alt, src) => (
    <div className="column is-one-quarter" key={id}>
      <Link to={`/asset/${id}`}>
        <Image alt={alt} src={src}/>
      </Link>
    </div>
  )

  renderImages = () => {
    return this.state.results.map(result => {
      if(result.links && result.links[0]) {
        const {title, nasa_id} = result.data[0];
        const {href} = result.links[0];
        return this.renderImage(nasa_id, title, href);
      }
    })
  }

  renderInputField = () => (
    <div className="field">
      <div className="control has-icons-right">
        <input
          className={`input ${this.getSuccessClass()}`}
          type="text"
          placeholder="Type in some space related things"
          ref={input => this.searchInput = input}
          onChange={this.handleInputChange}
        />
        <span className="icon is-small is-right">
          <i className="fas fa-search"></i>
        </span>
      </div>
    </div>
  )

  getSuccessClass = () => this.state.results.length ? 'is-success' : ''

  render = () => (
    <div className="u-text-align-center">
      <h2 className="title">NASA Image Search</h2>
      {this.renderInputField()}
      <div className="columns is-multiline is-mobile">
        {this.renderImages()}
      </div>
    </div>
  )
}

export default Search;
