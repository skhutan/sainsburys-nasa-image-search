import React from 'react';
import { mount } from 'enzyme';

import Search from '../../components/Search';

import NASAImagesClient from '../../lib/NASAImagesClient';
import NASASearchResults from '../data/NASASearchResults.json';

let wrapper;
let input;

jest.mock('react-router-dom', () => ({ Link: 'Link' }));

describe('Search', () => {
  beforeEach(() => {
    NASAImagesClient.search = jest.fn(() => Promise.resolve(NASASearchResults.collection.items));
    wrapper = mount(<Search />);
    input = wrapper.find('input');
  });

  afterEach(() => NASAImagesClient.search.mockReset());

  // there's currenly a bug with Enzyme 3 and testing changes to inputs so moving on.
  it.skip('updating the input field makes a request to NASA API', () => {
    input.instance().value = 'moon';

    expect(NASAImagesClient.search).toHaveBeenCalledWith('moon');
  });

  it('images are rendered when search results are present', () => {
    expect(wrapper.find('Image').length).toEqual(0);

    wrapper.setState({results: NASASearchResults.collection.items});

    expect(wrapper.find('Image').length).toEqual(3);
  });

  it('clicking on an image redirects to asset page', () => {
    wrapper.setState({results: NASASearchResults.collection.items});

    const link = wrapper.find('Image').at(0).parent();


    expect(link.prop('to')).toEqual('/asset/ARC-1971-AC71-3102');
  });

  it('renders without crashing', () => {
    mount(<Search />);
  });
});
