import React from 'react';
import { shallow, mount } from 'enzyme';

import AssetPage from '../../components/AssetPage';

import NASAImagesClient from '../../lib/NASAImagesClient';
import NASASearchResults from '../data/NASASearchResults.json';
import NASAAssetResults from '../data/NASAAssetResults.json';

let wrapper;

const props = {
  params: {
    id: 'PA2'
  }
};

const state = {
  imageSrc: 'http://image',
  data: {
    title: 'title',
    description: 'desc',
  }
};

describe('AssetPage', () => {
  beforeEach(() => {
    NASAImagesClient.search = jest.fn(() => Promise.resolve(NASASearchResults.collection.items));
    NASAImagesClient.getAsset = jest.fn(() => Promise.resolve(NASAAssetResults.collection.items));
    wrapper = shallow(<AssetPage match={props}/>);
  });

  afterEach(() => {
    NASAImagesClient.search.mockReset();
    NASAImagesClient.getAsset.mockReset();
  });

  it('makes requests to the NASA API', () => {
    expect(NASAImagesClient.search).toHaveBeenCalled();
    expect(NASAImagesClient.getAsset).toHaveBeenCalled();
  });

  it('renders the necessary data and image', () => {
    wrapper.setState(state);

    expect(wrapper.find('Image').exists()).toBeTruthy();
    expect(wrapper.find('.title').text()).toEqual(state.data.title);
    expect(wrapper.find('.content').text()).toEqual(state.data.description);
  });

  it('renders without crashing', () => {
    mount(<AssetPage match={props}/>);
  });
});
