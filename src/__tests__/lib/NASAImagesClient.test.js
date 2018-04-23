import NASAImagesClient from '../../lib/NASAImagesClient';

const mockResponse = {
  collection: {
    items: {

    }
  }
};

describe('NASAImagesClient', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  describe('search', () => {
    it('calls the search api with correct params', () => {
      fetch.mockResponseOnce(JSON.stringify(mockResponse));
      NASAImagesClient.search('moon');

      expect(fetch).toHaveBeenCalledWith('https://images-api.nasa.gov/search?media_type=image&q=moon');
    });

    it('calls the search api by nasa id', () => {
      fetch.mockResponseOnce(JSON.stringify(mockResponse));
      NASAImagesClient.search('moon', 'some_id');

      expect(fetch).toHaveBeenCalledWith('https://images-api.nasa.gov/search?media_type=image&q=moon&nasa_id=some_id');
    });
  });

  describe('getAsset', () => {
    it('calls the asset api with correct params', () => {
      fetch.mockResponseOnce(JSON.stringify(mockResponse));
      NASAImagesClient.getAsset('as11-40-5874');

      expect(fetch).toHaveBeenCalledWith('https://images-api.nasa.gov/asset/as11-40-5874');
    });
  });

});
