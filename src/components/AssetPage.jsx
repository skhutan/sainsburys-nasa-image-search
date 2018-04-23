import React from 'react';

import NASAImagesClient from '../lib/NASAImagesClient';
import Image from './Image';

class AssetPage extends React.Component {

  state = {
    imageSrc: '',
    data: {}
  }

  componentDidMount = () => {
    const {assetId} = this.props.match.params

    return Promise.all([
      NASAImagesClient.search(null, assetId),
      NASAImagesClient.getAsset(assetId)
    ])
    .then(([searchItems, assetItems]) => {
      const data = searchItems[0].data[0];
      const imageSrc = assetItems[0].href;
      this.setState({data, imageSrc});
    })
  }


  render = () => {
    const {title, description} = this.state.data;
    const {imageSrc} = this.state;

    return (
      <div className="u-text-align-center">
        <h2 className="title">{this.state.data.title}</h2>

        <Image alt={title} src={imageSrc}/>

        <div className="content">
          {this.state.data.description}
        </div>
      </div>
    )
  }
}

export default AssetPage;
