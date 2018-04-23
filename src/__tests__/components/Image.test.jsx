import React from 'react';
import { shallow, mount } from 'enzyme';

import Image from '../../components/Image';

describe('Image', () => {
  beforeEach(() => {

  });

  it('uses correct props in image element', () => {
    const wrapper = shallow(<Image alt='title' src='http://'/>);
    const img = wrapper.find('img');

    expect(img.props()).toEqual({alt: "title", src: "http://"});
  });

  it('renders without crashing', () => {
    mount(<Image alt='title' src='http://'/>);
  });
});
